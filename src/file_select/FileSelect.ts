{

    interface IFileSelectController {
        localFile: any;
        onUploadButtonClick(): void;
        onDeleteButtonClick(): void;
    }

    interface IFileSelectBindings {
        [key: string]: any;

        localFile: any,
        change: any
    }

    const FileSelectBindings: IFileSelectBindings = {
        localFile: '<pipLocalFile',
        change: '<pipChange'
    }

    class FileSelectController implements IFileSelectController {
        public localFile: any;
        public change: Function;

        constructor($scope: ng.IScope) {
            "ngInject";
            $scope.$watch('$ctrl.localFile', (item) => {
                if (this.change) {
                    this.change(this.localFile);
                }
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

    const fileSelectDirective = {
        restrict: 'E',
        replace: true,
        bindings: FileSelectBindings,
        controller: FileSelectController,
        templateUrl: 'file_select/FileSelect.html'
    }

    angular
        .module('pipFiles.Select', [])
        .component('pipFileSelect', fileSelectDirective)

}
