
import {FileUploadController} from './FileUploadController';

(() => {
    
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

    angular
        .module('pipFiles.FileUpload', [])
        .directive('pipFileUpload', fileUploadDirective)
       
})();
