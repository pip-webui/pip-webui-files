
import {
    ButtonsUpload
} from "../common/ButtonsUpload";

export interface IFileSuccessBindings {
    [key: string]: any;

    type: any
    buttons: any,
    name: any
}

const FileSuccessBindings: IFileSuccessBindings = {
    buttons: '=?pipButtons',
    name: '=pipName',
    type: '=?pipType',
};


interface IFileSuccessController {
    name: string;
    type: string;
    buttons: ButtonsUpload[];
}

class FileSuccessController implements IFileSuccessController, IFileSuccessBindings {
    public name: string;
    public type: string = 'file';
    public buttons: ButtonsUpload[];

    constructor() {}

    public $onChanges(changes) {}
}


(() => {
 
     const fileSuccessDirective = {
            restrict: 'E',
            replace: true,
            controller: FileSuccessController,
            controllerAs: 'vm',
            bindings: FileSuccessBindings,
            templateUrl: 'success/FileSuccess.html'
    }


    angular
        .module('pipFiles.SuccessUpload', [])
        .component('pipSuccesUpload', fileSuccessDirective)


})();