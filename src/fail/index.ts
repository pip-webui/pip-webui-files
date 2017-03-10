
import { FileFailController } from './FileFailController';
import { ButtonsUpload } from '../common/ButtonsUpload';

export interface IFileFailBindings {
    [key: string]: any;

    buttons: any,
    name: any,
    type: any,
    error: any
}

const FileFailBindings: IFileFailBindings = {
    buttons: '<?pipButtons',
    name: '<pipName',
    type: '<?pipType',
    error: '<pipError'
}

export class FileFailChanges implements ng.IOnChangesObject, IFileFailBindings {
    [key: string]: ng.IChangesObject<any>;

    buttons: ng.IChangesObject<ButtonsUpload[]>;
    error: ng.IChangesObject<string>;
    name: ng.IChangesObject<string>;
    type: ng.IChangesObject<string>;
}

const fileFailComponent: ng.IComponentOptions = {
    controller: FileFailController,
    bindings: FileFailBindings,
    templateUrl: 'fail/FileFail.html'
};


(() => {

    angular
        .module('pipFiles.FailUpload', [])
        .component('pipFailUpload', fileFailComponent)


})();
