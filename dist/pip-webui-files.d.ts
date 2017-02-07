declare module pip.files {


export class FileProgressController {
    private _service;
    private _cancel;
    private _retry;
    name: any;
    type: any;
    constructor($scope: any, pipFileUpload: IFileUploadService);
    globalProgress(): string;
    errorFail(): string;
    localProgress(): number;
    onCancel(): void;
    onRetry(): void;
    abort(): void;
}


export interface IFileUploadService {
    progress: number;
    globalProgress: string;
    error: string;
    transaction: any;
    upload(url: string, file: any, callback?: (data: any, err: any) => void): void;
    abort(): void;
}
export class FileUploadService implements IFileUploadService {
    private _http;
    progress: number;
    globalProgress: string;
    error: string;
    transaction: any;
    constructor($http: ng.IHttpService, pipTransaction: any);
    upload(url: string, file: any, callback?: (data: any, err: any) => void): void;
    abort(): void;
}

export class FileUploadController {
    localFile: any;
    constructor($scope: any);
    onUploadButtonClick(): void;
    onDeleteButtonClick(): void;
}

}
