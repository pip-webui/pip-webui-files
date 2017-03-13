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
var FileFailBindings = {
    buttons: '<?pipButtons',
    name: '<pipName',
    type: '<?pipType',
    error: '<pipError'
};
var FileFailChanges = (function () {
    function FileFailChanges() {
    }
    return FileFailChanges;
}());
var FileFailController = (function () {
    FileFailController.$inject = ['$scope'];
    function FileFailController($scope) {
        "ngInject";
        var _this = this;
        $scope.$watch('error', function (error) {
            _this.error = error;
        });
    }
    return FileFailController;
}());
(function () {
    var fileFailComponent = {
        controller: FileFailController,
        bindings: FileFailBindings,
        templateUrl: 'fail/FileFail.html'
    };
    angular
        .module('pipFiles.FailUpload', [])
        .component('pipFailUpload', fileFailComponent);
})();
},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./service/FileUploadService");
require("./model/FileModel");
require("./success/FileSuccess");
require("./upload/FileUpload");
require("./start/FileStart");
require("./fail/FileFail");
require("./select/FileSelect");
(function () {
    angular
        .module('pipFiles', [
        'pipFiles.Service',
        'pipFiles.Model',
        'pipFiles.SuccessUpload',
        'pipFiles.FileUpload',
        'pipFiles.StartUpload',
        'pipFiles.FailUpload',
        'pipFiles.Select'
    ]);
})();
},{"./fail/FileFail":3,"./model/FileModel":5,"./select/FileSelect":6,"./service/FileUploadService":7,"./start/FileStart":10,"./success/FileSuccess":11,"./upload/FileUpload":12}],5:[function(require,module,exports){
(function () {
    fileModelDirective.$inject = ['$parse'];
    function fileModelLink(scope, element, attrs, $parse) {
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;
        element.bind('change', function () {
            scope.$apply(function () {
                modelSetter(scope, element[0].files[0]);
            });
        });
    }
    function fileModelDirective($parse) {
        "ngInject";
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                fileModelLink(scope, element, attrs, $parse);
            }
        };
    }
    angular
        .module('pipFiles.Model', [])
        .directive('fileModel', fileModelDirective);
})();
},{}],6:[function(require,module,exports){
(function () {
    var FileSelectBindings = {
        localFile: '<pipLocalFile',
        change: '<pipChange'
    };
    var FileSelectController = (function () {
        FileSelectController.$inject = ['$scope'];
        function FileSelectController($scope) {
            "ngInject";
            var _this = this;
            $scope.$watch('$ctrl.localFile', function (item) {
                if (_this.change) {
                    _this.change(_this.localFile);
                }
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
    var fileSelectDirective = {
        restrict: 'E',
        replace: true,
        bindings: FileSelectBindings,
        controller: FileSelectController,
        templateUrl: 'select/FileSelect.html'
    };
    angular
        .module('pipFiles.Select', [])
        .component('pipFileSelect', fileSelectDirective);
})();
},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileUploadState_1 = require("./FileUploadState");
var FileUploadService = (function () {
    FileUploadService.$inject = ['$http'];
    function FileUploadService($http) {
        this.$http = $http;
        this.error = null;
    }
    FileUploadService.prototype.upload = function (url, file, callback) {
        var _this = this;
        var fd = new FormData();
        fd.append('file', file);
        this.progress = 0;
        this.state = FileUploadState_1.FileUploadState.Start;
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
            _this.state = FileUploadState_1.FileUploadState.Upload;
            if (callback)
                callback(response, null);
        })
            .error(function (response) {
            _this.state = FileUploadState_1.FileUploadState.Fail;
            _this.error = response.Error || response;
            if (callback)
                callback(null, response);
        });
    };
    return FileUploadService;
}());
(function () {
    angular
        .module('pipFiles.Service', [])
        .service('pipFileUpload', FileUploadService);
})();
},{"./FileUploadState":8}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileStartBindings = {
    buttons: '<?pipButtons',
    name: '<pipName',
    type: '<?pipType',
    progress: '<?pipProgress'
};
var FileStartChanges = (function () {
    function FileStartChanges() {
    }
    return FileStartChanges;
}());
var FileStartController = (function () {
    function FileStartController() {
        this.progress = 0;
    }
    FileStartController.prototype.$onChanges = function (changes) {
        if (changes.progress) {
            this.progress = changes.progress.currentValue;
        }
    };
    return FileStartController;
}());
(function () {
    var fileStartDirective = {
        controller: FileStartController,
        bindings: FileStartBindings,
        templateUrl: 'start/FileStart.html'
    };
    angular
        .module('pipFiles.StartUpload', [])
        .component('pipStartUpload', fileStartDirective);
})();
},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileSuccessBindings = {
    buttons: '=?pipButtons',
    name: '=pipName',
    type: '=?pipType',
};
var FileSuccessController = (function () {
    function FileSuccessController() {
        this.type = 'file';
    }
    FileSuccessController.prototype.$onChanges = function (changes) { };
    return FileSuccessController;
}());
(function () {
    var fileSuccessDirective = {
        restrict: 'E',
        replace: true,
        controller: FileSuccessController,
        controllerAs: 'vm',
        bindings: FileSuccessBindings,
        templateUrl: 'success/FileSuccess.html'
    };
    angular
        .module('pipFiles.SuccessUpload', [])
        .component('pipSuccesUpload', fileSuccessDirective);
})();
},{}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileUploadButtons = (function () {
    function FileUploadButtons() {
    }
    return FileUploadButtons;
}());
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
var FileUploadController = (function () {
    function FileUploadController($scope) {
        this.error = null;
    }
    FileUploadController.prototype.$onInit = function () {
        var _this = this;
        if (this.buttons) {
            this.uploadButtons = [];
            this.failButtons = [
                { title: 'Cancel', click: function () { _this.onCancel(); } },
                { title: 'Retry', click: function () { _this.onRetry(); } }
            ];
            this.startButtons = [
                { title: 'Abort', click: function () { _this.onAbort(); } }
            ];
        }
    };
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
var fileUploadDirective = {
    controller: FileUploadController,
    bindings: FileUploadBindings,
    templateUrl: 'upload/FileUpload.html'
};
(function () {
    angular
        .module('pipFiles.FileUpload', [])
        .component('pipFileUpload', fileUploadDirective);
})();
},{}],13:[function(require,module,exports){
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
    '                Uploading {{$ctrl.type}} failed with errors!\n' +
    '            </h3>\n' +
    '            <div class="color-secondary-text pip-subtitle">\n' +
    '                {{$ctrl.name}}\n' +
    '            </div>\n' +
    '            <div class="color-error pip-error">\n' +
    '                 {{$ctrl.error}}\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="pip-footer layout-row layout-align-end-center" ng-if="$ctrl.buttons && $ctrl.buttons.length > 0">\n' +
    '        <div>\n' +
    '           <md-button class="md-accent" \n' +
    '                       ng-repeat="fail in $ctrl.buttons" ng-click="fail.click()">\n' +
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
    '        <input type="file" file-model="$ctrl.localFile" id="inp_file" ng-model="$ctrl.localFile"></input>\n' +
    '      </form>\n' +
    '        <md-button class="md-raised md-accent pip-button"\n' +
    '                   ng-click="$ctrl.onUploadButtonClick()" \n' +
    '                   ng-if="!$ctrl.localFile">Choose File</md-button>\n' +
    '        <div ng-if="$ctrl.localFile.name" class="pip-file layout-row layout-align-start-center">\n' +
    '          <md-icon md-svg-icon="icons:document" class="pip-icon"></md-icon>\n' +
    '            <div class="flex">\n' +
    '                <div class="text-body2 text-overflow">\n' +
    '                    {{$ctrl.localFile.name}}\n' +
    '                </div>\n' +
    '                <div ng-if="$ctrl.localFile.size" class="color-secondary-text">{{$ctrl.localFile.size}}</div>\n' +
    '            </div>\n' +
    '            <md-button ng-click="$ctrl.onDeleteButtonClick()" class="md-icon-button">\n' +
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
    '                Uploading {{::$ctrl.type}}\n' +
    '            </h3>\n' +
    '            <div class="color-secondary-text pip-subtitle">\n' +
    '                {{$ctrl.name}}\n' +
    '            </div>\n' +
    '            <div>\n' +
    '                <md-progress-linear md-mode="determinate" \n' +
    '                    class="md-accent" \n' +
    '                    value="{{$ctrl.progress}}" \n' +
    '                    ng-if="$ctrl.progress < 100">\n' +
    '                </md-progress-linear>\n' +
    '                <md-progress-linear md-mode="indeterminate" \n' +
    '                    class="md-accent" \n' +
    '                    ng-if="$ctrl.progress == 100">\n' +
    '                </md-progress-linear>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="pip-footer layout-row layout-align-end-center" ng-if="$ctrl.buttons">\n' +
    '        <div>\n' +
    '            <md-button class="md-accent" \n' +
    '                       ng-repeat="start in $ctrl.buttons" ng-click="start.click()">\n' +
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
    '            ng-if="$ctrl.state == \'upload\' && (!$ctrl.buttons || $ctrl.uploadButtons)"\n' +
    '            pip-name="$ctrl.name" \n' +
    '            pip-type="$ctrl.type" \n' +
    '            pip-buttons="$ctrl.uploadButtons"></pip-succes-upload>\n' +
    '    <pip-fail-upload \n' +
    '            ng-if="$ctrl.state == \'fail\'"\n' +
    '            pip-name="$ctrl.name" \n' +
    '            pip-type="$ctrl.type" \n' +
    '            pip-error="$ctrl.error"\n' +
    '            pip-buttons="$ctrl.failButtons"></pip-fail-upload>\n' +
    '\n' +
    '    <pip-start-upload \n' +
    '            ng-if="$ctrl.state == \'start\'"\n' +
    '            pip-name="$ctrl.name" \n' +
    '            pip-type="$ctrl.type" \n' +
    '            pip-progress="$ctrl.progress"\n' +
    '            pip-buttons="$ctrl.startButtons"></pip-start-upload>\n' +
    '</div>');
}]);
})();



},{}]},{},[13,1,2,3,4,5,6,7,8,9,10,11,12])(13)
});

//# sourceMappingURL=pip-webui-files.js.map
