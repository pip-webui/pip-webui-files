
import {
    IFileUploadService
} from "../service/FileUploadService";

export interface IFileProgressController {
    name: string;
    type: string;
    globalProgress(): string;
    localProgress(): number;
    onCancel(): void;
    onCancel(): void;
    abort(): void;
}

export class FileProgressController implements IFileProgressController {
    private _service: IFileUploadService;
    private _cancel: Function;
    private _retry: Function;
    
    public name: string;
    public type: string;

    constructor(
        $scope: ng.IScope, 
        pipFileUpload: IFileUploadService
    ) {
        "ngInject";
        
        // Init parameters
        this.type = $scope['type'] || 'file';
        this._cancel = $scope['cancel'];
        this._retry = $scope['retry'];
        this.name = $scope['name'];

        this._service = pipFileUpload;
    }

    public globalProgress(): string {
        return this._service.globalProgress;
    }

    public errorFail(): string {
        return this._service.error;
    }

    public localProgress(): number {
        return this._service.progress;
    }

    public onCancel(): void {
        if (this._cancel) this._cancel();
    }

    public onRetry(): void {
        if (this._retry) this._retry();
    }

    public abort() {
        this._service.abort();
        if (this._cancel) this._cancel();
    }

}