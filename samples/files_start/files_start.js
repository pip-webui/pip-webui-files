(function (angular) {
    'use strict';

    var thisModule = angular.module('appFiles.StartUpload', ['ngMockE2E']);


    thisModule.controller('FailStartController',
        function ($scope, $interval,  $timeout, $injector, pipTransaction) {

            $scope.progress = 0;

            $scope.startButtons = [
                {title: 'Abort', click: () => { $scope.message = 'abort' }}
            ];
        }
    );

})(window.angular);
