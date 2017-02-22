export class FileUploadState {
    public static All: string[] = ['start', 'upload', 'fail'];
    public static Start: string = 'start';
    public static Upload: string = 'upload';
    public static Fail: string = 'fail';
}

export interface IFileUploadService {
    progress: number;
    state: string;
    error: string;
    transaction;//: pip.services.Transaction;
    upload(url: string, file: any, callback?: (data: any, err: any) => void): void;
    abort(): void;
}

export class FileUploadService implements IFileUploadService {
    private _http: ng.IHttpService;

    public progress: number;
    public state: string;
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
        this.transaction.begin(FileUploadState.Start);
        this.state = FileUploadState.Start;
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
            this.state = FileUploadState.Upload;
            this.transaction.end(FileUploadState.Upload);

            if (callback) callback(response, null);
        })    
        .error((response: any) => {
            this.state = FileUploadState.Fail;
            this.transaction.end(FileUploadState.Fail);
            this.error = response.Error || response;

            if (callback) callback(null, response);
        });
    }

    public abort(): void {
        this.transaction.abort();
        //this.state = null;
    }


}