
import {FileSelectController} from './select/FileSelectController';
import {FileFailController} from './fail/FileFailController';
import {FileUploadService} from './service/FileUploadService';

import './success/index';
import './upload/index';
import './start/index';

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
     function fileFailDirective() {
        return {
            restrict: 'E',
            replace: true,
            controller: FileFailController,
            controllerAs: 'vm',
            scope: {
                buttons: '=?pipButtons',
                name: '=pipName',
                type: '=?pipType',
                error: '=pipError'
            },
            templateUrl: 'fail/FileFail.html'
        };
    }


    angular
        .module('pipFiles', ['pipFiles.SuccessUpload', 'pipFiles.FileUpload', 'pipFiles.StartUpload'])
        .directive('fileModel', fileModelDirective)
        .directive('pipFileSelect', fileSelectDirective)
        .directive('pipFailUpload', fileFailDirective)
        .service('pipFileUpload', FileUploadService);


})();
