
import {
    IFileUploadService
} from "../service/FileUploadService";

export class FileProgressController {
    private _service: IFileUploadService;
    private _cancel: Function;
    private _retry: Function;
    
    public name;
    public type;

    constructor($scope, pipFileUpload: IFileUploadService ) {
        "ngInject";
        
        this.type = $scope.type || 'file';
        this._cancel = $scope.cancel;
        this._retry = $scope.retry;
        this._service = pipFileUpload;
        this.name = $scope.name;
    }

    public globalProgress():string {
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