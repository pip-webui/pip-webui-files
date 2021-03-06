(function(module) {
try {
  module = angular.module('pipFiles.Templates');
} catch (e) {
  module = angular.module('pipFiles.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('file_fail/FileFail.html',
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
  $templateCache.put('file_select/FileSelect.html',
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
  $templateCache.put('file_start/FileStart.html',
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
  $templateCache.put('file_success/FileSuccess.html',
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
  $templateCache.put('file_upload/FileUpload.html',
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

//# sourceMappingURL=pip-webui-files-html.js.map
