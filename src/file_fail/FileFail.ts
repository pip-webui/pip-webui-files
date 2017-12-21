import { ButtonsUpload } from "../common/ButtonsUpload";

interface IFileFailBindings {
    [key: string]: any;

    buttons: any,
    name: any,
    type: any,
    error: any
}

const FileFailBindings: IFileFailBindings = {
    buttons: '<?pipButtons',
    name: '<pipName',
    type: '<?pipType',
    error: '<pipError'
}

class FileFailChanges implements ng.IOnChangesObject, IFileFailBindings {
    [key: string]: ng.IChangesObject<any>;

    buttons: ng.IChangesObject<ButtonsUpload[]>;
    error: ng.IChangesObject<string>;
    name: ng.IChangesObject<string>;
    type: ng.IChangesObject<string>;
}


interface IFileFailController {
    name: string;
    type: string;
    error: string;
    buttons: ButtonsUpload[];
}

class FileFailController implements IFileFailController, IFileFailBindings {
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

const fileFailComponent: ng.IComponentOptions = {
    controller: FileFailController,
    bindings: FileFailBindings,
    templateUrl: 'file_fail/FileFail.html'
};

angular
    .module('pipFiles.FailUpload', [])
    .component('pipFailUpload', fileFailComponent)
