(function (angular) {
    'use strict';

    var thisModule = angular.module('appFiles.Progress', ['ngMockE2E']);


    thisModule.controller('ProgressController',
        function ($scope,$interval,  $timeout, $injector, pipTransaction) {

            $scope.progress = 0;
            $scope.state = 'start';
            $scope.state2 = 'start';

            $interval(() => {
                if ($scope.state == 'start') {
                    $scope.state = 'upload';
                    $scope.progress = 0;
                } else {
                    $scope.state = 'start';
                    $scope.progress = 0;
                }

                $scope.state2 = $scope.state2 == 'start' ? 'fail': 'start';
                $scope.error = $scope.state2 == 'fail' ? 'Error string': null;
            }, 2000);

            $interval(() => {
                if ($scope.state == 'start') {
                    if ($scope.progress < 100) {
                        $scope.progress += 20;
                    }
                }
            }, 200);

            $timeout(() => {
                $('pre code').each((i, block) => {
                    if (Prism) {
                        Prism.highlightElement(block);
                    }
                });
            });
            
        }
    );

})(window.angular);
