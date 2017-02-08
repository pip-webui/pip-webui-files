declare module pip.files {


export interface IFileProgressController {
    name: string;
    type: string;
    globalProgress(): string;
    localProgress(): number;
    onCancel(): void;
    onCancel(): void;
    abort(): void;
}
export class FileProgressController implements IFileProgressController {
    private _service;
    private _cancel;
    private _retry;
    name: string;
    type: string;
    constructor($scope: ng.IScope, pipFileUpload: IFileUploadService);
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

export interface IFileUploadController {
    localFile: any;
    onUploadButtonClick(): void;
    onDeleteButtonClick(): void;
}
export class FileUploadController implements IFileUploadController {
    localFile: any;
    constructor($scope: ng.IScope);
    onUploadButtonClick(): void;
    onDeleteButtonClick(): void;
}

}
