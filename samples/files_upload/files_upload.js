(function (angular) {
    'use strict';

    var thisModule = angular.module('appFiles.Progress', ['ngMockE2E']);


    thisModule.controller('ProgressController',
        function ($scope,$interval,  $timeout, $injector, pipTransaction) {

            $scope.progress = 0;
            $scope.state = 0;
            $scope.state2 = 0;
            $scope.name = 'New file';
            $scope.buttonFunctions = {
                retry: () => {
                    $scope.message = 'retry'
                },
                cancel: () => {
                    $scope.message = 'cancel'
                },
                abort: () => {
                    $scope.message = 'abort';
                }
            }

            $interval(() => {
                if ($scope.state == 0) {
                    $scope.state = 1;
                    $scope.progress = 0;
                } else {
                    $scope.state = 0;
                    $scope.progress = 0;
                }

                $scope.state2 = $scope.state2 == 0 ? 2 : 0;
                $scope.error = $scope.state2 == 1 ? 'Error string': null;
            }, 2000);

            $interval(() => {
                if ($scope.state == 0) {
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
