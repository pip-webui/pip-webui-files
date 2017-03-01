(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.pip || (g.pip = {})).files = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ButtonsUpload = (function () {
    function ButtonsUpload() {
    }
    return ButtonsUpload;
}());
exports.ButtonsUpload = ButtonsUpload;
},{}],2:[function(require,module,exports){
(function () {
    'use strict';
    var thisModule = angular.module('pipFiles.Translate', []);
    thisModule.filter('translate', ['$injector', function ($injector) {
        var pipTranslate = $injector.has('pipTranslate')
            ? $injector.get('pipTranslate') : null;
        return function (key) {
            return pipTranslate ? pipTranslate.translate(key) || key : key;
        };
    }]);
})();
},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileFailController = (function () {
    FileFailController.$inject = ['$scope'];
    function FileFailController($scope) {
        "ngInject";
        var _this = this;
        this.type = $scope['type'] || 'file';
        this.name = $scope['name'];
        this.buttons = $scope['buttons'] || null;
        this.error = $scope['error'] || null;
        $scope.$watch('error', function (error) {
            _this.error = error;
        });
    }
    return FileFailController;
}());
exports.FileFailController = FileFailController;
},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileSelectController_1 = require("./select/FileSelectController");
var FileUploadController_1 = require("./upload/FileUploadController");
var FileSuccessController_1 = require("./success/FileSuccessController");
var FileFailController_1 = require("./fail/FileFailController");
var FileUploadService_1 = require("./service/FileUploadService");
var FileStartController_1 = require("./start/FileStartController");
(function () {
    fileModelDirective.$inject = ['$parse'];
    function fileModelDirective($parse) {
        "ngInject";
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var model = $parse(attrs.fileModel);
                var modelSetter = model.assign;
                element.bind('change', function () {
                    scope.$apply(function () {
                        modelSetter(scope, element[0].files[0]);
                    });
                });
            }
        };
    }
    function fileSelectDirective() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                localFile: '='
            },
            controller: FileSelectController_1.FileSelectController,
            controllerAs: 'vm',
            templateUrl: 'select/FileSelect.html'
        };
    }
    function fileUploadDirective() {
        return {
            restrict: 'E',
            replace: true,
            controller: FileUploadController_1.FileUploadController,
            controllerAs: 'vm',
            scope: {
                buttonFunction: '=?pipButtonFunctions',
                buttons: '=?pipButtons',
                error: '=?pipError',
                name: '=pipName',
                state: '=pipState',
                type: '=?pipType',
                progress: '=pipProgress'
            },
            templateUrl: 'upload/FileUpload.html'
        };
    }
    function fileSuccessDirective() {
        return {
            restrict: 'E',
            replace: true,
            controller: FileSuccessController_1.FileSuccessController,
            controllerAs: 'vm',
            scope: {
                buttons: '=?pipButtons',
                name: '=pipName',
                type: '=?pipType',
            },
            templateUrl: 'success/FileSuccess.html'
        };
    }
    function fileFailDirective() {
        return {
            restrict: 'E',
            replace: true,
            controller: FileFailController_1.FileFailController,
            controllerAs: 'vm',
            scope: {
                buttons: '=?pipButtons',
                name: '=pipName',
                type: '=?pipType',
                error: '=pipError'
            },
            templateUrl: 'fail/FileFail.html'
        };
    }
    function fileStartDirective() {
        return {
            restrict: 'E',
            replace: true,
            controller: FileStartController_1.FileStartController,
            controllerAs: 'vm',
            scope: {
                buttons: '=?pipButtons',
                name: '=pipName',
                type: '=?pipType',
                progress: '=pipProgress'
            },
            templateUrl: 'start/FileStart.html'
        };
    }
    angular
        .module('pipFiles', [])
        .directive('fileModel', fileModelDirective)
        .directive('pipFileSelect', fileSelectDirective)
        .directive('pipFileUpload', fileUploadDirective)
        .directive('pipSuccesUpload', fileSuccessDirective)
        .directive('pipFailUpload', fileFailDirective)
        .directive('pipStartUpload', fileStartDirective)
        .service('pipFileUpload', FileUploadService_1.FileUploadService);
})();
},{"./fail/FileFailController":3,"./select/FileSelectController":5,"./service/FileUploadService":6,"./start/FileStartController":7,"./success/FileSuccessController":8,"./upload/FileUploadController":9}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileSelectController = (function () {
    FileSelectController.$inject = ['$scope'];
    function FileSelectController($scope) {
        "ngInject";
        this.localFile = $scope['localFile'];
        $scope.$watch('vm.localFile', function (item) {
            $scope['localFile'] = item;
        });
    }
    FileSelectController.prototype.onUploadButtonClick = function () {
        $('#inp_file').click();
    };
    FileSelectController.prototype.onDeleteButtonClick = function () {
        this.localFile = null;
        var forml = document.getElementById('inp_form');
        forml.reset();
    };
    return FileSelectController;
}());
exports.FileSelectController = FileSelectController;
},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileUploadState = (function () {
    function FileUploadState() {
    }
    return FileUploadState;
}());
FileUploadState.All = ['start', 'upload', 'fail'];
FileUploadState.Start = 'start';
FileUploadState.Upload = 'upload';
FileUploadState.Fail = 'fail';
exports.FileUploadState = FileUploadState;
var FileUploadService = (function () {
    FileUploadService.$inject = ['$http'];
    function FileUploadService($http) {
        "ngInject";
        this.error = null;
        this._http = $http;
    }
    FileUploadService.prototype.upload = function (url, file, callback) {
        var _this = this;
        var fd = new FormData();
        fd.append('file', file);
        this.progress = 0;
        this.state = FileUploadState.Start;
        this._http.post(url, fd, {
            uploadEventHandlers: {
                progress: function (e) {
                    if (e.lengthComputable) {
                        _this.progress = (e.loaded / e.total) * 100;
                    }
                }
            },
            headers: { 'Content-Type': undefined }
        })
            .success(function (response) {
            _this.state = FileUploadState.Upload;
            if (callback)
                callback(response, null);
        })
            .error(function (response) {
            _this.state = FileUploadState.Fail;
            _this.error = response.Error || response;
            if (callback)
                callback(null, response);
        });
    };
    return FileUploadService;
}());
exports.FileUploadService = FileUploadService;
},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileStartController = (function () {
    FileStartController.$inject = ['$scope'];
    function FileStartController($scope) {
        "ngInject";
        var _this = this;
        this.type = $scope['type'] || 'file';
        this.name = $scope['name'];
        this.buttons = $scope['buttons'] || null;
        this.progress = $scope['progress'] || null;
        $scope.$watch('progress', function (progress) {
            _this.progress = progress;
        });
    }
    return FileStartController;
}());
exports.FileStartController = FileStartController;
},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileSuccessController = (function () {
    FileSuccessController.$inject = ['$scope'];
    function FileSuccessController($scope) {
        "ngInject";
        this.type = $scope['type'] || 'file';
        this.name = $scope['name'];
        this.buttons = $scope['buttons'] || null;
    }
    return FileSuccessController;
}());
exports.FileSuccessController = FileSuccessController;
},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileUploadButtons = (function () {
    function FileUploadButtons() {
    }
    return FileUploadButtons;
}());
exports.FileUploadButtons = FileUploadButtons;
var FileUploadController = (function () {
    FileUploadController.$inject = ['$scope'];
    function FileUploadController($scope) {
        "ngInject";
        var _this = this;
        this.error = null;
        this._functions = $scope['buttonFunction'];
        if (this._functions) {
            this.uploadButtons = [];
            this.failButtons = [
                { title: 'Cancel', click: function () { _this.onCancel(); } },
                { title: 'Retry', click: function () { _this.onRetry(); } }
            ];
            this.startButtons = [
                { title: 'Abort', click: function () { _this.onAbort(); } }
            ];
        }
        this.buttons = $scope['buttons'] || false;
        this.type = $scope['type'] || 'file';
        this.name = $scope['name'];
        this.state = $scope['state'];
        this.error = $scope['error'];
        this.progress = $scope['progress'];
        $scope.$watch('state', function (state) {
            _this.state = state;
        });
        $scope.$watch('error', function (error) {
            _this.error = error;
        });
        $scope.$watch('progress', function (progress) {
            _this.progress = progress;
        });
    }
    FileUploadController.prototype.onCancel = function () {
        if (this._functions.cancel)
            this._functions.cancel();
    };
    FileUploadController.prototype.onRetry = function () {
        if (this._functions.retry)
            this._functions.retry();
    };
    FileUploadController.prototype.onAbort = function () {
        if (this._functions.abort)
            this._functions.abort();
    };
    return FileUploadController;
}());
exports.FileUploadController = FileUploadController;
},{}],10:[function(require,module,exports){
(function(module) {
try {
  module = angular.module('pipFiles.Templates');
} catch (e) {
  module = angular.module('pipFiles.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('fail/FileFail.html',
    '<div class="pip-files pip-progress-files"><div class="pip-body pip-scroll pip-progress-body"><div class="layout-row"><div class="pip-progress-icon color-badge-bg"><md-icon md-svg-icon="icons:cross"></md-icon></div><div class="pip-progress-content"><h3 class="pip-title">Uploading {{vm.type}} failed with errors!</h3><div class="color-secondary-text pip-subtitle">{{vm.name}}</div><div class="color-error pip-error">{{vm.error}}</div></div></div></div><div class="pip-footer layout-row layout-align-end-center" ng-if="vm.buttons && vm.buttons.length > 0"><div><md-button class="md-accent" ng-repeat="fail in vm.buttons" ng-click="fail.click()">{{::fail.title}}</md-button></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('pipFiles.Templates');
} catch (e) {
  module = angular.module('pipFiles.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('select/FileSelect.html',
    '<div class="pip-file-select"><form id="inp_form" class="pip-hidden-form"><input type="file" file-model="vm.localFile" id="inp_file" ng-model="vm.localFile"></form><md-button class="md-raised md-accent pip-button" ng-click="vm.onUploadButtonClick()" ng-if="!vm.localFile">Choose File</md-button><div ng-if="vm.localFile.name" class="pip-file layout-row layout-align-start-center"><md-icon md-svg-icon="icons:document" class="pip-icon"></md-icon><div class="flex"><div class="text-body2 text-overflow">{{vm.localFile.name}}</div><div ng-if="vm.localFile.size" class="color-secondary-text">{{vm.localFile.size}}</div></div><md-button ng-click="vm.onDeleteButtonClick()" class="md-icon-button"><md-icon md-svg-icon="icons:cross-circle"></md-icon></md-button></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('pipFiles.Templates');
} catch (e) {
  module = angular.module('pipFiles.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('start/FileStart.html',
    '<div class="pip-files pip-progress-files"><div class="pip-body pip-scroll pip-progress-body"><div class="layout-row"><div class="pip-progress-icon bb-orange"><md-icon md-svg-icon="icons:play"></md-icon></div><div class="pip-progress-content"><h3 class="pip-title">Uploading {{::vm.type}}</h3><div class="color-secondary-text pip-subtitle">{{vm.name}}</div><div><md-progress-linear md-mode="determinate" class="md-accent" value="{{vm.progress}}" ng-if="vm.progress < 100"></md-progress-linear><md-progress-linear md-mode="indeterminate" class="md-accent" ng-if="vm.progress == 100"></md-progress-linear></div></div></div></div><div class="pip-footer layout-row layout-align-end-center" ng-if="vm.buttons"><div><md-button class="md-accent" ng-repeat="start in vm.buttons" ng-click="start.click()">{{start.title}}</md-button></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('pipFiles.Templates');
} catch (e) {
  module = angular.module('pipFiles.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('success/FileSuccess.html',
    '<div class="pip-files pip-progress-files"><div class="pip-body pip-scroll pip-progress-body"><div class="layout-row"><div class="pip-progress-icon bb-green"><md-icon md-svg-icon="icons:check"></md-icon></div><div class="pip-progress-content"><h3 class="pip-title">Uploaded {{::vm.type}} successfully!</h3><div class="color-secondary-text pip-subtitle">{{vm.name}}</div></div></div></div><div class="pip-footer layout-row layout-align-end-center" ng-if="vm.buttons && vm.buttons.length > 0"><div><md-button class="md-accent" ng-repeat="start in vm.buttons" ng-click="start.click()">{{start.title}}</md-button></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('pipFiles.Templates');
} catch (e) {
  module = angular.module('pipFiles.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('upload/FileUpload.html',
    '<div><pip-succes-upload ng-if="vm.state == \'upload\'" pip-name="vm.name" pip-type="vm.type" pip-buttons="vm.buttons"></pip-succes-upload><pip-fail-upload ng-if="vm.state == \'fail\'" pip-name="vm.name" pip-type="vm.type" pip-error="vm.error" pip-buttons="vm.failButtons"></pip-fail-upload><pip-start-upload ng-if="vm.state == \'start\'" pip-name="vm.name" pip-type="vm.type" pip-progress="vm.progress" pip-buttons="vm.startButtons"></pip-start-upload></div>');
}]);
})();



},{}]},{},[10,1,2,3,4,5,6,7,8,9])(10)
});

//# sourceMappingURL=pip-webui-files.js.map
