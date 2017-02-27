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
    '        ng-if="vm.state == \'upload\'"\n' +
    '        pip-name="vm.name" \n' +
    '        pip-type="vm.type" \n' +
    '        pip-buttons="vm.buttons"></pip-succes-upload>\n' +
    '    <pip-fail-upload \n' +
    '        ng-if="vm.state == \'fail\'"\n' +
    '        pip-name="vm.name" \n' +
    '        pip-type="vm.type" \n' +
    '        pip-error="vm.error"\n' +
    '        pip-buttons="vm.failButtons"></pip-fail-upload>\n' +
    '\n' +
    '<div class="pip-files pip-progress-files" ng-if="vm.state == \'start\'" >\n' +
    '  <div class="pip-body pip-scroll pip-progress-body"> \n' +
    '    <div class="layout-row">\n' +
    '        <div class="pip-progress-icon"\n' +
    '         ng-class="{\'color-badge-bg\': vm.state == \'fail\',\n' +
    '                    \'bb-orange\': vm.state == \'start\' }">\n' +
    '            <md-icon md-svg-icon="icons:check" ng-if="vm.state == \'upload\'"></md-icon>\n' +
    '            <md-icon md-svg-icon="icons:play" ng-if="vm.state == \'start\'"></md-icon>\n' +
    '            <md-icon md-svg-icon="icons:cross" ng-if="vm.state == \'fail\'"></md-icon>\n' +
    '        </div>\n' +
    '        <div class="pip-progress-content">\n' +
    '            <h3 class="pip-title" ng-if="vm.state == \'start\'">\n' +
    '                Uploading {{::vm.type}}\n' +
    '            </h3>\n' +
    '            <div class="color-secondary-text pip-subtitle">\n' +
    '                {{vm.name}}\n' +
    '            </div>\n' +
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
    '            <md-button class="md-accent" ng-if="vm.state == \'start\'"\n' +
    '                       ng-repeat="start in vm.startButtons" ng-click="start.click()">\n' +
    '                {{start.title}}\n' +
    '            </md-button>\n' +
    '\n' +
    '            <md-button class="md-accent" \n' +
    '                       ng-click="vm.onCancel()" \n' +
    '                       ng-show="!vm.state">\n' +
    '                Cancel\n' +
    '            </md-button>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>  \n' +
    '</div>\n' +
    '</div>');
}]);
})();

//# sourceMappingURL=pip-webui-files-html.js.map
