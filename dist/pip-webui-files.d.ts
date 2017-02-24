declare module pip.files {


export interface IFileSelectController {
    localFile: any;
    onUploadButtonClick(): void;
    onDeleteButtonClick(): void;
}
export class FileSelectController implements IFileSelectController {
    localFile: any;
    constructor($scope: ng.IScope);
    onUploadButtonClick(): void;
    onDeleteButtonClick(): void;
}

export class FileUploadState {
    static All: string[];
    static Start: string;
    static Upload: string;
    static Fail: string;
}
export interface IFileUploadService {
    progress: number;
    state: string;
    error: string;
    upload(url: string, file: any, transaction: any, callback?: (data: any, err: any) => void): void;
}
export class FileUploadService implements IFileUploadService {
    private _http;
    progress: number;
    state: string;
    error: string;
    constructor($http: ng.IHttpService);
    upload(url: string, file: any, transaction: any, callback?: (data: any, err: any) => void): void;
}

export interface IFileUploadController {
    name: string;
    type: string;
    state: string;
    progress: number;
    onCancel(): void;
    onRetry(): void;
    onAbort(): void;
}
export class FileUploadButtons {
    retry: Function;
    cancel: Function;
    abort: Function;
}
export class FileUploadController implements IFileUploadController {
    private _buttonFunction;
    name: string;
    type: string;
    state: string;
    progress: number;
    buttons: boolean;
    error: string;
    constructor($scope: ng.IScope);
    onCancel(): void;
    onRetry(): void;
    onAbort(): void;
}

}
