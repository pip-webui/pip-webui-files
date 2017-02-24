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
Object.defineProperty(exports, "__esModule", { value: true });
var FileSelectController_1 = require("./select/FileSelectController");
var FileUploadController_1 = require("./upload/FileUploadController");
var FileSuccessController_1 = require("./success/FileSuccessController");
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
    angular
        .module('pipFiles', [])
        .directive('fileModel', fileModelDirective)
        .directive('pipFileSelect', fileSelectDirective)
        .directive('pipFileUpload', fileUploadDirective)
        .directive('pipSuccesUpload', fileSuccessDirective)
        .service('pipFileUpload', FileUploadService_1.FileUploadService);
})();
},{"./select/FileSelectController":3,"./service/FileUploadService":4,"./success/FileSuccessController":5,"./upload/FileUploadController":6}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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
    FileUploadService.prototype.upload = function (url, file, transaction, callback) {
        var _this = this;
        var fd = new FormData();
        fd.append('file', file);
        this.progress = 0;
        transaction.begin(FileUploadState.Start);
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
            transaction.end(FileUploadState.Upload);
            if (callback)
                callback(response, null);
        })
            .error(function (response) {
            _this.state = FileUploadState.Fail;
            transaction.end(FileUploadState.Fail);
            _this.error = response.Error || response;
            if (callback)
                callback(null, response);
        });
    };
    return FileUploadService;
}());
exports.FileUploadService = FileUploadService;
},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileSuccessController = (function () {
    FileSuccessController.$inject = ['$scope'];
    function FileSuccessController($scope) {
        "ngInject";
        this.type = $scope['type'] || 'file';
        this.name = $scope['name'];
        this.buttons = $scope['buttons'];
    }
    return FileSuccessController;
}());
exports.FileSuccessController = FileSuccessController;
},{}],6:[function(require,module,exports){
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
        this._buttonFunction = $scope['buttonFunction'] || new FileUploadButtons();
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
        if (this._buttonFunction.cancel)
            this._buttonFunction.cancel();
    };
    FileUploadController.prototype.onRetry = function () {
        if (this._buttonFunction.retry)
            this._buttonFunction.retry();
    };
    FileUploadController.prototype.onAbort = function () {
        if (this._buttonFunction.abort)
            this._buttonFunction.abort();
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
  $templateCache.put('select/FileSelect.html',
    '<div class="pip-file-select">\n' +
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

(function(module) {
try {
  module = angular.module('pipFiles.Templates');
} catch (e) {
  module = angular.module('pipFiles.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('success/FileSuccess.html',
    '<div class="pip-files pip-progress-files">\n' +
    '  <div class="pip-body pip-scroll pip-progress-body"> \n' +
    '    <div class="layout-row">\n' +
    '        <div class="pip-progress-icon bb-green">\n' +
    '            <md-icon md-svg-icon="icons:check"></md-icon>\n' +
    '        </div>\n' +
    '        <div class="pip-progress-content">\n' +
    '            <h3 class="pip-title">\n' +
    '                Uploaded {{::vm.type}} successfully!\n' +
    '            </h3>\n' +
    '        \n' +
    '            <div class="color-secondary-text pip-subtitle">\n' +
    '                {{vm.name}}\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="pip-footer layout-row layout-align-end-center" ng-if="vm.buttons">\n' +
    '        <div>\n' +
    '            \n' +
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
    '<div>\n' +
    '    <pip-succes-upload \n' +
    '        ng-if="vm.state == \'upload\'"\n' +
    '        pip-name="vm.name" \n' +
    '        pip-type="vm.type" \n' +
    '        pip-buttons="vm.buttons"></pip-succes-upload>\n' +
    '\n' +
    '<div class="pip-files pip-progress-files" ng-if="vm.state == \'start\' || vm.state == \'fail\'" >\n' +
    '  <div class="pip-body pip-scroll pip-progress-body"> \n' +
    '    <div class="layout-row">\n' +
    '        <div class="pip-progress-icon"\n' +
    '         ng-class="{\'color-badge-bg\': vm.state == \'fail\',\n' +
    '                    \'bb-orange\': vm.state == \'start\',\n' +
    '                    \'bb-green\': vm.state == \'upload\' }">\n' +
    '            <md-icon md-svg-icon="icons:check" ng-if="vm.state == \'upload\'"></md-icon>\n' +
    '            <md-icon md-svg-icon="icons:play" ng-if="vm.state == \'start\'"></md-icon>\n' +
    '            <md-icon md-svg-icon="icons:cross" ng-if="vm.state == \'fail\'"></md-icon>\n' +
    '        </div>\n' +
    '        <div class="pip-progress-content">\n' +
    '            <h3 class="pip-title" ng-if="vm.state == \'start\'">\n' +
    '                Uploading {{::vm.type}}\n' +
    '            </h3>\n' +
    '            <h3 class="pip-title" ng-if="vm.state == \'upload\'">\n' +
    '                Uploaded {{::vm.type}} successfully!\n' +
    '            </h3>\n' +
    '            <h3 class="pip-title" ng-if="vm.state == \'fail\'">\n' +
    '                Uploading {{vm.type}} failed with errors!\n' +
    '            </h3>\n' +
    '            <div class="color-secondary-text pip-subtitle">\n' +
    '                {{vm.name}}\n' +
    '            </div>\n' +
    '            <div class="color-error pip-error"\n' +
    '                 ng-if="vm.state == \'fail\'">\n' +
    '                 {{vm.error}}\n' +
    '            </div>\n' +
    '\n' +
    '            <div ng-if="vm.state == \'start\'">\n' +
    '                <md-progress-linear md-mode="determinate" \n' +
    '                    class="md-accent" \n' +
    '                    value="{{vm.progress}}" \n' +
    '                    ng-if="vm.progress < 100">\n' +
    '                </md-progress-linear>\n' +
    '                <md-progress-linear md-mode="indeterminate" \n' +
    '                    class="md-accent" \n' +
    '                    ng-if="vm.progress == 100">\n' +
    '                </md-progress-linear>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="pip-footer layout-row layout-align-end-center" ng-if="vm.buttons">\n' +
    '        <div>\n' +
    '            <md-button class="md-accent" \n' +
    '                       ng-click="vm.onCancel()" \n' +
    '                       ng-show="!vm.state || vm.state == \'fail\'">\n' +
    '                Cancel\n' +
    '            </md-button>\n' +
    '\n' +
    '            <md-button class="md-accent" \n' +
    '                       ng-click="vm.onRetry()"\n' +
    '                       ng-show="vm.state == \'fail\'">\n' +
    '                Retry\n' +
    '            </md-button>\n' +
    '            <md-button class="md-accent" \n' +
    '                       ng-click="vm.onAbort()"\n' +
    '                       ng-show="vm.state == \'start\'">\n' +
    '                Abort\n' +
    '            </md-button>\n' +
    '        </div>\n' +
    '    </div>  \n' +
    '</div>\n' +
    '</div>');
}]);
})();



},{}]},{},[7,1,2,3,4,5,6])(7)
});

//# sourceMappingURL=pip-webui-files.js.map
