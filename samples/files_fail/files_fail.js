(function (angular) {
    'use strict';

    var thisModule = angular.module('appFiles.FailUpload', ['ngMockE2E']);


    thisModule.controller('FailUploadController',
        function ($scope, $interval,  $timeout, $injector, pipTransaction) {

            $scope.progress = 0;

            $scope.failButtons = [
                {title: 'Cancel', click: () => { $scope.message = 'cancel' }},
                {title: 'Retry', click: () => { $scope.message = 'retry' }}
            ];
        }
    );

})(window.angular);
