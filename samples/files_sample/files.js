(function (angular) {
    'use strict';

    var thisModule = angular.module('appFiles.UploadFiles', []);

    thisModule.controller('UploadController',
        function ($scope, $timeout, $injector) {
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
