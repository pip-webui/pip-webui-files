﻿
import {FileSelectController} from './select/FileSelectController';
import {FileUploadService} from './service/FileUploadService';

import './success/index';
import './upload/index';
import './start/index';
import './fail/index';

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

    angular
        .module('pipFiles', [
            'pipFiles.SuccessUpload',
            'pipFiles.FileUpload',
            'pipFiles.StartUpload',
            'pipFiles.FailUpload'
        ])
        .directive('fileModel', fileModelDirective)
        .directive('pipFileSelect', fileSelectDirective)
       //.directive('pipFailUpload', fileFailDirective)
        .service('pipFileUpload', FileUploadService);


})();
