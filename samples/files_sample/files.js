(function (angular) {
    'use strict';

    var thisModule = angular.module('appFiles.UploadFiles', ['ngMockE2E']);

    thisModule.run(function($httpBackend) {
        $httpBackend.expect("POST", "https://test");
        $httpBackend.when("POST", "https://test").respond("ok");
        //$httpBackend.expect("POST", "https://test");
        //$httpBackend.when("POST", "https://test").respond("", "error");
        $httpBackend.whenGET(/^files_sample\//).passThrough();
        $httpBackend.whenGET(/^files_upload\//).passThrough();
        $httpBackend.whenGET(/^files_success\//).passThrough();
        $httpBackend.whenGET(/^files_fail\//).passThrough();
        $httpBackend.whenGET(/^files_start\//).passThrough();
        $httpBackend.whenGET(/^images\//).passThrough();
    });

    thisModule.controller('UploadController',
        function ($scope, $timeout, $injector, pipFileUpload, pipTransaction) {

            $scope.transaction = pipTransaction.create('upload file');
            $scope.localFile = null;
            $scope.progress = 0;
            $scope.state = null;

            $scope.setFile = (file) => {
                $scope.localFile = file;
            }
            $scope.onOk = () => {
                console.log($scope);
                 if ($scope.localFile == null) {
                    $scope.message = 'File empty';
                    return;
                }
                const uploadUrl = "https://test";
                $scope.transaction.begin('start');

                pipFileUpload.upload(
                    $scope.localFile,
                    uploadUrl,
                    (data, err) => {
                        if (data) {
                            $scope.message = data;
                            $scope.transaction.end('a');
                        } else {
                            $scope.error = err;
                            $scope.message = err;
                            $scope.transaction.end('');
                        }
                    },
                    (state, progress) => {
                        console.log(state, progress)
                        $scope.progress = progress;
                        $scope.state = state;
                    }
                );
            }

            $scope.onGlobalProgress = () => {
                return $scope.state;
            }

            $scope.onLocalProgress = () => {
                return $scope.progress;
            }

            $scope.cancel = () => {
                $scope.message = 'stop';
                $scope.state = null;
            }

            $scope.abort = () => {
                $scope.transaction.abort();
                //this.state = null;
            }

            $scope.buttonFunctions = {
                cancel: $scope.abort,
                retry: $scope.onOk,
                abort: $scope.abort
            }

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
