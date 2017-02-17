export class GlobalProgress {
    public static All: string[] = ['start', 'upload', 'fail'];
    public static Start: string = 'start';
    public static Upload: string = 'upload';
    public static Fail: string = 'fail';
}

export interface IFileSelectService {
    progress: number;
    globalProgress: string;
    error: string;
    transaction;//: pip.services.Transaction;
    upload(url: string, file: any, callback?: (data: any, err: any) => void): void;
    abort(): void;
}

export class FileSelectService implements IFileSelectService {
    private _http: ng.IHttpService;

    public progress: number;
    public globalProgress: string;
    public error: string = null;
    public transaction;//: pip.services.Transaction;

    public constructor(
        $http: ng.IHttpService,
        pipTransaction//: pip.services.ITransactionService
    ) {
        "ngInject";

        this._http = $http;
        this.transaction = pipTransaction.create('upload file');
    }

    public upload(url: string, file: any, callback?: (data: any, err: any) => void): void {
        //console.log(file); 

        let fd = new FormData();
        fd.append('file', file);
        
        this.progress = 0;
        this.transaction.begin(GlobalProgress.Start);
        this.globalProgress = GlobalProgress.Start;
        this._http.post(url, fd, <any>{
            uploadEventHandlers: {
                progress: (e: any) => {
                    if (e.lengthComputable) {
                        this.progress = (e.loaded / e.total) * 100;
                    }
                }
            },
            headers: { 'Content-Type': undefined }
        })    
        .success((response: any) => {
            this.globalProgress = GlobalProgress.Upload;
            this.transaction.end(GlobalProgress.Upload);

            if (callback) callback(response, null);
        })    
        .error((response: any) => {
            this.globalProgress = GlobalProgress.Fail;
            this.transaction.end(GlobalProgress.Fail);
            this.error = response.Error || response;

            if (callback) callback(null, response);
        });
    }

    public abort(): void {
        this.transaction.abort();
        //this.globalProgress = null;
    }


}