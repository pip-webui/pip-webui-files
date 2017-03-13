declare module pip.files {

export class ButtonsUpload {
    title: string;
    click: Function;
}




interface IFileSelectController {
    localFile: any;
    onUploadButtonClick(): void;
    onDeleteButtonClick(): void;
}
class FileSelectController implements IFileSelectController {
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

export interface IFileStartBindings {
    [key: string]: any;
    type: any;
    buttons: any;
    name: any;
    progress: any;
}

export interface IFileSuccessBindings {
    [key: string]: any;
    type: any;
    buttons: any;
    name: any;
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

}
