
import {FileUploadController} from './upload/FileUploadController';
import {FileProgressController} from './progress/FileProgressController';
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

    function fileUploadDirective() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                localFile: '='
            },
            controller: FileUploadController,
            controllerAs: 'vm',
            templateUrl: 'upload/FileUpload.html'
        };
    }

     function fileProgressDirective() {
        return {
            restrict: 'E',
            replace: true,
            controller: FileProgressController,
            controllerAs: 'vm',
            scope: {
                cancel: '=pipCancel',
                retry: '=pipRetry' ,
                name: '=pipName',
                type: '=?pipType'
            },
            templateUrl: 'progress/FileProgress.html'
        };
    }

    angular
        .module('pipFiles', [])
        .directive('fileModel', fileModelDirective)
        .directive('pipFileUpload', fileUploadDirective)
        .directive('pipFileProgress', fileProgressDirective)
        .service('pipFileUpload', FileUploadService);


})();
