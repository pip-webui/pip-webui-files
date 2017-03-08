
import {
    IFileUploadService
} from "../service/FileUploadService";

import {
    ButtonsUpload
} from "../common/ButtonsUpload";

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
    //private _buttonFunction: FileUploadButtons;
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

    constructor(
        $scope: ng.IScope
    ) {
        "ngInject";

        //this.buttonFunction = $scope['buttonFunction'];
        
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

        $scope.$watch('state', (state: string) => {
            this.state = state;
        })

        $scope.$watch('error', (error: string) => {
            this.error = error;
        })

        $scope.$watch('progress', (progress: number) => {
            this.progress = progress;
        })
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