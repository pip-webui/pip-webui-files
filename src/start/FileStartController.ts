
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
    public progress: number = 0;
    public type: string;
    public buttons: ButtonsUpload[];

    constructor($scope: ng.IScope) {
        "ngInject";
        
        // Init parameters
      
        $scope.$watch('progress', (progress: number) => {
            this.progress = progress;
        })
    }
}