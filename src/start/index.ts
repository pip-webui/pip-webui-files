
import {FileStartController} from './FileStartController';

(() => {
 
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
        .module('pipFiles.StartUpload', [])
        .directive('pipStartUpload', fileStartDirective)


})();
