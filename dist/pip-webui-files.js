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
    filerTranslate.$inject = ['$injector'];
    function filerTranslate($injector) {
        var pipTranslate = $injector.has('pipTranslate')
            ? $injector.get('pipTranslate') : null;
        return function (key) {
            return pipTranslate ? pipTranslate.translate(key) || key : key;
        };
    }
    angular.module('pipFiles.Translate', [])
        .filter('translate', filerTranslate);
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
var FileFailController_1 = require("./fail/FileFailController");
var FileUploadService_1 = require("./service/FileUploadService");
require("./success/index");
require("./upload/index");
require("./start/index");
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
    angular
        .module('pipFiles', ['pipFiles.SuccessUpload', 'pipFiles.FileUpload', 'pipFiles.StartUpload'])
        .directive('fileModel', fileModelDirective)
        .directive('pipFileSelect', fileSelectDirective)
        .directive('pipFailUpload', fileFailDirective)
        .service('pipFileUpload', FileUploadService_1.FileUploadService);
})();

},{"./fail/FileFailController":3,"./select/FileSelectController":5,"./service/FileUploadService":6,"./start/index":8,"./success/index":10,"./upload/index":12}],5:[function(require,module,exports){
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
    function FileUploadService($http) {
        this.$http = $http;
        this.error = null;
    }
    FileUploadService.prototype.upload = function (url, file, callback) {
        var _this = this;
        var fd = new FormData();
        fd.append('file', file);
        this.progress = 0;
        this.state = FileUploadState.Start;
        this.$http.post(url, fd, {
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
        this.progress = 0;
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
var FileStartController_1 = require("./FileStartController");
(function () {
    var fileStartDirective = {
        restrict: 'E',
        replace: true,
        controller: FileStartController_1.FileStartController,
        controllerAs: 'vm',
        bindings: {
            buttons: '=?pipButtons',
            name: '=pipName',
            type: '=?pipType',
            progress: '=?pipProgress'
        },
        templateUrl: 'start/FileStart.html'
    };
    angular
        .module('pipFiles.StartUpload', [])
        .component('pipStartUpload', fileStartDirective);
})();

},{"./FileStartController":7}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileSuccessController = (function () {
    function FileSuccessController() {
        this.type = 'file';
    }
    FileSuccessController.prototype.$onChanges = function (changes) { };
    return FileSuccessController;
}());
exports.FileSuccessController = FileSuccessController;

},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileSuccessController_1 = require("./FileSuccessController");
var FileSuccessBindings = {
    buttons: '=?pipButtons',
    name: '=pipName',
    type: '=?pipType',
};
(function () {
    var fileSuccessDirective = {
        restrict: 'E',
        replace: true,
        controller: FileSuccessController_1.FileSuccessController,
        controllerAs: 'vm',
        bindings: FileSuccessBindings,
        templateUrl: 'success/FileSuccess.html'
    };
    angular
        .module('pipFiles.SuccessUpload', [])
        .component('pipSuccesUpload', fileSuccessDirective);
})();

},{"./FileSuccessController":9}],11:[function(require,module,exports){
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
        if (this.buttonFunction) {
            this.uploadButtons = [];
            this.failButtons = [
                { title: 'Cancel', click: function () { _this.onCancel(); } },
                { title: 'Retry', click: function () { _this.onRetry(); } }
            ];
            this.startButtons = [
                { title: 'Abort', click: function () { _this.onAbort(); } }
            ];
        }
    }
    FileUploadController.prototype.$onChanges = function (changes) {
        if (changes.state) {
            this.state = changes.state.currentValue;
        }
        if (changes.progress) {
            this.progress = changes.progress.currentValue;
        }
        if (changes.error) {
            this.error = changes.error.currentValue;
        }
    };
    FileUploadController.prototype.onCancel = function () {
        if (this.buttonFunction.cancel)
            this.buttonFunction.cancel();
    };
    FileUploadController.prototype.onRetry = function () {
        if (this.buttonFunction.retry)
            this.buttonFunction.retry();
    };
    FileUploadController.prototype.onAbort = function () {
        if (this.buttonFunction.abort)
            this.buttonFunction.abort();
    };
    return FileUploadController;
}());
exports.FileUploadController = FileUploadController;

},{}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileUploadController_1 = require("./FileUploadController");
var FileUploadBindings = {
    buttonFunction: '<?pipButtonFunctions',
    buttons: '<?pipButtons',
    error: '<?pipError',
    name: '<pipName',
    state: '<pipState',
    type: '<?pipType',
    progress: '<pipProgress'
};
var FileUploadChanges = (function () {
    function FileUploadChanges() {
    }
    return FileUploadChanges;
}());
exports.FileUploadChanges = FileUploadChanges;
var fileUploadDirective = {
    controller: FileUploadController_1.FileUploadController,
    bindings: FileUploadBindings,
    templateUrl: 'upload/FileUpload.html'
};
(function () {
    angular
        .module('pipFiles.FileUpload', [])
        .component('pipFileUpload', fileUploadDirective);
})();

},{"./FileUploadController":11}],13:[function(require,module,exports){
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
  $templateCache.put('upload/FileUpload.html',
    '<div><pip-succes-upload ng-if="$ctrl.state == \'upload\'" pip-name="$ctrl.name" pip-type="$ctrl.type" pip-buttons="$ctrl.buttons"></pip-succes-upload><pip-fail-upload ng-if="$ctrl.state == \'fail\'" pip-name="$ctrl.name" pip-type="$ctrl.type" pip-error="$ctrl.error" pip-buttons="$ctrl.failButtons"></pip-fail-upload><pip-start-upload ng-if="$ctrl.state == \'start\'" pip-name="$ctrl.name" pip-type="$ctrl.type" pip-progress="$ctrl.progress" pip-buttons="$ctrl.startButtons"></pip-start-upload></div>');
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



},{}]},{},[13,1,2,3,4,5,6,7,8,9,10,11,12])(13)
});

//# sourceMappingURL=pip-webui-files.js.map
