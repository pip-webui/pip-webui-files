
import {
    IFileUploadService
} from "../service/FileUploadService";

import {
    ButtonsUpload
} from "../common/ButtonsUpload";

import {
    FileUploadChanges
} from "./index";

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

    constructor( $scope: ng.IScope ) {
        "ngInject";
        
        // Init parameters
        if (this.buttonFunction) {
            this.uploadButtons = [];
            this.failButtons = [
                {title: 'Cancel', click: () => { this.onCancel()}},
                {title: 'Retry', click: () => { this.onRetry()}}
            ];
            this.startButtons = [
                {title: 'Abort', click: () => { this.onAbort() }}
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