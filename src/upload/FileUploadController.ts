
import {
    IFileUploadService
} from "../service/FileUploadService";

export interface IFileUploadController {
    name: string;
    type: string;
    onCancel(): void;
    onCancel(): void;
    abort(): void;
}

export class FileUploadController implements IFileUploadController {
    private _service: IFileUploadService;
    private _cancel: Function;
    private _retry: Function;
    
    public name: string;
    public type: string;
    public state: string;
    public progress: number;

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