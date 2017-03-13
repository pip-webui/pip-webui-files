
import {
    ButtonsUpload
} from "../common/ButtonsUpload";

interface IFileStartBindings {
    [key: string]: any;

    type: any
    buttons: any,
    name: any,
    progress: any
}

const FileStartBindings: IFileStartBindings = {
    buttons: '<?pipButtons',
    name: '<pipName',
    type: '<?pipType',
    progress: '<?pipProgress'
};


class FileStartChanges implements ng.IOnChangesObject, IFileStartBindings {
    [key: string]: ng.IChangesObject<any>;

    buttons: ng.IChangesObject<ButtonsUpload[]>;
    name: ng.IChangesObject<string>;
    type: ng.IChangesObject<string>;
    progress: ng.IChangesObject<number>;
}


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

    constructor() { }

    public $onChanges(changes: FileStartChanges) {
        if (changes.progress) {
            this.progress = changes.progress.currentValue;
        }

    }

}


(() => {

    const fileStartDirective = {
        controller: FileStartController,
        bindings: FileStartBindings,
        templateUrl: 'start/FileStart.html'
    };

    angular
        .module('pipFiles.StartUpload', [])
        .component('pipStartUpload', fileStartDirective)


})();
