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
},{"./progress/FileProgressController":3,"./service/FileUploadService":4,"./upload/FileUploadController":5}],3:[function(require,module,exports){
"use strict";
var FileProgressController = (function () {
    FileProgressController.$inject = ['$scope', 'pipFileUpload'];
    function FileProgressController($scope, pipFileUpload) {
        "ngInject";
        this.type = $scope['type'] || 'file';
        this._cancel = $scope['cancel'];
        this._retry = $scope['retry'];
        this.name = $scope['name'];
        this._service = pipFileUpload;
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
"use strict";
var GlobalProgress = (function () {
    function GlobalProgress() {
    }
    return GlobalProgress;
}());
GlobalProgress.All = ['start', 'upload', 'fail'];
GlobalProgress.Start = 'start';
GlobalProgress.Upload = 'upload';
GlobalProgress.Fail = 'fail';
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
        this.transaction.begin(GlobalProgress.Start);
        this.globalProgress = GlobalProgress.Start;
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
            _this.globalProgress = GlobalProgress.Upload;
            _this.transaction.end(GlobalProgress.Upload);
            if (callback)
                callback(response, null);
        })
            .error(function (response) {
            _this.globalProgress = GlobalProgress.Fail;
            _this.transaction.end(GlobalProgress.Fail);
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
},{}],5:[function(require,module,exports){
"use strict";
var FileUploadController = (function () {
    FileUploadController.$inject = ['$scope'];
    function FileUploadController($scope) {
        "ngInject";
        this.localFile = $scope['localFile'];
        $scope.$watch('vm.localFile', function (item) {
            $scope['localFile'] = item;
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
},{}],6:[function(require,module,exports){
(function(module) {
try {
  module = angular.module('pipFiles.Templates');
} catch (e) {
  module = angular.module('pipFiles.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('progress/FileProgress.html',
    '<div class="pip-files pip-progress-files">\n' +
    '  <div class="pip-body pip-scroll pip-progress-body"> \n' +
    '    <div class="layout-row">\n' +
    '        <div class="pip-progress-icon"\n' +
    '         ng-class="{\'color-badge-bg\': vm.globalProgress() == \'fail\',\n' +
    '                    \'bb-orange\': vm.globalProgress() == \'start\',\n' +
    '                    \'bb-green\': vm.globalProgress() == \'upload\' }">\n' +
    '            <md-icon md-svg-icon="icons:check" ng-if="vm.globalProgress() == \'upload\'"></md-icon>\n' +
    '            <md-icon md-svg-icon="bootbarn-icons:play" ng-if="vm.globalProgress() == \'start\'"></md-icon>\n' +
    '            <md-icon md-svg-icon="icons:cross" ng-if="vm.globalProgress() == \'fail\'"></md-icon>\n' +
    '        </div>\n' +
    '        <div class="pip-progress-content">\n' +
    '            <h3 class="pip-title" ng-if="vm.globalProgress() == \'start\'">\n' +
    '                Uploading {{vm.type}}\n' +
    '            </h3>\n' +
    '            <h3 class="pip-title" ng-if="vm.globalProgress() == \'upload\'">\n' +
    '                Uploaded {{vm.type}} successfully!\n' +
    '            </h3>\n' +
    '            <h3 class="pip-title" ng-if="vm.globalProgress() == \'fail\'">\n' +
    '                Uploading {{vm.type}} failed with errors!\n' +
    '            </h3>\n' +
    '            <div class="color-secondary-text pip-subtitle">\n' +
    '                {{vm.name}}\n' +
    '            </div>\n' +
    '            <div class="color-error pip-error"\n' +
    '                 ng-if="vm.globalProgress() == \'fail\'">\n' +
    '                 {{vm.errorFail()}}\n' +
    '            </div>\n' +
    '\n' +
    '            <div ng-if="vm.globalProgress() == \'start\'">\n' +
    '                <md-progress-linear md-mode="determinate" \n' +
    '                    class="md-accent" \n' +
    '                    value="{{vm.localProgress()}}" \n' +
    '                    ng-if="vm.localProgress() < 100">\n' +
    '                </md-progress-linear>\n' +
    '                <md-progress-linear md-mode="indeterminate" \n' +
    '                    class="md-accent" \n' +
    '                    ng-if="vm.localProgress() == 100">\n' +
    '                </md-progress-linear>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="pip-footer layout-row layout-align-end-center">\n' +
    '        <div>\n' +
    '            <md-button class="md-accent" \n' +
    '                       ng-click="vm.onCancel()" \n' +
    '                       ng-show="!vm.globalProgress() || vm.globalProgress() == \'fail\'">\n' +
    '                Cancel\n' +
    '            </md-button>\n' +
    '\n' +
    '            <md-button class="md-accent" \n' +
    '                       ng-click="vm.onRetry()"\n' +
    '                       ng-show="vm.globalProgress() == \'fail\'">\n' +
    '                Retry\n' +
    '            </md-button>\n' +
    '            <md-button class="md-accent" \n' +
    '                       ng-click="vm.abort()"\n' +
    '                       ng-show="vm.globalProgress() == \'start\'">\n' +
    '                Abort\n' +
    '            </md-button>\n' +
    '        </div>\n' +
    '    </div>  \n' +
    '</div>');
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
    '<div class="pip-file-upload">\n' +
    '      <form id="inp_form" class="pip-hidden-form">\n' +
    '        <input type="file" file-model="vm.localFile" id="inp_file" ng-model="vm.localFile"></input>\n' +
    '      </form>\n' +
    '        <md-button class="md-raised md-accent pip-button"\n' +
    '                   ng-click="vm.onUploadButtonClick()" \n' +
    '                   ng-if="!vm.localFile">Choose File</md-button>\n' +
    '        <div ng-if="vm.localFile.name" class="pip-file layout-row layout-align-start-center">\n' +
    '          <md-icon md-svg-icon="icons:document" class="pip-icon"></md-icon>\n' +
    '            <div class="flex">\n' +
    '                <div class="text-body2 text-overflow">\n' +
    '                    {{vm.localFile.name}}\n' +
    '                </div>\n' +
    '                <div ng-if="vm.localFile.size" class="color-secondary-text">{{vm.localFile.size}}</div>\n' +
    '            </div>\n' +
    '            <md-button ng-click="vm.onDeleteButtonClick()" class="md-icon-button">\n' +
    '              <md-icon md-svg-icon="icons:cross-circle"></md-icon>\n' +
    '            </md-button>\n' +
    '        </div>\n' +
    '</div>');
}]);
})();



},{}]},{},[6,1,2,3,4,5])(6)
});

//# sourceMappingURL=pip-webui-files.js.map
