export interface IFileSuccessController {
    name: string;
    type: string;
    buttons: boolean;
}

export class FileSuccessController implements IFileSuccessController {
    public name: string;
    public type: string;
    public buttons: boolean;

    constructor($scope: ng.IScope) {
        "ngInject";
        
        // Init parameters
        this.type = $scope['type'] || 'file';
        this.name = $scope['name'];
        this.buttons = $scope['buttons'];
      
    }
}