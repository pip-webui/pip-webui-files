
import {FileSuccessController} from './FileSuccessController';

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
