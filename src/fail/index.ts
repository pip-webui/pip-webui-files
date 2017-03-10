
import { FileFailController } from './FileFailController';

(() => {

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
        .module('pipFiles.FailUpload', [])
        .directive('pipFailUpload', fileFailDirective)


})();
