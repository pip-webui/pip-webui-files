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
        $httpBackend.whenGET(/^images\//).passThrough();
    });

    thisModule.controller('UploadController',
        function ($scope, $timeout, $injector, pipFileUpload, pipTransaction) {

            $scope.transaction = pipTransaction.create('upload file');
            $scope.onOk = () => {
                 if ($scope.localFile == null) {
                    $scope.message = 'File empty';
                }
                const uploadUrl = "https://test";

                pipFileUpload.upload(
                    uploadUrl,
                    $scope.localFile,
                    $scope.transaction,
                    (data, err) => {
                        if (data) {
                            $scope.message = data;
                        } else {
                            $scope.message = err;
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
