
export interface IFileUploadService {
    progress: number;
    globalProgress: string;
    error: string;
    transaction;//: pip.services.Transaction;
    upload(url: string, file: any, callback?: (data: any, err: any) => void): void;
    abort(): void;
}

export class FileUploadService implements IFileUploadService {
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
        this.transaction.begin('start');
        this.globalProgress = 'start';
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
            this.globalProgress = 'upload';
            this.transaction.end('success');

            if (callback) callback(response, null);
        })    
        .error((response: any) => {
            this.globalProgress = 'fail';
            this.transaction.end('error');
            this.error = response.Error || response;

            if (callback) callback(null, response);
        });
    }

    public abort(): void {
        this.transaction.abort();
        //this.globalProgress = null;
    }


}