
import {FileSelectController} from './select/FileSelectController';
import {FileUploadController} from './upload/FileUploadController';
import {FileSuccessController} from './success/FileSuccessController';
import {FileUploadService} from './service/FileUploadService';

(() => {
    function fileModelDirective($parse: any) {
        "ngInject";

        return {
            restrict: 'A',
            link: (scope, element, attrs) => {
                let model = $parse(attrs.fileModel);
                let modelSetter = model.assign;
                
                element.bind('change', () => {
                    scope.$apply(() => {
                        modelSetter(scope, element[0].files[0]);
                    });
                });
            }
        };
    }

    function fileSelectDirective() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                localFile: '='
            },
            controller: FileSelectController,
            controllerAs: 'vm',
            templateUrl: 'select/FileSelect.html'
        };
    }

     function fileUploadDirective() {
        return {
            restrict: 'E',
            replace: true,
            controller: FileUploadController,
            controllerAs: 'vm',
            scope: {
                buttonFunction: '=?pipButtonFunctions',
                buttons: '=?pipButtons',
                error: '=?pipError',
                name: '=pipName',
                state: '=pipState',
                type: '=?pipType',
                progress: '=pipProgress'
            },
            templateUrl: 'upload/FileUpload.html'
        };
    }

     function fileSuccessDirective() {
        return {
            restrict: 'E',
            replace: true,
            controller: FileSuccessController,
            controllerAs: 'vm',
            scope: {
                buttons: '=?pipButtons',
                name: '=pipName',
                type: '=?pipType',
            },
            templateUrl: 'success/FileSuccess.html'
        };
    }

    angular
        .module('pipFiles', [])
        .directive('fileModel', fileModelDirective)
        .directive('pipFileSelect', fileSelectDirective)
        .directive('pipFileUpload', fileUploadDirective)
        .directive('pipSuccesUpload', fileSuccessDirective)
        .service('pipFileUpload', FileUploadService);


})();
