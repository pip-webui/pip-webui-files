/**
 * @file Optional filter to translate string resources
 * @copyright Digital Living Software Corp. 2014-2016
 */
 
/* global angular */

(() => {
    'use strict';
    function filerTranslate($injector: angular.auto.IInjectorService) {
        let pipTranslate: any = $injector.has('pipTranslate') 
            ? $injector.get('pipTranslate') : null;

        return (key: string) => {
            return pipTranslate  ? pipTranslate.translate(key) || key : key;
        }
    }

    angular.module('pipFiles.Translate', [])
        .filter('translate', filerTranslate);

})();
