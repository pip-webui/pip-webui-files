declare module pip.files {

export class ButtonsUpload {
    title: string;
    click: Function;
}


export interface IFileFailController {
    name: string;
    type: string;
    error: string;
    buttons: ButtonsUpload[];
}
export class FileFailController implements IFileFailController {
    name: string;
    type: string;
    error: string;
    buttons: ButtonsUpload[];
    constructor($scope: ng.IScope);
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
    private $http;
    progress: number;
    state: string;
    error: string;
    constructor($http: ng.IHttpService);
    upload(url: string, file: any, callback?: (data: any, err: any) => void): void;
}

export interface IFileStartController {
    name: string;
    type: string;
    progress: number;
    buttons: ButtonsUpload[];
}
export class FileStartController implements IFileStartController {
    name: string;
    progress: number;
    type: string;
    buttons: ButtonsUpload[];
    constructor($scope: ng.IScope);
}


export interface IFileSuccessController {
    name: string;
    type: string;
    buttons: ButtonsUpload[];
}
export class FileSuccessController implements IFileSuccessController, IFileSuccessBindings {
    name: string;
    type: string;
    buttons: ButtonsUpload[];
    constructor();
    $onChanges(changes: any): void;
}

export interface IFileSuccessBindings {
    [key: string]: any;
    type: any;
    buttons: any;
    name: any;
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
    buttonFunction: FileUploadButtons;
    uploadButtons: ButtonsUpload[];
    failButtons: ButtonsUpload[];
    startButtons: ButtonsUpload[];
    name: string;
    type: string;
    state: string;
    progress: number;
    buttons: boolean;
    error: string;
    constructor($scope: ng.IScope);
    $onChanges(changes: FileUploadChanges): void;
    onCancel(): void;
    onRetry(): void;
    onAbort(): void;
}

export interface IFileUploadBindings {
    [key: string]: any;
    buttonFunction: any;
    buttons: any;
    error: any;
    name: any;
    state: any;
    type: any;
    progress: any;
}
export class FileUploadChanges implements ng.IOnChangesObject, IFileUploadBindings {
    [key: string]: ng.IChangesObject<any>;
    buttonFunction: ng.IChangesObject<FileUploadButtons>;
    buttons: ng.IChangesObject<boolean>;
    error: ng.IChangesObject<string>;
    name: ng.IChangesObject<string>;
    state: ng.IChangesObject<string>;
    type: ng.IChangesObject<string>;
    progress: ng.IChangesObject<number>;
}

}
