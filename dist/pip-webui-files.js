(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.pip || (g.pip = {})).files = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
"use strict";
var FileUploadController_1 = require("./upload/FileUploadController");
var FileProgressController_1 = require("./progress/FileProgressController");
var FileUploadService_1 = require("./service/FileUploadService");
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
    function fileUploadDirective() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                localFile: '='
            },
            controller: FileUploadController_1.FileUploadController,
            controllerAs: 'vm',
            templateUrl: 'upload/FileUpload.html'
        };
    }
    function fileProgressDirective() {
        return {
            restrict: 'E',
            replace: true,
            controller: FileProgressController_1.FileProgressController,
            controllerAs: 'vm',
            scope: {
                cancel: '=pipCancel',
                retry: '=pipRetry',
                name: '=pipName',
                type: '=?pipType'
            },
            templateUrl: 'progress/FileProgress.html'
        };
    }
    angular
        .module('pipFiles', [])
        .directive('fileModel', fileModelDirective)
        .directive('pipFileUpload', fileUploadDirective)
        .directive('pipFileProgress', fileProgressDirective)
        .service('pipFileUpload', FileUploadService_1.FileUploadService);
})();
},{"./progress/FileProgressController":3,"./service/FileUploadService":5,"./upload/FileUploadController":6}],3:[function(require,module,exports){
"use strict";
var FileProgressController = (function () {
    FileProgressController.$inject = ['$scope', 'pipFileUpload'];
    function FileProgressController($scope, pipFileUpload) {
        "ngInject";
        this.type = $scope.type || 'file';
        this._cancel = $scope.cancel;
        this._retry = $scope.retry;
        this._service = pipFileUpload;
        this.name = $scope.name;
    }
    FileProgressController.prototype.globalProgress = function () {
        return this._service.globalProgress;
    };
    FileProgressController.prototype.errorFail = function () {
        return this._service.error;
    };
    FileProgressController.prototype.localProgress = function () {
        return this._service.progress;
    };
    FileProgressController.prototype.onCancel = function () {
        if (this._cancel)
            this._cancel();
    };
    FileProgressController.prototype.onRetry = function () {
        if (this._retry)
            this._retry();
    };
    FileProgressController.prototype.abort = function () {
        this._service.abort();
        if (this._cancel)
            this._cancel();
    };
    return FileProgressController;
}());
exports.FileProgressController = FileProgressController;
},{}],4:[function(require,module,exports){

},{}],5:[function(require,module,exports){
"use strict";
var FileUploadService = (function () {
    FileUploadService.$inject = ['$http', 'pipTransaction'];
    function FileUploadService($http, pipTransaction) {
        "ngInject";
        this.error = null;
        this._http = $http;
        this.transaction = pipTransaction.create('upload file');
    }
    FileUploadService.prototype.upload = function (url, file, callback) {
        var _this = this;
        var fd = new FormData();
        fd.append('file', file);
        this.progress = 0;
        this.transaction.begin('start');
        this.globalProgress = 'start';
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
            _this.globalProgress = 'upload';
            _this.transaction.end('success');
            if (callback)
                callback(response, null);
        })
            .error(function (response) {
            _this.globalProgress = 'fail';
            _this.transaction.end('error');
            _this.error = response.Error || response;
            if (callback)
                callback(null, response);
        });
    };
    FileUploadService.prototype.abort = function () {
        this.transaction.abort();
    };
    return FileUploadService;
}());
exports.FileUploadService = FileUploadService;
},{}],6:[function(require,module,exports){
"use strict";
var FileUploadController = (function () {
    FileUploadController.$inject = ['$scope'];
    function FileUploadController($scope) {
        "ngInject";
        this.localFile = $scope.localFile;
        $scope.$watch('vm.localFile', function (item) {
            $scope.localFile = item;
        });
    }
    FileUploadController.prototype.onUploadButtonClick = function () {
        $('#inp_file').click();
    };
    FileUploadController.prototype.onDeleteButtonClick = function () {
        this.localFile = null;
        var forml = document.getElementById('inp_form');
        forml.reset();
    };
    return FileUploadController;
}());
exports.FileUploadController = FileUploadController;
},{}],7:[function(require,module,exports){
(function(module) {
try {
  module = angular.module('pipFiles.Templates');
} catch (e) {
  module = angular.module('pipFiles.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('progress/FileProgress.html',
    '<div class="pip-files"><div class="pip-body pip-scroll" style="padding: 16px"><div class="layout-row"><div style="width: 30px; height: 30px; border-radius: 50%; margin-right: 16px" class="" ng-class="{\'color-badge-bg\': vm.globalProgress() == \'fail\', \'bb-orange\': vm.globalProgress() == \'start\', \'bb-green\': vm.globalProgress() == \'upload\' }"><md-icon md-svg-icon="icons:check" ng-if="vm.globalProgress() == \'upload\'" style="color: #fff !important; margin: 4px"></md-icon><md-icon md-svg-icon="bootbarn-icons:play" ng-if="vm.globalProgress() == \'start\'" style="color: #fff !important; margin: 4px"></md-icon><md-icon md-svg-icon="icons:cross" ng-if="vm.globalProgress() == \'fail\'" style="color: #fff !important; margin: 4px"></md-icon></div><div style="width: 100%"><h3 style="margin-top: 4px; margin-bottom: 8px" ng-if="vm.globalProgress() == \'start\'">Uploading {{vm.type}}</h3><h3 style="margin-top: 4px; margin-bottom: 8px" ng-if="vm.globalProgress() == \'upload\'">Uploaded {{vm.type}} successfully!</h3><h3 style="margin-top: 4px; margin-bottom: 8px" ng-if="vm.globalProgress() == \'fail\'">Uploading {{vm.type}} failed with errors!</h3><div class="color-secondary-text" style="word-break: break-word; margin-top: 0px; margin-bottom:8px">{{vm.name}}</div><div class="color-error" style="word-break: break-word; margin-top: 0px;" ng-if="vm.globalProgress() == \'fail\'">{{vm.errorFail()}}</div><div ng-if="vm.globalProgress() == \'start\'"><md-progress-linear md-mode="determinate" class="md-accent" value="{{vm.localProgress()}}" ng-if="vm.localProgress() < 100"></md-progress-linear><md-progress-linear md-mode="indeterminate" class="md-accent" ng-if="vm.localProgress() == 100"></md-progress-linear></div></div></div></div><div class="pip-footer layout-row layout-align-end-center"><div><md-button class="md-accent" ng-click="vm.onCancel()" ng-show="!vm.globalProgress() || vm.globalProgress() == \'fail\'">Cancel</md-button><md-button class="md-accent" ng-click="vm.onRetry()" ng-show="vm.globalProgress() == \'fail\'">Retry</md-button><md-button class="md-accent" ng-click="vm.abort()" ng-show="vm.globalProgress() == \'start\'">Abort</md-button></div></div></div>');
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
    '<div><form id="inp_form" style="display: none"><input type="file" file-model="vm.localFile" id="inp_file" ng-model="vm.localFile"></form><md-button class="md-raised md-accent" style="margin: 0; width: 100%" ng-click="vm.onUploadButtonClick()" ng-if="!vm.localFile">Choose File</md-button><div ng-if="vm.localFile.name" class="layout-row layout-align-start-center" style="height: 60px; border-radius: 2px; background-color: rgba(0, 0, 0, 0.08);"><md-icon md-svg-icon="icons:document" style="margin-right: 16px; margin-left: 12px;"></md-icon><div class="flex"><div class="text-body2 text-overflow">{{vm.localFile.name}}</div><div ng-if="vm.localFile.size" class="color-secondary-text">{{vm.localFile.size}}</div></div><md-button ng-click="vm.onDeleteButtonClick()" class="md-icon-button"><md-icon md-svg-icon="icons:cross-circle"></md-icon></md-button></div></div>');
}]);
})();



},{}]},{},[7,1,2,3,4,5,6])(7)
});

//# sourceMappingURL=pip-webui-files.js.map