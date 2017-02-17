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
    constructor($scope: ng.IScope, pipFileSelect: IFileSelectService);
    globalProgress(): string;
    errorFail(): string;
    localProgress(): number;
    onCancel(): void;
    onRetry(): void;
    abort(): void;
}

export class GlobalProgress {
    static All: string[];
    static Start: string;
    static Upload: string;
    static Fail: string;
}
export interface IFileSelectService {
    progress: number;
    globalProgress: string;
    error: string;
    transaction: any;
    upload(url: string, file: any, callback?: (data: any, err: any) => void): void;
    abort(): void;
}
export class FileSelectService implements IFileSelectService {
    private _http;
    progress: number;
    globalProgress: string;
    error: string;
    transaction: any;
    constructor($http: ng.IHttpService, pipTransaction: any);
    upload(url: string, file: any, callback?: (data: any, err: any) => void): void;
    abort(): void;
}

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

}
