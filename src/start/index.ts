
import {FileStartController} from './FileStartController';

(() => {
 
    const fileStartDirective = {
        restrict: 'E',
        replace: true,
        controller: FileStartController,
        controllerAs: 'vm',
        bindings: {
            buttons: '=?pipButtons',
            name: '=pipName',
            type: '=?pipType',
            progress: '=?pipProgress'
        },
        templateUrl: 'start/FileStart.html'
    };

    angular
        .module('pipFiles.StartUpload', [])
        .component('pipStartUpload', fileStartDirective)


})();
