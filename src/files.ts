
import {FileSelectController} from './select/FileSelectController';
import {FileUploadController} from './upload/FileUploadController';
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
                cancel: '=pipCancel',
                retry: '=pipRetry' ,
                name: '=pipName',
                state: '=pipState',
                type: '=?pipType',
                progress: '=pipProgress'
            },
            templateUrl: 'upload/FileUpload.html'
        };
    }

    angular
        .module('pipFiles', [])
        .directive('fileModel', fileModelDirective)
        .directive('pipFileSelect', fileSelectDirective)
        .directive('pipFileUpload', fileUploadDirective)
        .service('pipFileUpload', FileUploadService);


})();
