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
            $scope.onOk = () => {
                console.log($scope);
                 if ($scope.localFile == null) {
                    $scope.message = 'File empty';
                    return;
                }
                const uploadUrl = "https://test";
                $scope.transaction.begin('start');

                pipFileUpload.upload(
                    uploadUrl,
                    $scope.localFile,
                    (data, err) => {
                        if (data) {
                            $scope.message = data;
                            $scope.transaction.end('a');
                        } else {
                            $scope.message = err;
                            $scope.transaction.end('');
                        }
                    }
                );
            }

            $scope.onGlobalProgress = () => {
                return pipFileUpload.state;
            }

            $scope.onLocalProgress = () => {
                return pipFileUpload.progress;
            }

            $scope.cancel = () => {
                $scope.message = 'stop';
                pipFileUpload.state = null;
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
