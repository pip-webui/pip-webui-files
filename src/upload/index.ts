
import {FileUploadController, FileUploadButtons} from './FileUploadController';

interface IFileUploadBindings {
    [key: string]: any;

    buttonFunction: any,
    buttons: any,
    error: any,
    name: any,
    state: any,
    type: any,
    progress: any
}

const FileUploadBindings: IFileUploadBindings = {
    buttonFunction: '=?pipButtonFunctions',
    buttons: '=?pipButtons',
    error: '=?pipError',
    name: '<pipName',
    state: '=pipState',
    type: '=?pipType',
    progress: '=pipProgress'
}

class FileUploadChanges implements ng.IOnChangesObject, IFileUploadBindings {
    [key: string]: ng.IChangesObject<any>;
    // Not one way bindings

    buttonFunction: ng.IChangesObject<FileUploadButtons>;
    buttons: ng.IChangesObject<boolean>;
    error: ng.IChangesObject<string>;
    name: ng.IChangesObject<string>;
    state: ng.IChangesObject<string>;
    type: ng.IChangesObject<string>;
    progress: ng.IChangesObject<number>;
    //currentButtonValue: any;
    //currentButton: any;
    //change: ng.IChangesObject<() => ng.IPromise<void>>;
    // One way bindings
}

const fileUploadDirective = {
    controller: FileUploadController,
    bindings: FileUploadBindings,
    templateUrl: 'upload/FileUpload.html'
};


(() => {

    angular
        .module('pipFiles.FileUpload', [])
        .component('pipFileUpload', fileUploadDirective)
       
})();
