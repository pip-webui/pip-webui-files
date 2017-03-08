﻿
import {FileSelectController} from './select/FileSelectController';
import {FileUploadController} from './upload/FileUploadController';
import {FileFailController} from './fail/FileFailController';
import {FileUploadService} from './service/FileUploadService';
import {FileStartController} from './start/FileStartController';

import './success/index';

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

    function fileStartDirective() {
        return {
            restrict: 'E',
            replace: true,
            controller: FileStartController,
            controllerAs: 'vm',
            scope: {
                buttons: '=?pipButtons',
                name: '=pipName',
                type: '=?pipType',
                progress: '=pipProgress'
            },
            templateUrl: 'start/FileStart.html'
        };
    }

    angular
        .module('pipFiles', ['pipFiles.SuccessUpload'])
        .directive('fileModel', fileModelDirective)
        .directive('pipFileSelect', fileSelectDirective)
        .directive('pipFileUpload', fileUploadDirective)
        //.component('pipSuccesUpload', fileSuccessDirective)
        .directive('pipFailUpload', fileFailDirective)
        .directive('pipStartUpload', fileStartDirective)
        .service('pipFileUpload', FileUploadService);


})();
