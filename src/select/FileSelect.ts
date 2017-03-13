
(() => {

    interface IFileSelectController {
        localFile: any;
        onUploadButtonClick(): void;
        onDeleteButtonClick(): void;
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
        bindings: {
            localFile: '<pipLocalFile',
            change: '<pipChange'
        },
        controller: FileSelectController,
        templateUrl: 'select/FileSelect.html'
    }

    angular
        .module('pipFiles.Select', [])
        .component('pipFileSelect', fileSelectDirective)


})();
