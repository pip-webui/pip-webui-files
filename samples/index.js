'use strict';


(function (angular) {
    'use strict';

    var thisModule = angular.module('appFiles',
        [
            'ngMaterial',
            'ui.router', 'ui.utils', 'ngResource', 'ngAria', 'ngCookies', 'ngSanitize', 'ngMessages',
            'ngMaterial', 'wu.masonry', 'LocalStorageModule', 'ngAnimate',

            'pipServices', 
            'pipTheme.Default', 'pipTheme.BootBarn', 'pipTheme', 

            'pipFiles', 'pipFiles.Templates',  //'pipButtons',

            'appFiles.UploadFiles', 'appFiles.Progress'
        ]
    );

    var content = [
            { 
                title: 'Upload', state: 'upload', url: '/upload',
                controller: 'UploadController', templateUrl: 'files_sample/files.html' 
            },{ 
                title: 'Progress', state: 'progress', url: '/progress',
                controller: 'ProgressController', templateUrl: 'files_upload/files_upload.html' 
            }
        ];
        

    // Configure application services before start
    thisModule.config(
        function ($stateProvider, $urlRouterProvider, $mdIconProvider,
                  $compileProvider, $httpProvider) { 

            $compileProvider.debugInfoEnabled(false);
            $httpProvider.useApplyAsync(true);


            var contentItem, i;

            $mdIconProvider.iconSet('icons', 'images/icons.svg', 512);

            for (i = 0; i < content.length; i++) {
                contentItem = content[i];
                $stateProvider.state(contentItem.state, contentItem);
            }

            $urlRouterProvider.otherwise('/upload');
        }
    );

    thisModule.controller('pipSampleController',
        function ($scope, $rootScope, $injector, $state, $mdSidenav, $timeout, $mdTheming, $mdMedia, localStorageService) {
            
            var pipTranslate = $injector.has('pipTranslate') ? $injector.get('pipTranslate') : null,
                // appThemesDefault = $injector.has('appThemesDefault') ? $injector.get('appThemesDefault') : null,
                pipTheme = $injector.has('pipTheme') ? $injector.get('pipTheme') : null;

            $scope.isTranslated = !!pipTranslate;
            $scope.isTheme = !!pipTheme;
            $scope.$mdMedia = $mdMedia;

            $rootScope.$theme = localStorageService.get('theme') || 'blue';
            if ($scope.isTheme) {
                $scope.themes = _.keys(_.omit($mdTheming.THEMES, 'default'));
            } else {
                $scope.themes = [];
            }
            

            $scope.languages = ['en', 'ru'];
            if (!$rootScope.$language) {
                $rootScope.$language = 'en';
            }

            $scope.content = content;
            $scope.menuOpened = false;

            // Update page after language changed
            $rootScope.$on('languageChanged', function(event) {
                $state.reload();
            });

            // Update page after theme changed
            $rootScope.$on('themeChanged', function(event) {
                $state.reload();
            });

            $scope.onSwitchPage = function (state) {
                $mdSidenav('left').close();
                $state.go(state);
            };

            $scope.onThemeClick = function(theme) {
                console.log('onThemeClick');
                if ($scope.isTheme) {
                    console.log('onThemeClick1');
                    setTimeout(function () {
                        pipTheme.use(theme, false, false);
                        $rootScope.$theme = theme;
                        $rootScope.$apply();
                    }, 0);                      
                }
            };

            $scope.onToggleMenu = function () {
                $mdSidenav('left').toggle();
            };

            $scope.onLanguageClick = function(language) {
                console.log('onLanguageClick');
                if (pipTranslate) {
                    console.log('onLanguageClick1', language);
                    setTimeout(function () {
                        pipTranslate.use(language);
                        $rootScope.$apply();
                    }, 0);   
                } 
             
            };

            $scope.isActiveState = function (state) {
                return $state.current.name == state;
            };

        }
    );

})(window.angular);


/*
 var content = [ 
     { 
        title: 'Upload', state: 'upload', url: '/upload',
        controller: 'UploadController', templateUrl: 'files_sample/files.html' 
     }
];

function configFiles ($stateProvider, $urlRouterProvider, $mdIconProvider,
                  $compileProvider, $httpProvider) { 

            $compileProvider.debugInfoEnabled(false);
            $httpProvider.useApplyAsync(true);

            var contentItem, i;

            $mdIconProvider.iconSet('icons', 'images/icons.svg', 512);

            for (i = 0; i < content.length; i++) {
                contentItem = content[i];
                $stateProvider.state(contentItem.state, contentItem);
            }

            $urlRouterProvider.otherwise('/files');
        }

class PortalController {

    constructor(
        $scope, $rootScope, $injector, $state, $mdSidenav, $timeout, $mdTheming, $mdMedia, localStorageService
    ) {


  var pipTranslate = $injector.has('pipTranslate') ? $injector.get('pipTranslate') : null,
                // appThemesDefault = $injector.has('appThemesDefault') ? $injector.get('appThemesDefault') : null,
                pipTheme = $injector.has('pipTheme') ? $injector.get('pipTheme') : null;

            $scope.isTranslated = !!pipTranslate;
            $scope.isTheme = !!pipTheme;
            $scope.$mdMedia = $mdMedia;

            $rootScope.$theme = localStorageService.get('theme') || 'blue';
            if ($scope.isTheme) {
                $scope.themes = _.keys(_.omit($mdTheming.THEMES, 'default'));
            } else {
                $scope.themes = [];
            }
            

            $scope.languages = ['en', 'ru'];
            if (!$rootScope.$language) {
                $rootScope.$language = 'en';
            }

            $scope.content = content;
            $scope.menuOpened = false;

            // Update page after language changed
            $rootScope.$on('languageChanged', function(event) {
                $state.reload();
            });

            // Update page after theme changed
            $rootScope.$on('themeChanged', function(event) {
                $state.reload();
            });

            $scope.onSwitchPage = function (state) {
                $mdSidenav('left').close();
                $state.go(state);
            };

            $scope.onThemeClick = function(theme) {
                console.log('onThemeClick');
                if ($scope.isTheme) {
                    console.log('onThemeClick1');
                    setTimeout(function () {
                        pipTheme.use(theme, false, false);
                        $rootScope.$theme = theme;
                        $rootScope.$apply();
                    }, 0);                      
                }
            };

            $scope.onToggleMenu = function () {
                $mdSidenav('left').toggle();
            };

            $scope.onLanguageClick = function(language) {
                console.log('onLanguageClick');
                if (pipTranslate) {
                    console.log('onLanguageClick1', language);
                    setTimeout(function () {
                        pipTranslate.use(language);
                        $rootScope.$apply();
                    }, 0);   
                } 
             
            };

            $scope.isActiveState = function (state) {
                return $state.current.name == state;
            };
        
    }


}

angular
    .module('appFiles', [
        'ngMaterial',
            'ui.router', 'ui.utils', 'ngResource', 'ngAria', 'ngCookies', 'ngSanitize', 'ngMessages',
            'ngMaterial', 'wu.masonry', 'LocalStorageModule', 'ngAnimate',

            'pipServices', 
            'pipTheme.Default', 'pipTheme.BootBarn', 'pipTheme', 

            'pipFiles', 'pipFiles.Templates',  'pipButtons',

            'appFiles.UploadFiles'
    ])
    .config(configFiles)
    .controller('pipSampleController', PortalController);
*/