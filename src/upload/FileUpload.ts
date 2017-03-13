import { IFileUploadService } from "../service/IFileUploadService";
import { ButtonsUpload } from "../common/ButtonsUpload";

class FileUploadButtons {
    retry: Function;
    cancel: Function;
    abort: Function;
}

interface IFileUploadController {
    name: string;
    type: string;
    state: string;
    progress: number;
    onCancel(): void;
    onRetry(): void;
    onAbort(): void;
}

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
    buttonFunction: '<?pipButtonFunctions',
    buttons: '<?pipButtons',
    error: '<?pipError',
    name: '<pipName',
    state: '<pipState',
    type: '<?pipType',
    progress: '<pipProgress'
}

class FileUploadChanges implements ng.IOnChangesObject, IFileUploadBindings {
    [key: string]: ng.IChangesObject<any>;

    buttonFunction: ng.IChangesObject<FileUploadButtons>;
    buttons: ng.IChangesObject<boolean>;
    error: ng.IChangesObject<string>;
    name: ng.IChangesObject<string>;
    state: ng.IChangesObject<string>;
    type: ng.IChangesObject<string>;
    progress: ng.IChangesObject<number>;
}


class FileUploadController implements IFileUploadController, IFileUploadBindings {
    public buttonFunction: FileUploadButtons;
    public uploadButtons: ButtonsUpload[];
    public failButtons: ButtonsUpload[];
    public startButtons: ButtonsUpload[];

    public name: string;
    public type: string;
    public state: string;
    public progress: number;
    public buttons: boolean;
    public error: string = null;

    constructor($scope: ng.IScope) { }

    public $onInit() {
        if (this.buttons) {
            this.uploadButtons = [];
            this.failButtons = [
                { title: 'Cancel', click: () => { this.onCancel() } },
                { title: 'Retry', click: () => { this.onRetry() } }
            ];
            this.startButtons = [
                { title: 'Abort', click: () => { this.onAbort() } }
            ];
        }
    }

    public $onChanges(changes: FileUploadChanges) {
        if (changes.state) {
            this.state = changes.state.currentValue;
        }

        if (changes.progress) {
            this.progress = changes.progress.currentValue;
        }

        if (changes.error) {
            this.error = changes.error.currentValue;
        }

    }

    public onCancel(): void {
        if (this.buttonFunction.cancel) this.buttonFunction.cancel();
    }

    public onRetry(): void {
        if (this.buttonFunction.retry) this.buttonFunction.retry();
    }

    public onAbort() {
        if (this.buttonFunction.abort) this.buttonFunction.abort();
    }

}

const fileUploadDirective = {
    controller: FileUploadController,
    bindings: FileUploadBindings,
    templateUrl: 'upload/FileUpload.html'
};


angular
    .module('pipFiles.FileUpload', [])
    .component('pipFileUpload', fileUploadDirective)
