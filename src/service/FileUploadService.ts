import { FileUploadState } from './FileUploadState';
import { IFileUploadService } from './IFileUploadService';

class FileUploadService implements IFileUploadService {

    public constructor(private $http: ng.IHttpService) { }

    public upload(
           url: string,
           file: any, 
           callback?: (data: any, err: any) => void, 
           changeProgress?: (progress: number) => void, 
           changeState?: (state: string) => void ): void {

        let fd: FormData = new FormData();
        fd.append('file', file);

        if (changeProgress) {
            changeProgress(0);
        }
        if (changeState) { 
            changeState(FileUploadState.Start);
        }

        this.$http.post(url, fd, <any>{
            uploadEventHandlers: {
                progress: (e: any) => {
                    if (e.lengthComputable && changeProgress) {
                       changeProgress((e.loaded / e.total) * 100);
                    }
                }
            },
            headers: { 'Content-Type': undefined }
        })
            .success((response: any) => {
                changeState(FileUploadState.Upload);

                if (callback) callback(response, null);
            })
            .error((response: any) => {
                changeState(FileUploadState.Fail);

                if (callback) callback(null, response.Error || response);
            });
    }
}


(() => {


    angular
        .module('pipFiles.Service', [])
        .service('pipFileUpload', FileUploadService);


})();