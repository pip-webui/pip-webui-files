
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
    private _functions: FileUploadButtons;
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

        this._functions = $scope['buttonFunction'];
        
        // Init parameters
        if (this._functions) {
            this.uploadButtons = [];
            this.failButtons = [
                {title: 'Cancel', click: () => { this.onCancel()}},
                {title: 'Retry', click: () => { this.onRetry()}}
            ];
            this.startButtons = [
                {title: 'Abort', click: () => { this.onAbort() }}
            ];
        }
        this.buttons = $scope['buttons'] || false;
        this.type = $scope['type'] || 'file';
        this.name = $scope['name'];
        this.state = $scope['state'];
        this.error = $scope['error'];
        this.progress = $scope['progress'];

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
        if (this._functions.cancel) this._functions.cancel();
    }

    public onRetry(): void {
        if (this._functions.retry) this._functions.retry();
    }

    public onAbort() {
        if (this._functions.abort) this._functions.abort();
    }

}