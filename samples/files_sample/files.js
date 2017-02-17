(function (angular) {
    'use strict';

    var thisModule = angular.module('appFiles.UploadFiles', []);

    thisModule.controller('UploadController',
        function ($scope, $timeout, $injector, pipFileSelect) {

            $scope.onOk = () => {
                 if ($scope.localFile == null) {
                    $scope.message = 'File empty';
                }
                let uploadUrl = "https://facadewebapi.bootbarn-app-env.p.azurewebsites.net/api/files/file";
                    uploadUrl += '?collection=Test';
                    uploadUrl += '&description=text';

                pipFileSelect.upload(
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
                return pipFileSelect.globalProgress;
            }

            $scope.cancel = () => {
                $scope.message = 'stop';
                pipFileSelect.globalProgress = null;
            }

            $timeout(function() {
                $('pre code').each(function(i, block) {
                    if (Prism) {
                        Prism.highlightElement(block);
                    }
                });
            });
            
        }
    );

})(window.angular);
