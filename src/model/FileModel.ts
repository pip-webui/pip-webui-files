{
    function fileModelLink(scope, element, attrs, $parse) {
        let model = $parse(attrs.fileModel);
        let modelSetter = model.assign;
                
        element.bind('change', () => {
            scope.$apply(() => {
                modelSetter(scope, element[0].files[0]);
            });
        });
    }

    function fileModelDirective($parse: ng.IParseProvider) {
        "ngInject";

        return {
            restrict: 'A',
            link: (scope: ng.IScope, element, attrs: ng.IAttributes) => { 
                fileModelLink(scope, element, attrs, $parse) 
            }
        };
    }

    angular
        .module('pipFiles.Model', [])
        .directive('fileModel', fileModelDirective)
}