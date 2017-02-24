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
  $templateCache.put('upload/FileUpload.html',
    '<div class="pip-files pip-progress-files">\n' +
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
    '</div>');
}]);
})();

//# sourceMappingURL=pip-webui-files-html.js.map
