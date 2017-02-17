
import {FileSelectController} from './upload/FileSelectController';
import {FileProgressController} from './progress/FileProgressController';
import {FileSelectService} from './service/FileSelectService';

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
            templateUrl: 'upload/FileSelect.html'
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
        .directive('pipFileSelect', fileSelectDirective)
        .directive('pipFileProgress', fileProgressDirective)
        .service('pipFileSelect', FileSelectService);


})();
