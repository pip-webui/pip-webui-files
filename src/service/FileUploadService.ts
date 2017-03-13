import { FileUploadState } from './FileUploadState';
import { IFileUploadService } from './IFileUploadService';

class FileUploadService implements IFileUploadService {

    public constructor(private $http: ng.IHttpService) {
        "ngInject";
    }

    public upload(file: any, url: string,
        resultCallback?: (data: any, err: any) => void,
        progressCallback?: (state: FileUploadState, progress: number) => void
    ): void {

        let fd: FormData = new FormData();
        fd.append('file', file);

        if (progressCallback)
            progressCallback(FileUploadState.Uploading, 0);

        this.$http.post(url, fd, <any>{
            uploadEventHandlers: {
                progress: (e: any) => {
                    if (e.lengthComputable && progressCallback) {
                        progressCallback(FileUploadState.Uploading, (e.loaded / e.total) * 100);
                    }
                }
            },
            headers: { 'Content-Type': undefined }
        })
        .success((response: any) => {
            if (progressCallback)
                progressCallback(FileUploadState.Completed, 100);

            if (resultCallback)
                resultCallback(response, null);
        })
        .error((response: any) => {
            if (progressCallback)
                progressCallback(FileUploadState.Failed, 0);

            if (resultCallback)
                resultCallback(null, response.Error || response);
        });
    }
}

angular
    .module('pipFiles.Service', [])
    .service('pipFileUpload', FileUploadService);
