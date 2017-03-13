interface IFileSelectController {
    localFile: any;
    onUploadButtonClick(): void ;
    onDeleteButtonClick(): void;
}

class FileSelectController implements IFileSelectController {
    public localFile: any;
    
    constructor($scope: ng.IScope) {
        "ngInject";
        /*this.localFile = $scope['localFile'];
         */
        $scope.$watch('$ctrl.localFile', (item) => {
            //this.localFile = item;
            console.log('aa', item);
            //$scope['localFile'] = item;
            console.log($scope);
        })
    }

    public onUploadButtonClick(): void {
        $('#inp_file').click();
    }

    public onDeleteButtonClick(): void {
        this.localFile = null;
        let forml = document.getElementById('inp_form');
        (<any>forml).reset();

    }
}


(() => {
   

    const fileSelectDirective = {
            restrict: 'E',
            replace: true,
            bindings: {
                localFile: '='
            },
            controller: FileSelectController,
            templateUrl: 'select/FileSelect.html'
    }
    
    angular
        .module('pipFiles.Select', [])
        .component('pipFileSelect', fileSelectDirective)


})();
