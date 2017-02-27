(function (angular) {
    'use strict';

    var thisModule = angular.module('appFiles.SuccessUpload', ['ngMockE2E']);


    thisModule.controller('SuccessUploadController',
        function ($scope, $interval,  $timeout, $injector, pipTransaction) {

            $scope.progress = 0;
            $scope.state = 'upload';

            $scope.uploadButtons = [
                {title: 'Ok', click: () => { $scope.message = 'ok' }}
            ];
        }
    );

})(window.angular);
