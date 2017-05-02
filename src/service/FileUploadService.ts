import { FileUploadState } from './FileUploadState';
import { IFileUploadService } from './IFileUploadService';

let async = require('async');


export class MultiuploadResult {
    public index: number; // elemtnt index into upload collection
    public data: any;
    public error: any;
    public id: string; // value of identificated field
}

class FileUploadService implements IFileUploadService {

    public constructor(
        private $http: ng.IHttpService,
        private $q: ng.IQService
    ) {
        "ngInject";
    }


    public multiUpload(uploadedUrl: string, collections: any[], oneFileResultCallback: (index: number, data: any, err: any) => void,
        oneFileProgressCallback: (index: number, state: FileUploadState, progress: number) => void,
        successCallback: (error: any, result: any, res: MultiuploadResult[]) => void, 
        abortCallback?: (cancelQuery: any) => void, 
        breakOnFirstError?: boolean, idField?: string): void {

        let cancelQuery = this.$q.defer(); // call cancelQuery.resolve(); for abort
        if (abortCallback) {
            abortCallback(cancelQuery);
        }
        let res: MultiuploadResult[] = [];
        idField = idField ? idField : 'id';

        async.eachOf(collections,
            (item, index, callback) => {
                if (!item.file) {
                    res.push({
                        index: index,
                        data: null,
                        error: null,
                        id: item[idField]
                    });

                    callback();
                    return;
                }
                let fd: FormData = new FormData();
                fd.append('file', item.file);
                oneFileProgressCallback(index, FileUploadState.Uploading, 0);

                this.$http.post(uploadedUrl, fd, <any>{
                    timeout: cancelQuery.promise,
                    uploadEventHandlers: {
                        progress: (e: any) => {
                            if (e.lengthComputable) {
                                oneFileProgressCallback(index, FileUploadState.Uploading, (e.loaded / e.total) * 100);
                            }
                        }
                    },
                    headers: {
                        'Content-Type': undefined,
                        'Access-Control-Allow-Origin': '*'
                    }
                })
                    .then(
                    (response: any) => {
                        res.push({
                            index: index,
                            data: response.data,
                            error: null,
                            id: item[idField]
                        });
                        oneFileProgressCallback(index, FileUploadState.Completed, 100);
                        oneFileResultCallback(index, response.data, null);
                        callback();
                    },
                    (response: any) => {
                        res.push({
                            index: index,
                            data: null,
                            error: response.data,
                            id: item[idField]
                        });
                        oneFileProgressCallback(index, FileUploadState.Failed, 0);
                        oneFileResultCallback(index, null, response.data);

                        // break on first error
                        if (breakOnFirstError) {
                            callback(response.data);
                        } else {
                            callback();
                        }
                        
                    });
            },
            (error, result) => {
                cancelQuery = null;
                successCallback(error, result, res);
            });
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
