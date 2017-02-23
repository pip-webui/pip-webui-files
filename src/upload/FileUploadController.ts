
import {
    IFileUploadService
} from "../service/FileUploadService";

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
    private _service: IFileUploadService;
    private _buttonFunction: FileUploadButtons;
    
    public name: string;
    public type: string;
    public state: string;
    public progress: number;
    public buttons: boolean;

    constructor(
        $scope: ng.IScope, 
        pipFileUpload: IFileUploadService
    ) {
        "ngInject";
        
        // Init parameters
        this._buttonFunction = $scope['buttonFunction'] || new FileUploadButtons();
        this.buttons = $scope['buttons'] || false;
        this.type = $scope['type'] || 'file';
        this.name = $scope['name'];
        this.state = $scope['state'];
        this.progress = $scope['progress'];

        $scope.$watch('state', (state: string) => {
            this.state = state;
        })

        $scope.$watch('progress', (progress: number) => {
            this.progress = progress;
        })

        this._service = pipFileUpload;
    }

    public errorFail(): string {
        return this._service.error;
    }

    public onCancel(): void {
        if (this._buttonFunction.cancel) this._buttonFunction.cancel();
    }

    public onRetry(): void {
        if (this._buttonFunction.retry) this._buttonFunction.retry();
    }

    public onAbort() {
        if (this._buttonFunction.abort) this._buttonFunction.abort();
    }

}