
import {
    ButtonsUpload
} from "../common/ButtonsUpload";

interface IFileStartController {
    name: string;
    type: string;
    progress: number;
    buttons: ButtonsUpload[];
}

class FileStartController implements IFileStartController {
    public name: string;
    public progress: number = 0;
    public type: string;
    public buttons: ButtonsUpload[];

    constructor() {}
}


export interface IFileStartBindings {
    [key: string]: any;

    type: any
    buttons: any,
    name: any,
    progress: any
}

const FileStartBindings: IFileStartBindings = {
    buttons: '=?pipButtons',
    name: '=pipName',
    type: '=?pipType',
    progress: '=?pipProgress'
};

(() => {
 
    const fileStartDirective = {
        restrict: 'E',
        replace: true,
        controller: FileStartController,
        controllerAs: 'vm',
        bindings: FileStartBindings,
        templateUrl: 'start/FileStart.html'
    };

    angular
        .module('pipFiles.StartUpload', [])
        .component('pipStartUpload', fileStartDirective)


})();
