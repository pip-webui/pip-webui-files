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
    upload(url: string, file: any, transaction: any, callback?: (data: any, err: any) => void): void;
}

export class FileUploadService implements IFileUploadService {
    public progress: number;
    public state: string;
    public error: string = null;

    public constructor( private $http: ng.IHttpService) {}

    public upload(url: string, file: any, callback?: (data: any, err: any) => void): void {
        
        let fd: FormData = new FormData();
        fd.append('file', file);
        
        this.progress = 0;
        this.state = FileUploadState.Start;
        this.$http.post(url, fd, <any>{
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

            if (callback) callback(response, null);
        })    
        .error((response: any) => {
            this.state = FileUploadState.Fail;
            this.error = response.Error || response;

            if (callback) callback(null, response);
        });
    }
}