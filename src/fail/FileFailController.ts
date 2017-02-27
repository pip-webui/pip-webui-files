
import {
    ButtonsUpload
} from "../common/ButtonsUpload";

export interface IFileFailController {
    name: string;
    type: string;
    error: string;
    buttons: ButtonsUpload[];
}

export class FileFailController implements IFileFailController {
    public name: string;
    public type: string;
    public error: string;
    public buttons: ButtonsUpload[];

    constructor($scope: ng.IScope) {
        "ngInject";
        
        // Init parameters
        this.type = $scope['type'] || 'file';
        this.name = $scope['name'];
        this.buttons = $scope['buttons'] || null;
        this.error = $scope['error'] || null;
        
        $scope.$watch('error', (error: string) => {
            this.error = error;
        })
      
    }
}