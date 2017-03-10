
import {
    ButtonsUpload
} from "../common/ButtonsUpload";

import {
    FileFailChanges,
    IFileFailBindings
} from "./index";

export interface IFileFailController {
    name: string;
    type: string;
    error: string;
    buttons: ButtonsUpload[];
}

export class FileFailController implements IFileFailController, IFileFailBindings {
    public name: string;
    public type: string;
    public error: string;
    public buttons: ButtonsUpload[];

    constructor($scope: ng.IScope) {
        "ngInject";
        
        // Init parameters
        
        $scope.$watch('error', (error: string) => {
            this.error = error;
        })
    }
}