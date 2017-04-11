(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.pip || (g.pip = {})).files = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var ButtonsUpload = (function () {
    function ButtonsUpload() {
    }
    return ButtonsUpload;
}());
exports.ButtonsUpload = ButtonsUpload;
},{}],2:[function(require,module,exports){
{
    translateFilter.$inject = ['$injector'];
    function translateFilter($injector) {
        var pipTranslate = $injector.has('pipTranslate')
            ? $injector.get('pipTranslate') : null;
        return function (key) {
            return pipTranslate ? pipTranslate.translate(key) || key : key;
        };
    }
    angular
        .module('pipFiles.Translate', [])
        .filter('translate', translateFilter);
}
},{}],3:[function(require,module,exports){
"use strict";
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
var fileFailComponent = {
    controller: FileFailController,
    bindings: FileFailBindings,
    templateUrl: 'fail/FileFail.html'
};
angular
    .module('pipFiles.FailUpload', [])
    .component('pipFailUpload', fileFailComponent);
},{}],4:[function(require,module,exports){
"use strict";
require("./service/FileUploadService");
require("./model/FileModel");
require("./success/FileSuccess");
require("./upload/FileUpload");
require("./start/FileStart");
require("./fail/FileFail");
require("./select/FileSelect");
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
},{"./fail/FileFail":3,"./model/FileModel":5,"./select/FileSelect":6,"./service/FileUploadService":7,"./start/FileStart":10,"./success/FileSuccess":11,"./upload/FileUpload":12}],5:[function(require,module,exports){
{
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
}
},{}],6:[function(require,module,exports){
{
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
}
},{}],7:[function(require,module,exports){
"use strict";
var FileUploadState_1 = require("./FileUploadState");
var FileUploadService = (function () {
    FileUploadService.$inject = ['$http'];
    function FileUploadService($http) {
        "ngInject";
        this.$http = $http;
    }
    FileUploadService.prototype.upload = function (file, url, resultCallback, progressCallback) {
        var fd = new FormData();
        fd.append('file', file);
        if (progressCallback)
            progressCallback(FileUploadState_1.FileUploadState.Uploading, 0);
        this.$http.post(url, fd, {
            uploadEventHandlers: {
                progress: function (e) {
                    if (e.lengthComputable && progressCallback) {
                        progressCallback(FileUploadState_1.FileUploadState.Uploading, (e.loaded / e.total) * 100);
                    }
                }
            },
            headers: { 'Content-Type': undefined }
        })
            .success(function (response) {
            if (progressCallback)
                progressCallback(FileUploadState_1.FileUploadState.Completed, 100);
            if (resultCallback)
                resultCallback(response, null);
        })
            .error(function (response) {
            if (progressCallback)
                progressCallback(FileUploadState_1.FileUploadState.Failed, 0);
            if (resultCallback)
                resultCallback(null, response.Error || response);
        });
    };
    return FileUploadService;
}());
angular
    .module('pipFiles.Service', [])
    .service('pipFileUpload', FileUploadService);
},{"./FileUploadState":8}],8:[function(require,module,exports){
"use strict";
var FileUploadState;
(function (FileUploadState) {
    FileUploadState[FileUploadState["Uploading"] = 0] = "Uploading";
    FileUploadState[FileUploadState["Completed"] = 1] = "Completed";
    FileUploadState[FileUploadState["Failed"] = 2] = "Failed";
})(FileUploadState = exports.FileUploadState || (exports.FileUploadState = {}));
},{}],9:[function(require,module,exports){
"use strict";
},{}],10:[function(require,module,exports){
"use strict";
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
var fileStartDirective = {
    controller: FileStartController,
    bindings: FileStartBindings,
    templateUrl: 'start/FileStart.html'
};
angular
    .module('pipFiles.StartUpload', [])
    .component('pipStartUpload', fileStartDirective);
},{}],11:[function(require,module,exports){
"use strict";
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
},{}],12:[function(require,module,exports){
"use strict";
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
angular
    .module('pipFiles.FileUpload', [])
    .component('pipFileUpload', fileUploadDirective);
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
  $templateCache.put('upload/FileUpload.html',
    '<div>\n' +
    '    <pip-succes-upload \n' +
    '            ng-if="$ctrl.state == 1 && (!$ctrl.buttons || $ctrl.uploadButtons)"\n' +
    '            pip-name="$ctrl.name" \n' +
    '            pip-type="$ctrl.type" \n' +
    '            pip-buttons="$ctrl.buttons"></pip-succes-upload>\n' +
    '    <pip-fail-upload \n' +
    '            ng-if="$ctrl.state == 2"\n' +
    '            pip-name="$ctrl.name" \n' +
    '            pip-type="$ctrl.type" \n' +
    '            pip-error="$ctrl.error"\n' +
    '            pip-buttons="$ctrl.failButtons"></pip-fail-upload>\n' +
    '\n' +
    '    <pip-start-upload \n' +
    '            ng-if="$ctrl.state == 0"\n' +
    '            pip-name="$ctrl.name" \n' +
    '            pip-type="$ctrl.type" \n' +
    '            pip-progress="$ctrl.progress"\n' +
    '            pip-buttons="$ctrl.startButtons"></pip-start-upload>\n' +
    '</div>');
}]);
})();



},{}]},{},[13,1,2,3,4,5,6,7,8,9,10,11,12])(13)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tbW9uL0J1dHRvbnNVcGxvYWQudHMiLCJzcmMvZGVwZW5kZW5jaWVzL1RyYW5zbGF0ZUZpbHRlci50cyIsInNyYy9mYWlsL0ZpbGVGYWlsLnRzIiwic3JjL2luZGV4LnRzIiwic3JjL21vZGVsL0ZpbGVNb2RlbC50cyIsInNyYy9zZWxlY3QvRmlsZVNlbGVjdC50cyIsInNyYy9zZXJ2aWNlL0ZpbGVVcGxvYWRTZXJ2aWNlLnRzIiwic3JjL3NlcnZpY2UvRmlsZVVwbG9hZFN0YXRlLnRzIiwic3JjL3N0YXJ0L0ZpbGVTdGFydC50cyIsInNyYy9zdWNjZXNzL0ZpbGVTdWNjZXNzLnRzIiwic3JjL3VwbG9hZC9GaWxlVXBsb2FkLnRzIiwidGVtcC9waXAtd2VidWktZmlsZXMtaHRtbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQTtJQUFBO0lBR0EsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FIQSxBQUdDLElBQUE7QUFIWSxzQ0FBYTs7QUNBMUIsQ0FBQztJQUNHLHlCQUF5QixTQUF3QztRQUM3RCxJQUFJLFlBQVksR0FBUSxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztjQUMvQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUUzQyxNQUFNLENBQUMsVUFBQyxHQUFXO1lBQ2YsTUFBTSxDQUFDLFlBQVksR0FBSSxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDcEUsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQUVELE9BQU87U0FDRixNQUFNLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxDQUFDO1NBQ2hDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDOUMsQ0FBQzs7O0FDRkQsSUFBTSxnQkFBZ0IsR0FBc0I7SUFDeEMsT0FBTyxFQUFF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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBjbGFzcyBCdXR0b25zVXBsb2FkIHtcclxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGNsaWNrOiBGdW5jdGlvbjtcclxufSIsIntcclxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUZpbHRlcigkaW5qZWN0b3I6IGFuZ3VsYXIuYXV0by5JSW5qZWN0b3JTZXJ2aWNlKSB7XHJcbiAgICAgICAgbGV0IHBpcFRyYW5zbGF0ZTogYW55ID0gJGluamVjdG9yLmhhcygncGlwVHJhbnNsYXRlJykgXHJcbiAgICAgICAgICAgID8gJGluamVjdG9yLmdldCgncGlwVHJhbnNsYXRlJykgOiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gKGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBwaXBUcmFuc2xhdGUgID8gcGlwVHJhbnNsYXRlLnRyYW5zbGF0ZShrZXkpIHx8IGtleSA6IGtleTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYW5ndWxhclxyXG4gICAgICAgIC5tb2R1bGUoJ3BpcEZpbGVzLlRyYW5zbGF0ZScsIFtdKVxyXG4gICAgICAgIC5maWx0ZXIoJ3RyYW5zbGF0ZScsIHRyYW5zbGF0ZUZpbHRlcik7XHJcbn0iLCJpbXBvcnQgeyBCdXR0b25zVXBsb2FkIH0gZnJvbSBcIi4uL2NvbW1vbi9CdXR0b25zVXBsb2FkXCI7XHJcblxyXG5pbnRlcmZhY2UgSUZpbGVGYWlsQmluZGluZ3Mge1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG5cclxuICAgIGJ1dHRvbnM6IGFueSxcclxuICAgIG5hbWU6IGFueSxcclxuICAgIHR5cGU6IGFueSxcclxuICAgIGVycm9yOiBhbnlcclxufVxyXG5cclxuY29uc3QgRmlsZUZhaWxCaW5kaW5nczogSUZpbGVGYWlsQmluZGluZ3MgPSB7XHJcbiAgICBidXR0b25zOiAnPD9waXBCdXR0b25zJyxcclxuICAgIG5hbWU6ICc8cGlwTmFtZScsXHJcbiAgICB0eXBlOiAnPD9waXBUeXBlJyxcclxuICAgIGVycm9yOiAnPHBpcEVycm9yJ1xyXG59XHJcblxyXG5jbGFzcyBGaWxlRmFpbENoYW5nZXMgaW1wbGVtZW50cyBuZy5JT25DaGFuZ2VzT2JqZWN0LCBJRmlsZUZhaWxCaW5kaW5ncyB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBuZy5JQ2hhbmdlc09iamVjdDxhbnk+O1xyXG5cclxuICAgIGJ1dHRvbnM6IG5nLklDaGFuZ2VzT2JqZWN0PEJ1dHRvbnNVcGxvYWRbXT47XHJcbiAgICBlcnJvcjogbmcuSUNoYW5nZXNPYmplY3Q8c3RyaW5nPjtcclxuICAgIG5hbWU6IG5nLklDaGFuZ2VzT2JqZWN0PHN0cmluZz47XHJcbiAgICB0eXBlOiBuZy5JQ2hhbmdlc09iamVjdDxzdHJpbmc+O1xyXG59XHJcblxyXG5cclxuaW50ZXJmYWNlIElGaWxlRmFpbENvbnRyb2xsZXIge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgZXJyb3I6IHN0cmluZztcclxuICAgIGJ1dHRvbnM6IEJ1dHRvbnNVcGxvYWRbXTtcclxufVxyXG5cclxuY2xhc3MgRmlsZUZhaWxDb250cm9sbGVyIGltcGxlbWVudHMgSUZpbGVGYWlsQ29udHJvbGxlciwgSUZpbGVGYWlsQmluZGluZ3Mge1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZXJyb3I6IHN0cmluZztcclxuICAgIHB1YmxpYyBidXR0b25zOiBCdXR0b25zVXBsb2FkW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlOiBuZy5JU2NvcGUpIHtcclxuICAgICAgICBcIm5nSW5qZWN0XCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSW5pdCBwYXJhbWV0ZXJzXHJcbiAgICAgICAgXHJcbiAgICAgICAgJHNjb3BlLiR3YXRjaCgnZXJyb3InLCAoZXJyb3I6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZmlsZUZhaWxDb21wb25lbnQ6IG5nLklDb21wb25lbnRPcHRpb25zID0ge1xyXG4gICAgY29udHJvbGxlcjogRmlsZUZhaWxDb250cm9sbGVyLFxyXG4gICAgYmluZGluZ3M6IEZpbGVGYWlsQmluZGluZ3MsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2ZhaWwvRmlsZUZhaWwuaHRtbCdcclxufTtcclxuXHJcbmFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3BpcEZpbGVzLkZhaWxVcGxvYWQnLCBbXSlcclxuICAgIC5jb21wb25lbnQoJ3BpcEZhaWxVcGxvYWQnLCBmaWxlRmFpbENvbXBvbmVudClcclxuIiwi77u/XHJcbmltcG9ydCAnLi9zZXJ2aWNlL0ZpbGVVcGxvYWRTZXJ2aWNlJztcclxuaW1wb3J0ICcuL21vZGVsL0ZpbGVNb2RlbCc7XHJcbmltcG9ydCAnLi9zdWNjZXNzL0ZpbGVTdWNjZXNzJztcclxuaW1wb3J0ICcuL3VwbG9hZC9GaWxlVXBsb2FkJztcclxuaW1wb3J0ICcuL3N0YXJ0L0ZpbGVTdGFydCc7XHJcbmltcG9ydCAnLi9mYWlsL0ZpbGVGYWlsJztcclxuaW1wb3J0ICcuL3NlbGVjdC9GaWxlU2VsZWN0JztcclxuXHJcbmFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3BpcEZpbGVzJywgW1xyXG4gICAgICAgICdwaXBGaWxlcy5TZXJ2aWNlJyxcclxuICAgICAgICAncGlwRmlsZXMuTW9kZWwnLFxyXG4gICAgICAgICdwaXBGaWxlcy5TdWNjZXNzVXBsb2FkJyxcclxuICAgICAgICAncGlwRmlsZXMuRmlsZVVwbG9hZCcsXHJcbiAgICAgICAgJ3BpcEZpbGVzLlN0YXJ0VXBsb2FkJyxcclxuICAgICAgICAncGlwRmlsZXMuRmFpbFVwbG9hZCcsXHJcbiAgICAgICAgJ3BpcEZpbGVzLlNlbGVjdCdcclxuICAgIF0pO1xyXG4iLCJ7XHJcbiAgICBmdW5jdGlvbiBmaWxlTW9kZWxMaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgJHBhcnNlKSB7XHJcbiAgICAgICAgbGV0IG1vZGVsID0gJHBhcnNlKGF0dHJzLmZpbGVNb2RlbCk7XHJcbiAgICAgICAgbGV0IG1vZGVsU2V0dGVyID0gbW9kZWwuYXNzaWduO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgZWxlbWVudC5iaW5kKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNjb3BlLiRhcHBseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb2RlbFNldHRlcihzY29wZSwgZWxlbWVudFswXS5maWxlc1swXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbGVNb2RlbERpcmVjdGl2ZSgkcGFyc2U6IG5nLklQYXJzZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgXCJuZ0luamVjdFwiO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICAgICAgICBsaW5rOiAoc2NvcGU6IG5nLklTY29wZSwgZWxlbWVudCwgYXR0cnM6IG5nLklBdHRyaWJ1dGVzKSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgZmlsZU1vZGVsTGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsICRwYXJzZSkgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGFuZ3VsYXJcclxuICAgICAgICAubW9kdWxlKCdwaXBGaWxlcy5Nb2RlbCcsIFtdKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ2ZpbGVNb2RlbCcsIGZpbGVNb2RlbERpcmVjdGl2ZSlcclxufSIsIntcclxuXHJcbiAgICBpbnRlcmZhY2UgSUZpbGVTZWxlY3RDb250cm9sbGVyIHtcclxuICAgICAgICBsb2NhbEZpbGU6IGFueTtcclxuICAgICAgICBvblVwbG9hZEJ1dHRvbkNsaWNrKCk6IHZvaWQ7XHJcbiAgICAgICAgb25EZWxldGVCdXR0b25DbGljaygpOiB2b2lkO1xyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBJRmlsZVNlbGVjdEJpbmRpbmdzIHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcblxyXG4gICAgICAgIGxvY2FsRmlsZTogYW55LFxyXG4gICAgICAgIGNoYW5nZTogYW55XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgRmlsZVNlbGVjdEJpbmRpbmdzOiBJRmlsZVNlbGVjdEJpbmRpbmdzID0ge1xyXG4gICAgICAgIGxvY2FsRmlsZTogJzxwaXBMb2NhbEZpbGUnLFxyXG4gICAgICAgIGNoYW5nZTogJzxwaXBDaGFuZ2UnXHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgRmlsZVNlbGVjdENvbnRyb2xsZXIgaW1wbGVtZW50cyBJRmlsZVNlbGVjdENvbnRyb2xsZXIge1xyXG4gICAgICAgIHB1YmxpYyBsb2NhbEZpbGU6IGFueTtcclxuICAgICAgICBwdWJsaWMgY2hhbmdlOiBGdW5jdGlvbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoJHNjb3BlOiBuZy5JU2NvcGUpIHtcclxuICAgICAgICAgICAgXCJuZ0luamVjdFwiO1xyXG4gICAgICAgICAgICAkc2NvcGUuJHdhdGNoKCckY3RybC5sb2NhbEZpbGUnLCAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2UodGhpcy5sb2NhbEZpbGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG9uVXBsb2FkQnV0dG9uQ2xpY2soKTogdm9pZCB7XHJcbiAgICAgICAgICAgICQoJyNpbnBfZmlsZScpLmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb25EZWxldGVCdXR0b25DbGljaygpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbEZpbGUgPSBudWxsO1xyXG4gICAgICAgICAgICBsZXQgZm9ybWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wX2Zvcm0nKTtcclxuICAgICAgICAgICAgKDxhbnk+Zm9ybWwpLnJlc2V0KCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaWxlU2VsZWN0RGlyZWN0aXZlID0ge1xyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICBiaW5kaW5nczogRmlsZVNlbGVjdEJpbmRpbmdzLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IEZpbGVTZWxlY3RDb250cm9sbGVyLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnc2VsZWN0L0ZpbGVTZWxlY3QuaHRtbCdcclxuICAgIH1cclxuXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAgLm1vZHVsZSgncGlwRmlsZXMuU2VsZWN0JywgW10pXHJcbiAgICAgICAgLmNvbXBvbmVudCgncGlwRmlsZVNlbGVjdCcsIGZpbGVTZWxlY3REaXJlY3RpdmUpXHJcblxyXG59XHJcbiIsImltcG9ydCB7IEZpbGVVcGxvYWRTdGF0ZSB9IGZyb20gJy4vRmlsZVVwbG9hZFN0YXRlJztcclxuaW1wb3J0IHsgSUZpbGVVcGxvYWRTZXJ2aWNlIH0gZnJvbSAnLi9JRmlsZVVwbG9hZFNlcnZpY2UnO1xyXG5cclxuY2xhc3MgRmlsZVVwbG9hZFNlcnZpY2UgaW1wbGVtZW50cyBJRmlsZVVwbG9hZFNlcnZpY2Uge1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlICRodHRwOiBuZy5JSHR0cFNlcnZpY2UpIHtcclxuICAgICAgICBcIm5nSW5qZWN0XCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwbG9hZChmaWxlOiBhbnksIHVybDogc3RyaW5nLFxyXG4gICAgICAgIHJlc3VsdENhbGxiYWNrPzogKGRhdGE6IGFueSwgZXJyOiBhbnkpID0+IHZvaWQsXHJcbiAgICAgICAgcHJvZ3Jlc3NDYWxsYmFjaz86IChzdGF0ZTogRmlsZVVwbG9hZFN0YXRlLCBwcm9ncmVzczogbnVtYmVyKSA9PiB2b2lkXHJcbiAgICApOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IGZkOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZkLmFwcGVuZCgnZmlsZScsIGZpbGUpO1xyXG5cclxuICAgICAgICBpZiAocHJvZ3Jlc3NDYWxsYmFjaylcclxuICAgICAgICAgICAgcHJvZ3Jlc3NDYWxsYmFjayhGaWxlVXBsb2FkU3RhdGUuVXBsb2FkaW5nLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy4kaHR0cC5wb3N0KHVybCwgZmQsIDxhbnk+e1xyXG4gICAgICAgICAgICB1cGxvYWRFdmVudEhhbmRsZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogKGU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmxlbmd0aENvbXB1dGFibGUgJiYgcHJvZ3Jlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0NhbGxiYWNrKEZpbGVVcGxvYWRTdGF0ZS5VcGxvYWRpbmcsIChlLmxvYWRlZCAvIGUudG90YWwpICogMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6IHVuZGVmaW5lZCB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3VjY2VzcygocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3NDYWxsYmFjaylcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzQ2FsbGJhY2soRmlsZVVwbG9hZFN0YXRlLkNvbXBsZXRlZCwgMTAwKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRDYWxsYmFjaylcclxuICAgICAgICAgICAgICAgIHJlc3VsdENhbGxiYWNrKHJlc3BvbnNlLCBudWxsKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5lcnJvcigocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3NDYWxsYmFjaylcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzQ2FsbGJhY2soRmlsZVVwbG9hZFN0YXRlLkZhaWxlZCwgMCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0Q2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICByZXN1bHRDYWxsYmFjayhudWxsLCByZXNwb25zZS5FcnJvciB8fCByZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3BpcEZpbGVzLlNlcnZpY2UnLCBbXSlcclxuICAgIC5zZXJ2aWNlKCdwaXBGaWxlVXBsb2FkJywgRmlsZVVwbG9hZFNlcnZpY2UpO1xyXG4iLCJleHBvcnQgZW51bSBGaWxlVXBsb2FkU3RhdGUge1xyXG4gICAgVXBsb2FkaW5nLFxyXG4gICAgQ29tcGxldGVkLFxyXG4gICAgRmFpbGVkXHJcbn0iLCJpbXBvcnQgeyBCdXR0b25zVXBsb2FkIH0gZnJvbSBcIi4uL2NvbW1vbi9CdXR0b25zVXBsb2FkXCI7XHJcblxyXG5pbnRlcmZhY2UgSUZpbGVTdGFydEJpbmRpbmdzIHtcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxuXHJcbiAgICB0eXBlOiBhbnlcclxuICAgIGJ1dHRvbnM6IGFueSxcclxuICAgIG5hbWU6IGFueSxcclxuICAgIHByb2dyZXNzOiBhbnlcclxufVxyXG5cclxuY29uc3QgRmlsZVN0YXJ0QmluZGluZ3M6IElGaWxlU3RhcnRCaW5kaW5ncyA9IHtcclxuICAgIGJ1dHRvbnM6ICc8P3BpcEJ1dHRvbnMnLFxyXG4gICAgbmFtZTogJzxwaXBOYW1lJyxcclxuICAgIHR5cGU6ICc8P3BpcFR5cGUnLFxyXG4gICAgcHJvZ3Jlc3M6ICc8P3BpcFByb2dyZXNzJ1xyXG59O1xyXG5cclxuXHJcbmNsYXNzIEZpbGVTdGFydENoYW5nZXMgaW1wbGVtZW50cyBuZy5JT25DaGFuZ2VzT2JqZWN0LCBJRmlsZVN0YXJ0QmluZGluZ3Mge1xyXG4gICAgW2tleTogc3RyaW5nXTogbmcuSUNoYW5nZXNPYmplY3Q8YW55PjtcclxuXHJcbiAgICBidXR0b25zOiBuZy5JQ2hhbmdlc09iamVjdDxCdXR0b25zVXBsb2FkW10+O1xyXG4gICAgbmFtZTogbmcuSUNoYW5nZXNPYmplY3Q8c3RyaW5nPjtcclxuICAgIHR5cGU6IG5nLklDaGFuZ2VzT2JqZWN0PHN0cmluZz47XHJcbiAgICBwcm9ncmVzczogbmcuSUNoYW5nZXNPYmplY3Q8bnVtYmVyPjtcclxufVxyXG5cclxuXHJcbmludGVyZmFjZSBJRmlsZVN0YXJ0Q29udHJvbGxlciB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICBwcm9ncmVzczogbnVtYmVyO1xyXG4gICAgYnV0dG9uczogQnV0dG9uc1VwbG9hZFtdO1xyXG59XHJcblxyXG5jbGFzcyBGaWxlU3RhcnRDb250cm9sbGVyIGltcGxlbWVudHMgSUZpbGVTdGFydENvbnRyb2xsZXIge1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBwcm9ncmVzczogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYnV0dG9uczogQnV0dG9uc1VwbG9hZFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgcHVibGljICRvbkNoYW5nZXMoY2hhbmdlczogRmlsZVN0YXJ0Q2hhbmdlcykge1xyXG4gICAgICAgIGlmIChjaGFuZ2VzLnByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBjaGFuZ2VzLnByb2dyZXNzLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgZmlsZVN0YXJ0RGlyZWN0aXZlID0ge1xyXG4gICAgY29udHJvbGxlcjogRmlsZVN0YXJ0Q29udHJvbGxlcixcclxuICAgIGJpbmRpbmdzOiBGaWxlU3RhcnRCaW5kaW5ncyxcclxuICAgIHRlbXBsYXRlVXJsOiAnc3RhcnQvRmlsZVN0YXJ0Lmh0bWwnXHJcbn07XHJcblxyXG5hbmd1bGFyXHJcbiAgICAubW9kdWxlKCdwaXBGaWxlcy5TdGFydFVwbG9hZCcsIFtdKVxyXG4gICAgLmNvbXBvbmVudCgncGlwU3RhcnRVcGxvYWQnLCBmaWxlU3RhcnREaXJlY3RpdmUpXHJcbiIsImltcG9ydCB7IEJ1dHRvbnNVcGxvYWQgfSBmcm9tIFwiLi4vY29tbW9uL0J1dHRvbnNVcGxvYWRcIjtcclxuXHJcbmludGVyZmFjZSBJRmlsZVN1Y2Nlc3NCaW5kaW5ncyB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcblxyXG4gICAgdHlwZTogYW55XHJcbiAgICBidXR0b25zOiBhbnksXHJcbiAgICBuYW1lOiBhbnlcclxufVxyXG5cclxuY29uc3QgRmlsZVN1Y2Nlc3NCaW5kaW5nczogSUZpbGVTdWNjZXNzQmluZGluZ3MgPSB7XHJcbiAgICBidXR0b25zOiAnPT9waXBCdXR0b25zJyxcclxuICAgIG5hbWU6ICc9cGlwTmFtZScsXHJcbiAgICB0eXBlOiAnPT9waXBUeXBlJyxcclxufVxyXG5cclxuaW50ZXJmYWNlIElGaWxlU3VjY2Vzc0NvbnRyb2xsZXIge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgYnV0dG9uczogQnV0dG9uc1VwbG9hZFtdO1xyXG59XHJcblxyXG5jbGFzcyBGaWxlU3VjY2Vzc0NvbnRyb2xsZXIgaW1wbGVtZW50cyBJRmlsZVN1Y2Nlc3NDb250cm9sbGVyLCBJRmlsZVN1Y2Nlc3NCaW5kaW5ncyB7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHR5cGU6IHN0cmluZyA9ICdmaWxlJztcclxuICAgIHB1YmxpYyBidXR0b25zOiBCdXR0b25zVXBsb2FkW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHB1YmxpYyAkb25DaGFuZ2VzKGNoYW5nZXMpIHt9XHJcbn1cclxuXHJcbmNvbnN0IGZpbGVTdWNjZXNzRGlyZWN0aXZlID0ge1xyXG4gICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICBjb250cm9sbGVyOiBGaWxlU3VjY2Vzc0NvbnRyb2xsZXIsXHJcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXHJcbiAgICBiaW5kaW5nczogRmlsZVN1Y2Nlc3NCaW5kaW5ncyxcclxuICAgIHRlbXBsYXRlVXJsOiAnc3VjY2Vzcy9GaWxlU3VjY2Vzcy5odG1sJ1xyXG59XHJcblxyXG5cclxuYW5ndWxhclxyXG4gICAgLm1vZHVsZSgncGlwRmlsZXMuU3VjY2Vzc1VwbG9hZCcsIFtdKVxyXG4gICAgLmNvbXBvbmVudCgncGlwU3VjY2VzVXBsb2FkJywgZmlsZVN1Y2Nlc3NEaXJlY3RpdmUpXHJcbiIsImltcG9ydCB7IElGaWxlVXBsb2FkU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlL0lGaWxlVXBsb2FkU2VydmljZVwiO1xyXG5pbXBvcnQgeyBCdXR0b25zVXBsb2FkIH0gZnJvbSBcIi4uL2NvbW1vbi9CdXR0b25zVXBsb2FkXCI7XHJcblxyXG5jbGFzcyBGaWxlVXBsb2FkQnV0dG9ucyB7XHJcbiAgICByZXRyeTogRnVuY3Rpb247XHJcbiAgICBjYW5jZWw6IEZ1bmN0aW9uO1xyXG4gICAgYWJvcnQ6IEZ1bmN0aW9uO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUZpbGVVcGxvYWRDb250cm9sbGVyIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIHN0YXRlOiBzdHJpbmc7XHJcbiAgICBwcm9ncmVzczogbnVtYmVyO1xyXG4gICAgb25DYW5jZWwoKTogdm9pZDtcclxuICAgIG9uUmV0cnkoKTogdm9pZDtcclxuICAgIG9uQWJvcnQoKTogdm9pZDtcclxufVxyXG5cclxuaW50ZXJmYWNlIElGaWxlVXBsb2FkQmluZGluZ3Mge1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG5cclxuICAgIGJ1dHRvbkZ1bmN0aW9uOiBhbnksXHJcbiAgICBidXR0b25zOiBhbnksXHJcbiAgICBlcnJvcjogYW55LFxyXG4gICAgbmFtZTogYW55LFxyXG4gICAgc3RhdGU6IGFueSxcclxuICAgIHR5cGU6IGFueSxcclxuICAgIHByb2dyZXNzOiBhbnlcclxufVxyXG5cclxuY29uc3QgRmlsZVVwbG9hZEJpbmRpbmdzOiBJRmlsZVVwbG9hZEJpbmRpbmdzID0ge1xyXG4gICAgYnV0dG9uRnVuY3Rpb246ICc8P3BpcEJ1dHRvbkZ1bmN0aW9ucycsXHJcbiAgICBidXR0b25zOiAnPD9waXBCdXR0b25zJyxcclxuICAgIGVycm9yOiAnPD9waXBFcnJvcicsXHJcbiAgICBuYW1lOiAnPHBpcE5hbWUnLFxyXG4gICAgc3RhdGU6ICc8cGlwU3RhdGUnLFxyXG4gICAgdHlwZTogJzw/cGlwVHlwZScsXHJcbiAgICBwcm9ncmVzczogJzxwaXBQcm9ncmVzcydcclxufVxyXG5cclxuY2xhc3MgRmlsZVVwbG9hZENoYW5nZXMgaW1wbGVtZW50cyBuZy5JT25DaGFuZ2VzT2JqZWN0LCBJRmlsZVVwbG9hZEJpbmRpbmdzIHtcclxuICAgIFtrZXk6IHN0cmluZ106IG5nLklDaGFuZ2VzT2JqZWN0PGFueT47XHJcblxyXG4gICAgYnV0dG9uRnVuY3Rpb246IG5nLklDaGFuZ2VzT2JqZWN0PEZpbGVVcGxvYWRCdXR0b25zPjtcclxuICAgIGJ1dHRvbnM6IG5nLklDaGFuZ2VzT2JqZWN0PGJvb2xlYW4+O1xyXG4gICAgZXJyb3I6IG5nLklDaGFuZ2VzT2JqZWN0PHN0cmluZz47XHJcbiAgICBuYW1lOiBuZy5JQ2hhbmdlc09iamVjdDxzdHJpbmc+O1xyXG4gICAgc3RhdGU6IG5nLklDaGFuZ2VzT2JqZWN0PHN0cmluZz47XHJcbiAgICB0eXBlOiBuZy5JQ2hhbmdlc09iamVjdDxzdHJpbmc+O1xyXG4gICAgcHJvZ3Jlc3M6IG5nLklDaGFuZ2VzT2JqZWN0PG51bWJlcj47XHJcbn1cclxuXHJcblxyXG5jbGFzcyBGaWxlVXBsb2FkQ29udHJvbGxlciBpbXBsZW1lbnRzIElGaWxlVXBsb2FkQ29udHJvbGxlciwgSUZpbGVVcGxvYWRCaW5kaW5ncyB7XHJcbiAgICBwdWJsaWMgYnV0dG9uRnVuY3Rpb246IEZpbGVVcGxvYWRCdXR0b25zO1xyXG4gICAgcHVibGljIHVwbG9hZEJ1dHRvbnM6IEJ1dHRvbnNVcGxvYWRbXTtcclxuICAgIHB1YmxpYyBmYWlsQnV0dG9uczogQnV0dG9uc1VwbG9hZFtdO1xyXG4gICAgcHVibGljIHN0YXJ0QnV0dG9uczogQnV0dG9uc1VwbG9hZFtdO1xyXG5cclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHN0YXRlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcHJvZ3Jlc3M6IG51bWJlcjtcclxuICAgIHB1YmxpYyBidXR0b25zOiBib29sZWFuO1xyXG4gICAgcHVibGljIGVycm9yOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZTogbmcuSVNjb3BlKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgJG9uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5idXR0b25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBsb2FkQnV0dG9ucyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmZhaWxCdXR0b25zID0gW1xyXG4gICAgICAgICAgICAgICAgeyB0aXRsZTogJ0NhbmNlbCcsIGNsaWNrOiAoKSA9PiB7IHRoaXMub25DYW5jZWwoKSB9IH0sXHJcbiAgICAgICAgICAgICAgICB7IHRpdGxlOiAnUmV0cnknLCBjbGljazogKCkgPT4geyB0aGlzLm9uUmV0cnkoKSB9IH1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEJ1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgICAgICB7IHRpdGxlOiAnQWJvcnQnLCBjbGljazogKCkgPT4geyB0aGlzLm9uQWJvcnQoKSB9IH1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljICRvbkNoYW5nZXMoY2hhbmdlczogRmlsZVVwbG9hZENoYW5nZXMpIHtcclxuICAgICAgICBpZiAoY2hhbmdlcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gY2hhbmdlcy5zdGF0ZS5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hhbmdlcy5wcm9ncmVzcykge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gY2hhbmdlcy5wcm9ncmVzcy5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hhbmdlcy5lcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yID0gY2hhbmdlcy5lcnJvci5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25DYW5jZWwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uRnVuY3Rpb24uY2FuY2VsKSB0aGlzLmJ1dHRvbkZ1bmN0aW9uLmNhbmNlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblJldHJ5KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbkZ1bmN0aW9uLnJldHJ5KSB0aGlzLmJ1dHRvbkZ1bmN0aW9uLnJldHJ5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQWJvcnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uRnVuY3Rpb24uYWJvcnQpIHRoaXMuYnV0dG9uRnVuY3Rpb24uYWJvcnQoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IGZpbGVVcGxvYWREaXJlY3RpdmUgPSB7XHJcbiAgICBjb250cm9sbGVyOiBGaWxlVXBsb2FkQ29udHJvbGxlcixcclxuICAgIGJpbmRpbmdzOiBGaWxlVXBsb2FkQmluZGluZ3MsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3VwbG9hZC9GaWxlVXBsb2FkLmh0bWwnXHJcbn07XHJcblxyXG5cclxuYW5ndWxhclxyXG4gICAgLm1vZHVsZSgncGlwRmlsZXMuRmlsZVVwbG9hZCcsIFtdKVxyXG4gICAgLmNvbXBvbmVudCgncGlwRmlsZVVwbG9hZCcsIGZpbGVVcGxvYWREaXJlY3RpdmUpXHJcbiIsIihmdW5jdGlvbihtb2R1bGUpIHtcbnRyeSB7XG4gIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdwaXBGaWxlcy5UZW1wbGF0ZXMnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3BpcEZpbGVzLlRlbXBsYXRlcycsIFtdKTtcbn1cbm1vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnZmFpbC9GaWxlRmFpbC5odG1sJyxcbiAgICAnPGRpdiBjbGFzcz1cInBpcC1maWxlcyBwaXAtcHJvZ3Jlc3MtZmlsZXNcIj5cXG4nICtcbiAgICAnICA8ZGl2IGNsYXNzPVwicGlwLWJvZHkgcGlwLXNjcm9sbCBwaXAtcHJvZ3Jlc3MtYm9keVwiPiBcXG4nICtcbiAgICAnICAgIDxkaXYgY2xhc3M9XCJsYXlvdXQtcm93XCI+XFxuJyArXG4gICAgJyAgICAgICAgPGRpdiBjbGFzcz1cInBpcC1wcm9ncmVzcy1pY29uIGNvbG9yLWJhZGdlLWJnXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgIDxtZC1pY29uIG1kLXN2Zy1pY29uPVwiaWNvbnM6Y3Jvc3NcIj48L21kLWljb24+XFxuJyArXG4gICAgJyAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICAgICAgPGRpdiBjbGFzcz1cInBpcC1wcm9ncmVzcy1jb250ZW50XCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwicGlwLXRpdGxlXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICBVcGxvYWRpbmcge3skY3RybC50eXBlfX0gZmFpbGVkIHdpdGggZXJyb3JzIVxcbicgK1xuICAgICcgICAgICAgICAgICA8L2gzPlxcbicgK1xuICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sb3Itc2Vjb25kYXJ5LXRleHQgcGlwLXN1YnRpdGxlXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICB7eyRjdHJsLm5hbWV9fVxcbicgK1xuICAgICcgICAgICAgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yLWVycm9yIHBpcC1lcnJvclwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgIHt7JGN0cmwuZXJyb3J9fVxcbicgK1xuICAgICcgICAgICAgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnICA8L2Rpdj5cXG4nICtcbiAgICAnICA8ZGl2IGNsYXNzPVwicGlwLWZvb3RlciBsYXlvdXQtcm93IGxheW91dC1hbGlnbi1lbmQtY2VudGVyXCIgbmctaWY9XCIkY3RybC5idXR0b25zICYmICRjdHJsLmJ1dHRvbnMubGVuZ3RoID4gMFwiPlxcbicgK1xuICAgICcgICAgICAgIDxkaXY+XFxuJyArXG4gICAgJyAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWFjY2VudFwiIFxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgIG5nLXJlcGVhdD1cImZhaWwgaW4gJGN0cmwuYnV0dG9uc1wiIG5nLWNsaWNrPVwiZmFpbC5jbGljaygpXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICB7ezo6ZmFpbC50aXRsZX19XFxuJyArXG4gICAgJyAgICAgICAgICAgIDwvbWQtYnV0dG9uPiBcXG4nICtcbiAgICAnICAgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvZGl2PiAgXFxuJyArXG4gICAgJzwvZGl2PicpO1xufV0pO1xufSkoKTtcblxuKGZ1bmN0aW9uKG1vZHVsZSkge1xudHJ5IHtcbiAgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3BpcEZpbGVzLlRlbXBsYXRlcycpO1xufSBjYXRjaCAoZSkge1xuICBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgncGlwRmlsZXMuVGVtcGxhdGVzJywgW10pO1xufVxubW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCdzdWNjZXNzL0ZpbGVTdWNjZXNzLmh0bWwnLFxuICAgICc8ZGl2IGNsYXNzPVwicGlwLWZpbGVzIHBpcC1wcm9ncmVzcy1maWxlc1wiPlxcbicgK1xuICAgICcgIDxkaXYgY2xhc3M9XCJwaXAtYm9keSBwaXAtc2Nyb2xsIHBpcC1wcm9ncmVzcy1ib2R5XCI+IFxcbicgK1xuICAgICcgICAgPGRpdiBjbGFzcz1cImxheW91dC1yb3dcIj5cXG4nICtcbiAgICAnICAgICAgICA8ZGl2IGNsYXNzPVwicGlwLXByb2dyZXNzLWljb24gYmItZ3JlZW5cIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgPG1kLWljb24gbWQtc3ZnLWljb249XCJpY29uczpjaGVja1wiPjwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgICAgICA8ZGl2IGNsYXNzPVwicGlwLXByb2dyZXNzLWNvbnRlbnRcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgPGgzIGNsYXNzPVwicGlwLXRpdGxlXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICBVcGxvYWRlZCB7ezo6dm0udHlwZX19IHN1Y2Nlc3NmdWxseSFcXG4nICtcbiAgICAnICAgICAgICAgICAgPC9oMz5cXG4nICtcbiAgICAnICAgICAgICBcXG4nICtcbiAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yLXNlY29uZGFyeS10ZXh0IHBpcC1zdWJ0aXRsZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAge3t2bS5uYW1lfX1cXG4nICtcbiAgICAnICAgICAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnICA8L2Rpdj5cXG4nICtcbiAgICAnICA8ZGl2IGNsYXNzPVwicGlwLWZvb3RlciBsYXlvdXQtcm93IGxheW91dC1hbGlnbi1lbmQtY2VudGVyXCIgbmctaWY9XCJ2bS5idXR0b25zICYmIHZtLmJ1dHRvbnMubGVuZ3RoID4gMFwiPlxcbicgK1xuICAgICcgICAgICAgIDxkaXY+XFxuJyArXG4gICAgJyAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWFjY2VudFwiIFxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgIG5nLXJlcGVhdD1cInN0YXJ0IGluIHZtLmJ1dHRvbnNcIiBuZy1jbGljaz1cInN0YXJ0LmNsaWNrKClcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIHt7c3RhcnQudGl0bGV9fVxcbicgK1xuICAgICcgICAgICAgICAgICA8L21kLWJ1dHRvbj4gXFxuJyArXG4gICAgJyAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICA8L2Rpdj4gIFxcbicgK1xuICAgICc8L2Rpdj4nKTtcbn1dKTtcbn0pKCk7XG5cbihmdW5jdGlvbihtb2R1bGUpIHtcbnRyeSB7XG4gIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdwaXBGaWxlcy5UZW1wbGF0ZXMnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3BpcEZpbGVzLlRlbXBsYXRlcycsIFtdKTtcbn1cbm1vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnc2VsZWN0L0ZpbGVTZWxlY3QuaHRtbCcsXG4gICAgJzxkaXYgY2xhc3M9XCJwaXAtZmlsZS1zZWxlY3RcIj5cXG4nICtcbiAgICAnICAgICAgPGZvcm0gaWQ9XCJpbnBfZm9ybVwiIGNsYXNzPVwicGlwLWhpZGRlbi1mb3JtXCI+XFxuJyArXG4gICAgJyAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgZmlsZS1tb2RlbD1cIiRjdHJsLmxvY2FsRmlsZVwiIGlkPVwiaW5wX2ZpbGVcIiBuZy1tb2RlbD1cIiRjdHJsLmxvY2FsRmlsZVwiPjwvaW5wdXQ+XFxuJyArXG4gICAgJyAgICAgIDwvZm9ybT5cXG4nICtcbiAgICAnICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtcmFpc2VkIG1kLWFjY2VudCBwaXAtYnV0dG9uXCJcXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgIG5nLWNsaWNrPVwiJGN0cmwub25VcGxvYWRCdXR0b25DbGljaygpXCIgXFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICBuZy1pZj1cIiEkY3RybC5sb2NhbEZpbGVcIj5DaG9vc2UgRmlsZTwvbWQtYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgIDxkaXYgbmctaWY9XCIkY3RybC5sb2NhbEZpbGUubmFtZVwiIGNsYXNzPVwicGlwLWZpbGUgbGF5b3V0LXJvdyBsYXlvdXQtYWxpZ24tc3RhcnQtY2VudGVyXCI+XFxuJyArXG4gICAgJyAgICAgICAgICA8bWQtaWNvbiBtZC1zdmctaWNvbj1cImljb25zOmRvY3VtZW50XCIgY2xhc3M9XCJwaXAtaWNvblwiPjwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWJvZHkyIHRleHQtb3ZlcmZsb3dcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICB7eyRjdHJsLmxvY2FsRmlsZS5uYW1lfX1cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgPGRpdiBuZy1pZj1cIiRjdHJsLmxvY2FsRmlsZS5zaXplXCIgY2xhc3M9XCJjb2xvci1zZWNvbmRhcnktdGV4dFwiPnt7JGN0cmwubG9jYWxGaWxlLnNpemV9fTwvZGl2PlxcbicgK1xuICAgICcgICAgICAgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgICAgICAgICAgPG1kLWJ1dHRvbiBuZy1jbGljaz1cIiRjdHJsLm9uRGVsZXRlQnV0dG9uQ2xpY2soKVwiIGNsYXNzPVwibWQtaWNvbi1idXR0b25cIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICA8bWQtaWNvbiBtZC1zdmctaWNvbj1cImljb25zOmNyb3NzLWNpcmNsZVwiPjwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgPC9tZC1idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgJzwvZGl2PicpO1xufV0pO1xufSkoKTtcblxuKGZ1bmN0aW9uKG1vZHVsZSkge1xudHJ5IHtcbiAgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3BpcEZpbGVzLlRlbXBsYXRlcycpO1xufSBjYXRjaCAoZSkge1xuICBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgncGlwRmlsZXMuVGVtcGxhdGVzJywgW10pO1xufVxubW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCdzdGFydC9GaWxlU3RhcnQuaHRtbCcsXG4gICAgJzxkaXYgY2xhc3M9XCJwaXAtZmlsZXMgcGlwLXByb2dyZXNzLWZpbGVzXCI+XFxuJyArXG4gICAgJyAgPGRpdiBjbGFzcz1cInBpcC1ib2R5IHBpcC1zY3JvbGwgcGlwLXByb2dyZXNzLWJvZHlcIj4gXFxuJyArXG4gICAgJyAgICA8ZGl2IGNsYXNzPVwibGF5b3V0LXJvd1wiPlxcbicgK1xuICAgICcgICAgICAgIDxkaXYgY2xhc3M9XCJwaXAtcHJvZ3Jlc3MtaWNvbiBiYi1vcmFuZ2VcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgPG1kLWljb24gbWQtc3ZnLWljb249XCJpY29uczpwbGF5XCI+PC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgICAgIDxkaXYgY2xhc3M9XCJwaXAtcHJvZ3Jlc3MtY29udGVudFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICA8aDMgY2xhc3M9XCJwaXAtdGl0bGVcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIFVwbG9hZGluZyB7ezo6JGN0cmwudHlwZX19XFxuJyArXG4gICAgJyAgICAgICAgICAgIDwvaDM+XFxuJyArXG4gICAgJyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xvci1zZWNvbmRhcnktdGV4dCBwaXAtc3VidGl0bGVcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIHt7JGN0cmwubmFtZX19XFxuJyArXG4gICAgJyAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgICAgICAgICA8ZGl2PlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgPG1kLXByb2dyZXNzLWxpbmVhciBtZC1tb2RlPVwiZGV0ZXJtaW5hdGVcIiBcXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kLWFjY2VudFwiIFxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3skY3RybC5wcm9ncmVzc319XCIgXFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgbmctaWY9XCIkY3RybC5wcm9ncmVzcyA8IDEwMFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgPC9tZC1wcm9ncmVzcy1saW5lYXI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICA8bWQtcHJvZ3Jlc3MtbGluZWFyIG1kLW1vZGU9XCJpbmRldGVybWluYXRlXCIgXFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZC1hY2NlbnRcIiBcXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICBuZy1pZj1cIiRjdHJsLnByb2dyZXNzID09IDEwMFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgPC9tZC1wcm9ncmVzcy1saW5lYXI+XFxuJyArXG4gICAgJyAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgPC9kaXY+XFxuJyArXG4gICAgJyAgPGRpdiBjbGFzcz1cInBpcC1mb290ZXIgbGF5b3V0LXJvdyBsYXlvdXQtYWxpZ24tZW5kLWNlbnRlclwiIG5nLWlmPVwiJGN0cmwuYnV0dG9uc1wiPlxcbicgK1xuICAgICcgICAgICAgIDxkaXY+XFxuJyArXG4gICAgJyAgICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1hY2NlbnRcIiBcXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICBuZy1yZXBlYXQ9XCJzdGFydCBpbiAkY3RybC5idXR0b25zXCIgbmctY2xpY2s9XCJzdGFydC5jbGljaygpXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICB7e3N0YXJ0LnRpdGxlfX1cXG4nICtcbiAgICAnICAgICAgICAgICAgPC9tZC1idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICA8L2Rpdj4gIFxcbicgK1xuICAgICc8L2Rpdj4nKTtcbn1dKTtcbn0pKCk7XG5cbihmdW5jdGlvbihtb2R1bGUpIHtcbnRyeSB7XG4gIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdwaXBGaWxlcy5UZW1wbGF0ZXMnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3BpcEZpbGVzLlRlbXBsYXRlcycsIFtdKTtcbn1cbm1vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgndXBsb2FkL0ZpbGVVcGxvYWQuaHRtbCcsXG4gICAgJzxkaXY+XFxuJyArXG4gICAgJyAgICA8cGlwLXN1Y2Nlcy11cGxvYWQgXFxuJyArXG4gICAgJyAgICAgICAgICAgIG5nLWlmPVwiJGN0cmwuc3RhdGUgPT0gMSAmJiAoISRjdHJsLmJ1dHRvbnMgfHwgJGN0cmwudXBsb2FkQnV0dG9ucylcIlxcbicgK1xuICAgICcgICAgICAgICAgICBwaXAtbmFtZT1cIiRjdHJsLm5hbWVcIiBcXG4nICtcbiAgICAnICAgICAgICAgICAgcGlwLXR5cGU9XCIkY3RybC50eXBlXCIgXFxuJyArXG4gICAgJyAgICAgICAgICAgIHBpcC1idXR0b25zPVwiJGN0cmwuYnV0dG9uc1wiPjwvcGlwLXN1Y2Nlcy11cGxvYWQ+XFxuJyArXG4gICAgJyAgICA8cGlwLWZhaWwtdXBsb2FkIFxcbicgK1xuICAgICcgICAgICAgICAgICBuZy1pZj1cIiRjdHJsLnN0YXRlID09IDJcIlxcbicgK1xuICAgICcgICAgICAgICAgICBwaXAtbmFtZT1cIiRjdHJsLm5hbWVcIiBcXG4nICtcbiAgICAnICAgICAgICAgICAgcGlwLXR5cGU9XCIkY3RybC50eXBlXCIgXFxuJyArXG4gICAgJyAgICAgICAgICAgIHBpcC1lcnJvcj1cIiRjdHJsLmVycm9yXCJcXG4nICtcbiAgICAnICAgICAgICAgICAgcGlwLWJ1dHRvbnM9XCIkY3RybC5mYWlsQnV0dG9uc1wiPjwvcGlwLWZhaWwtdXBsb2FkPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgIDxwaXAtc3RhcnQtdXBsb2FkIFxcbicgK1xuICAgICcgICAgICAgICAgICBuZy1pZj1cIiRjdHJsLnN0YXRlID09IDBcIlxcbicgK1xuICAgICcgICAgICAgICAgICBwaXAtbmFtZT1cIiRjdHJsLm5hbWVcIiBcXG4nICtcbiAgICAnICAgICAgICAgICAgcGlwLXR5cGU9XCIkY3RybC50eXBlXCIgXFxuJyArXG4gICAgJyAgICAgICAgICAgIHBpcC1wcm9ncmVzcz1cIiRjdHJsLnByb2dyZXNzXCJcXG4nICtcbiAgICAnICAgICAgICAgICAgcGlwLWJ1dHRvbnM9XCIkY3RybC5zdGFydEJ1dHRvbnNcIj48L3BpcC1zdGFydC11cGxvYWQ+XFxuJyArXG4gICAgJzwvZGl2PicpO1xufV0pO1xufSkoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGlwLXdlYnVpLWZpbGVzLWh0bWwuanMubWFwXG4iXX0=