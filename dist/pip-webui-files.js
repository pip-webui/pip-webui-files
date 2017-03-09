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
    '<div class="pip-files pip-progress-files">\n' +
    '  <div class="pip-body pip-scroll pip-progress-body"> \n' +
    '    <div class="layout-row">\n' +
    '        <div class="pip-progress-icon color-badge-bg">\n' +
    '            <md-icon md-svg-icon="icons:cross"></md-icon>\n' +
    '        </div>\n' +
    '        <div class="pip-progress-content">\n' +
    '                 <h3 class="pip-title">\n' +
    '                Uploading {{vm.type}} failed with errors!\n' +
    '            </h3>\n' +
    '            <div class="color-secondary-text pip-subtitle">\n' +
    '                {{vm.name}}\n' +
    '            </div>\n' +
    '            <div class="color-error pip-error">\n' +
    '                 {{vm.error}}\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="pip-footer layout-row layout-align-end-center" ng-if="vm.buttons && vm.buttons.length > 0">\n' +
    '        <div>\n' +
    '           <md-button class="md-accent" \n' +
    '                       ng-repeat="fail in vm.buttons" ng-click="fail.click()">\n' +
    '                {{::fail.title}}\n' +
    '            </md-button> \n' +
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
  $templateCache.put('start/FileStart.html',
    '<div class="pip-files pip-progress-files">\n' +
    '  <div class="pip-body pip-scroll pip-progress-body"> \n' +
    '    <div class="layout-row">\n' +
    '        <div class="pip-progress-icon bb-orange">\n' +
    '            <md-icon md-svg-icon="icons:play"></md-icon>\n' +
    '        </div>\n' +
    '        <div class="pip-progress-content">\n' +
    '            <h3 class="pip-title">\n' +
    '                Uploading {{::vm.type}}\n' +
    '            </h3>\n' +
    '            <div class="color-secondary-text pip-subtitle">\n' +
    '                {{vm.name}}\n' +
    '            </div>\n' +
    '            <div>\n' +
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
    '                       ng-repeat="start in vm.buttons" ng-click="start.click()">\n' +
    '                {{start.title}}\n' +
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
    '  <div class="pip-footer layout-row layout-align-end-center" ng-if="vm.buttons && vm.buttons.length > 0">\n' +
    '        <div>\n' +
    '           <md-button class="md-accent" \n' +
    '                       ng-repeat="start in vm.buttons" ng-click="start.click()">\n' +
    '                {{start.title}}\n' +
    '            </md-button> \n' +
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
    '        ng-if="$ctrl.state == \'upload\'"\n' +
    '        pip-name="$ctrl.name" \n' +
    '        pip-type="$ctrl.type" \n' +
    '        pip-buttons="$ctrl.buttons"></pip-succes-upload>\n' +
    '    <pip-fail-upload \n' +
    '        ng-if="$ctrl.state == \'fail\'"\n' +
    '        pip-name="$ctrl.name" \n' +
    '        pip-type="$ctrl.type" \n' +
    '        pip-error="$ctrl.error"\n' +
    '        pip-buttons="$ctrl.failButtons"></pip-fail-upload>\n' +
    '\n' +
    '<pip-start-upload \n' +
    '        ng-if="$ctrl.state == \'start\'"\n' +
    '        pip-name="$ctrl.name" \n' +
    '        pip-type="$ctrl.type" \n' +
    '        pip-progress="$ctrl.progress"\n' +
    '        pip-buttons="$ctrl.startButtons"></pip-start-upload>\n' +
    '</div>');
}]);
})();



},{}]},{},[13,1,2,3,4,5,6,7,8,9,10,11,12])(13)
});

//# sourceMappingURL=pip-webui-files.js.map
