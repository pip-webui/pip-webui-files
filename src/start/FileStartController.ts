
import {
    ButtonsUpload
} from "../common/ButtonsUpload";

export interface IFileStartController {
    name: string;
    type: string;
    progress: number;
    buttons: ButtonsUpload[];
}

export class FileStartController implements IFileStartController {
    public name: string;
    public progress: number;
    public type: string;
    public buttons: ButtonsUpload[];

    constructor($scope: ng.IScope) {
        "ngInject";
        
        // Init parameters
        this.type = $scope['type'] || 'file';
        this.name = $scope['name'];
        this.buttons = $scope['buttons'] || null;
        this.progress = $scope['progress'] || null;
      
        $scope.$watch('progress', (progress: number) => {
            this.progress = progress;
        })
    }
}