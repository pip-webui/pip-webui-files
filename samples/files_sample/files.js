(function (angular) {
    'use strict';

    var thisModule = angular.module('appFiles.UploadFiles', ['ngMockE2E']);

    thisModule.run(function($httpBackend) {
        $httpBackend.expect("POST", "https://test");
        $httpBackend.when("POST", "https://test").respond("ok");
        $httpBackend.whenGET(/^files_sample\//).passThrough();
        $httpBackend.whenGET(/^images\//).passThrough();
    });

    thisModule.controller('UploadController',
        function ($scope, $timeout, $injector, pipFileUpload) {

            $scope.onOk = () => {
                 if ($scope.localFile == null) {
                    $scope.message = 'File empty';
                }
                let uploadUrl = "https://test";

                pipFileUpload.upload(
                uploadUrl,
                    $scope.localFile,
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

            $timeout(() => {
                $('pre code').each(function(i, block) {
                    if (Prism) {
                        Prism.highlightElement(block);
                    }
                });
            });
            
        }
    );

})(window.angular);
