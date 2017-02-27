
import {
    ButtonsUpload
} from "../common/ButtonsUpload";

export interface IFileSuccessController {
    name: string;
    type: string;
    buttons: ButtonsUpload[];
}

export class FileSuccessController implements IFileSuccessController {
    public name: string;
    public type: string;
    public buttons: ButtonsUpload[];

    constructor($scope: ng.IScope) {
        "ngInject";
        
        // Init parameters
        this.type = $scope['type'] || 'file';
        this.name = $scope['name'];
        this.buttons = $scope['buttons'] || null;
      
    }
}