(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.pip || (g.pip = {})).themes = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
configureBootBarnCoolTheme.$inject = ['$mdThemingProvider'];
function configureBootBarnCoolTheme($mdThemingProvider) {
    var coolBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
        'A100': 'rgba(250, 250, 250, 1)',
        'A200': 'rgba(69, 90, 100, 1)'
    });
    $mdThemingProvider.definePalette('bootbarn-cool-background', coolBackgroundPalette);
    var coolPrimaryPalette = $mdThemingProvider.extendPalette('grey', {
        '300': 'rgba(69, 90, 100, .54)',
        '500': 'rgba(69, 90, 100, 1)',
        'contrastLightColors': ['500', '300']
    });
    $mdThemingProvider.definePalette('bootbarn-cool-primary', coolPrimaryPalette);
    var coolAccentPalette = $mdThemingProvider.extendPalette('green', {
        'A700': 'rgba(76, 175, 80, 1)',
        'contrastLightColors': ['A700']
    });
    $mdThemingProvider.definePalette('bootbarn-cool-accent', coolAccentPalette);
    $mdThemingProvider.theme('bootbarn-cool')
        .primaryPalette('bootbarn-cool-primary', {
        'default': '500',
        'hue-1': '300'
    })
        .backgroundPalette('bootbarn-cool-background', {
        'default': '50',
        'hue-1': 'A200',
        'hue-2': 'A700'
    })
        .warnPalette('red', {
        'default': 'A200'
    })
        .accentPalette('bootbarn-cool-accent', {
        'default': 'A700'
    });
    $mdThemingProvider.alwaysWatchTheme(true);
}
angular
    .module('pipTheme.BootBarn.Cool', ['ngMaterial'])
    .config(configureBootBarnCoolTheme);
},{}],2:[function(require,module,exports){
'use strict';
configureBootBarnMonochromeTheme.$inject = ['$mdThemingProvider'];
function configureBootBarnMonochromeTheme($mdThemingProvider) {
    var monochromeBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
        'A100': 'rgba(250, 250, 250, 1)',
        'A200': 'rgba(38, 50, 56, 1)'
    });
    $mdThemingProvider.definePalette('bootbarn-monochrome-background', monochromeBackgroundPalette);
    var monochromePrimaryPalette = $mdThemingProvider.extendPalette('grey', {
        '300': 'rgba(38, 50, 56, .54)',
        '500': 'rgba(38, 50, 56, 1)',
        'contrastLightColors': ['500', '300']
    });
    $mdThemingProvider.definePalette('bootbarn-monochrome-primary', monochromePrimaryPalette);
    var monochromeAccentPalette = $mdThemingProvider.extendPalette('green', {
        'A700': 'rgba(76, 175, 80, 1)',
        'contrastLightColors': ['A700']
    });
    $mdThemingProvider.definePalette('bootbarn-monochrome-accent', monochromeAccentPalette);
    $mdThemingProvider.theme('bootbarn-monochrome')
        .primaryPalette('bootbarn-monochrome-primary', {
        'default': '500',
        'hue-1': '300'
    })
        .backgroundPalette('bootbarn-monochrome-background', {
        'default': '50',
        'hue-1': 'A200',
        'hue-2': 'A700'
    })
        .warnPalette('red', {
        'default': 'A200'
    })
        .accentPalette('bootbarn-monochrome-accent', {
        'default': 'A700'
    });
    $mdThemingProvider.alwaysWatchTheme(true);
}
angular
    .module('pipTheme.BootBarn.Monochrome', ['ngMaterial'])
    .config(configureBootBarnMonochromeTheme);
},{}],3:[function(require,module,exports){
'use strict';
configureBootBarnWarmTheme.$inject = ['$mdThemingProvider'];
function configureBootBarnWarmTheme($mdThemingProvider) {
    $mdThemingProvider.alwaysWatchTheme(true);
    var warmBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
        'A100': 'rgba(250, 250, 250, 1)',
        'A200': 'rgba(177, 55, 34, 1)'
    });
    $mdThemingProvider.definePalette('bootbarn-warm-background', warmBackgroundPalette);
    var warmPrimaryPalette = $mdThemingProvider.extendPalette('brown', {
        '300': 'rgba(177, 55, 34, .54)',
        '500': 'rgba(177, 55, 34, 1)',
        'contrastLightColors': ['500', '300']
    });
    $mdThemingProvider.definePalette('bootbarn-warm-primary', warmPrimaryPalette);
    var warmAccentPalette = $mdThemingProvider.extendPalette('amber', {
        'A700': 'rgba(127, 148, 92, 1)',
        'contrastLightColors': ['A700']
    });
    $mdThemingProvider.definePalette('bootbarn-warm-accent', warmAccentPalette);
    var warmErrorPalette = $mdThemingProvider.extendPalette('red', {
        'A200': 'rgba(255, 82, 82, 1)',
        'contrastLightColors': ['A200']
    });
    $mdThemingProvider.definePalette('bootbarn-warm-error', warmErrorPalette);
    $mdThemingProvider.theme('bootbarn-warm')
        .primaryPalette('bootbarn-warm-primary', {
        'default': '500',
        'hue-1': '300'
    })
        .backgroundPalette('bootbarn-warm-background', {
        'default': '50',
        'hue-1': 'A200',
        'hue-2': 'A700'
    })
        .warnPalette('bootbarn-warm-error', {
        'default': 'A200'
    })
        .accentPalette('bootbarn-warm-accent', {
        'default': 'A700'
    });
}
angular.module('pipTheme.BootBarn.Warm', ['ngMaterial'])
    .config(configureBootBarnWarmTheme);
},{}],4:[function(require,module,exports){
'use strict';
require("./BootBarnCoolTheme");
require("./BootBarnWarmTheme");
require("./BootBarnMonochromeTheme");
angular.module('pipTheme.BootBarn', [
    'ngMaterial',
    'pipTheme.BootBarn.Warm',
    'pipTheme.BootBarn.Cool',
    'pipTheme.BootBarn.Monochrome',
]);
},{"./BootBarnCoolTheme":1,"./BootBarnMonochromeTheme":2,"./BootBarnWarmTheme":3}],5:[function(require,module,exports){
'use strict';
initTheme.$inject = ['pipTheme'];
exports.ThemeRootVar = "$theme";
exports.ThemeChangedEvent = "pipThemeChanged";
exports.ThemeResetPage = "pipResetPage";
var ThemeConfig = (function () {
    function ThemeConfig() {
    }
    return ThemeConfig;
}());
var ThemeService = (function () {
    function ThemeService(config, setRootVar, persist, $rootScope, $log, $window, $mdTheming) {
        this._currentTheme = null;
        this._setRootVar = setRootVar;
        this._persist = persist;
        this._config = config;
        this._rootScope = $rootScope;
        this._log = $log;
        this._window = $window;
        this._theming = $mdTheming;
        if (this._persist && this._window.localStorage && this._config.theme == "default")
            this._config.theme = this._window.localStorage.getItem('theme') || this._config.theme;
        this._log.debug("Set theme to " + this._config.theme);
        $('body').attr('md-theme', '{{' + exports.ThemeRootVar + '}}');
        this.save();
    }
    ThemeService.prototype.save = function () {
        var body = $('body');
        var newTheme = this._config.theme;
        body.addClass(newTheme);
        if (this._currentTheme != null && this._currentTheme != newTheme)
            body.removeClass(this._currentTheme);
        this._currentTheme = newTheme;
        if (this._setRootVar)
            this._rootScope[exports.ThemeRootVar] = this._config.theme;
        if (this._persist && this._window.localStorage != null)
            this._window.localStorage.setItem('theme', this._config.theme);
    };
    Object.defineProperty(ThemeService.prototype, "theme", {
        get: function () {
            return this._config.theme;
        },
        set: function (value) {
            if (value != this._config.theme) {
                if (!(value in this._theming.THEMES))
                    throw new Error('Theme ' + value + ' is not defined. Please, register it first with $mdThemingProvider');
                this._config.theme = value;
                this._log.debug("Changing theme to " + value);
                this.save();
                this._rootScope.$emit(exports.ThemeChangedEvent, value);
                this._rootScope.$emit(exports.ThemeResetPage);
            }
        },
        enumerable: true,
        configurable: true
    });
    ThemeService.prototype.use = function (theme) {
        if (theme != null)
            this.theme = theme;
        return this.theme;
    };
    return ThemeService;
}());
var ThemeProvider = (function () {
    function ThemeProvider() {
        this._config = new ThemeConfig();
        this._setRootVar = true;
        this._persist = true;
        this._config.theme = "default";
    }
    Object.defineProperty(ThemeProvider.prototype, "setRootVar", {
        get: function () {
            return this._setRootVar;
        },
        set: function (value) {
            this._setRootVar = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThemeProvider.prototype, "persist", {
        get: function () {
            return this._persist;
        },
        set: function (value) {
            this._persist = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThemeProvider.prototype, "theme", {
        get: function () {
            return this._config.theme;
        },
        set: function (value) {
            this._config.theme = value;
        },
        enumerable: true,
        configurable: true
    });
    ThemeProvider.prototype.use = function (theme) {
        if (theme != null)
            this.theme = theme;
        return this.theme;
    };
    ThemeProvider.prototype.$get = ['$rootScope', '$log', '$window', '$mdTheming', function ($rootScope, $log, $window, $mdTheming) {
        "ngInject";
        if (this._service == null)
            this._service = new ThemeService(this._config, this._setRootVar, this._persist, $rootScope, $log, $window, $mdTheming);
        return this._service;
    }];
    return ThemeProvider;
}());
function initTheme(pipTheme) {
    pipTheme.theme;
}
angular
    .module('pipTheme')
    .provider('pipTheme', ThemeProvider)
    .run(initTheme);
},{}],6:[function(require,module,exports){
'use strict';
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
angular.module('pipTheme', ['ngMaterial']);
require("./ThemeService");
__export(require("./ThemeService"));
},{"./ThemeService":5}],7:[function(require,module,exports){
'use strict';
configureDefaultAmberTheme.$inject = ['$mdThemingProvider'];
function configureDefaultAmberTheme($mdThemingProvider) {
    var orangeBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
        'A100': 'rgba(250, 250, 250, 1)',
        'A200': 'rgba(255, 152, 0, 1)'
    });
    $mdThemingProvider.definePalette('orange-background', orangeBackgroundPalette);
    var orangePrimaryPalette = $mdThemingProvider.extendPalette('orange', {
        '800': 'rgba(255, 152, 0, 1)',
        '900': 'rgba(255, 152, 0, .54);'
    });
    $mdThemingProvider.definePalette('orange-primary', orangePrimaryPalette);
    $mdThemingProvider.theme('amber')
        .primaryPalette('orange-primary', {
        'default': '800',
        'hue-1': '900'
    })
        .backgroundPalette('orange-background', {
        'default': '50',
        'hue-1': 'A200',
        'hue-2': 'A700'
    })
        .warnPalette('red', {
        'default': 'A200'
    })
        .accentPalette('orange', {
        'default': '900'
    });
    $mdThemingProvider.alwaysWatchTheme(true);
}
angular
    .module('pipTheme.Amber', ['ngMaterial'])
    .config(configureDefaultAmberTheme);
},{}],8:[function(require,module,exports){
'use strict';
configureDefaultBlueTheme.$inject = ['$mdThemingProvider'];
function configureDefaultBlueTheme($mdThemingProvider) {
    registerBlueTheme('default');
    registerBlueTheme('blue');
    $mdThemingProvider.setDefaultTheme('default');
    $mdThemingProvider.alwaysWatchTheme(true);
    function registerBlueTheme(themeName) {
        var bluePrimaryPalette = $mdThemingProvider.extendPalette('blue', {
            'contrastDefaultColor': 'light',
            'contrastDarkColors': undefined
        });
        $mdThemingProvider.definePalette('blue-primary', bluePrimaryPalette);
        var blueBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
            'A100': 'rgba(250, 250, 250, 1)',
            'A200': 'rgba(33, 150, 243, 1)'
        });
        $mdThemingProvider.definePalette('blue-background', blueBackgroundPalette);
        var blueAccentPalette = $mdThemingProvider.extendPalette('green', {
            '600': 'rgba(0, 200, 83, 1)'
        });
        $mdThemingProvider.definePalette('blue-accent', blueAccentPalette);
        $mdThemingProvider.theme(themeName)
            .primaryPalette('blue-primary', {
            'default': '500',
            'hue-1': '300'
        })
            .backgroundPalette('blue-background', {
            'default': '50',
            'hue-1': 'A200',
            'hue-2': 'A700'
        })
            .warnPalette('red', {
            'default': 'A200'
        })
            .accentPalette('blue-accent', {
            'default': '600'
        });
    }
}
angular
    .module('pipTheme.Blue', ['ngMaterial'])
    .config(configureDefaultBlueTheme);
},{}],9:[function(require,module,exports){
'use strict';
configureDefaultGreenTheme.$inject = ['$mdThemingProvider'];
function configureDefaultGreenTheme($mdThemingProvider) {
    var greenBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
        'A100': 'rgba(250, 250, 250, 1)',
        'A200': 'rgba(76, 175, 80, 1)'
    });
    $mdThemingProvider.definePalette('green-background', greenBackgroundPalette);
    var greenPrimaryPalette = $mdThemingProvider.extendPalette('green', {
        '300': '#9ed4a1',
        'contrastLightColors': ['500', '300']
    });
    $mdThemingProvider.definePalette('green-primary', greenPrimaryPalette);
    var greenAccentPalette = $mdThemingProvider.extendPalette('amber', {
        'contrastLightColors': ['A700']
    });
    $mdThemingProvider.definePalette('green-accent', greenAccentPalette);
    $mdThemingProvider.theme('green')
        .primaryPalette('green-primary', {
        'default': '500',
        'hue-1': '300'
    })
        .backgroundPalette('green-background', {
        'default': '50',
        'hue-1': 'A200',
        'hue-2': 'A700'
    })
        .warnPalette('red', {
        'default': 'A200'
    })
        .accentPalette('green-accent', {
        'default': 'A700'
    });
    $mdThemingProvider.alwaysWatchTheme(true);
}
angular
    .module('pipTheme.Green', ['ngMaterial'])
    .config(configureDefaultGreenTheme);
},{}],10:[function(require,module,exports){
'use strict';
configureDefaultGreyTheme.$inject = ['$mdThemingProvider'];
function configureDefaultGreyTheme($mdThemingProvider) {
    var thirdPartyPalette = $mdThemingProvider.extendPalette('grey', {
        'A100': 'rgba(250, 250, 250, 1)',
        'A200': 'rgba(255, 152, 0, 1)',
        'A400': '#a9b9c0',
        '500': '#607D8B',
        'A700': '#90A4AE',
        'contrastDefaultColor': 'dark',
        'contrastLightColors': ['300', '400', '500', '600', '700', '800', '900', 'A700']
    });
    $mdThemingProvider.definePalette('third-party', thirdPartyPalette);
    $mdThemingProvider.theme('grey')
        .primaryPalette('third-party', {
        'default': '500',
        'hue-1': 'A400'
    })
        .backgroundPalette('third-party', {
        'default': '50',
        'hue-1': '500',
        'hue-2': 'A700'
    })
        .warnPalette('red', {
        'default': 'A200'
    })
        .accentPalette('third-party', {
        'default': 'A700'
    });
    $mdThemingProvider.alwaysWatchTheme(true);
}
angular
    .module('pipTheme.Grey', ['ngMaterial'])
    .config(configureDefaultGreyTheme);
},{}],11:[function(require,module,exports){
'use strict';
configureDefaultNavyTheme.$inject = ['$mdThemingProvider'];
function configureDefaultNavyTheme($mdThemingProvider) {
    var greyPalette = $mdThemingProvider.extendPalette('grey', {
        '700': 'rgba(86, 97, 125, 1)',
        '800': 'rgba(86, 97, 125, .54)',
        'A100': 'rgba(250, 250, 250, 1)',
    });
    $mdThemingProvider.definePalette('grey', greyPalette);
    var tealPalette = $mdThemingProvider.extendPalette('teal', {
        'contrastLightColors': ['500', '600', '700', '800', '900', 'A700']
    });
    $mdThemingProvider.definePalette('teal', tealPalette);
    $mdThemingProvider.theme('navy')
        .primaryPalette('grey', {
        'default': '700',
        'hue-1': '800'
    })
        .backgroundPalette('grey', {
        'default': '50',
        'hue-1': '700',
        'hue-2': 'A700'
    })
        .warnPalette('red', {
        'default': 'A200'
    })
        .accentPalette('teal', {
        'default': 'A700'
    });
    $mdThemingProvider.alwaysWatchTheme(true);
}
angular
    .module('pipTheme.Navy', ['ngMaterial'])
    .config(configureDefaultNavyTheme);
},{}],12:[function(require,module,exports){
'use strict';
configureDefaultOrangeTheme.$inject = ['$mdThemingProvider'];
function configureDefaultOrangeTheme($mdThemingProvider) {
    var RedBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
        'A100': 'rgba(250, 250, 250, 1)',
        'A200': 'rgba(255, 112, 67, 1)',
        'contrastLightColors': ['600', '700', '800', '900', 'A200']
    });
    $mdThemingProvider.definePalette('red-background', RedBackgroundPalette);
    var RedPrimaryPalette = $mdThemingProvider.extendPalette('orange', {
        '800': 'rgba(255, 112, 67, 1)',
        '900': 'rgba(255, 152, 67, .54)',
        'A100': 'rgba(255, 171, 64, 1)',
        'contrastLightColors': ['800', '900', 'A100']
    });
    $mdThemingProvider.definePalette('red-primary', RedPrimaryPalette);
    $mdThemingProvider.theme('orange')
        .primaryPalette('red-primary', {
        'default': '800',
        'hue-1': '900'
    })
        .backgroundPalette('red-background', {
        'default': '50',
        'hue-1': 'A200',
        'hue-2': 'A700'
    })
        .warnPalette('red', {
        'default': 'A200'
    })
        .accentPalette('red-primary', {
        'default': 'A100'
    });
    $mdThemingProvider.alwaysWatchTheme(true);
}
angular
    .module('pipTheme.Orange', ['ngMaterial'])
    .config(configureDefaultOrangeTheme);
},{}],13:[function(require,module,exports){
'use strict';
configureDefaultPinkTheme.$inject = ['$mdThemingProvider'];
function configureDefaultPinkTheme($mdThemingProvider) {
    var PinkBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
        'A100': 'rgba(250, 250, 250, 1)',
        'A200': 'rgba(188, 86, 121, 1)',
        'contrastDefaultColor': 'dark',
        'contrastLightColors': ['A200', 'A700']
    });
    $mdThemingProvider.definePalette('pink-background', PinkBackgroundPalette);
    var PinkPrimaryPalette = $mdThemingProvider.extendPalette('pink', {
        '600': 'rgba(255, 128, 171, 1)',
        '700': 'rgba(188, 86, 121, .54)',
        '900': 'rgba(188, 86, 121, 1)',
        'contrastDefaultColor': 'light'
    });
    $mdThemingProvider.definePalette('pink-primary', PinkPrimaryPalette);
    $mdThemingProvider.theme('pink')
        .primaryPalette('pink-primary', {
        'default': '900',
        'hue-1': '700'
    })
        .backgroundPalette('pink-background', {
        'default': '50',
        'hue-1': 'A200',
        'hue-2': 'A700'
    })
        .warnPalette('red', {
        'default': 'A200'
    })
        .accentPalette('pink-primary', {
        'default': '600'
    });
    $mdThemingProvider.alwaysWatchTheme(true);
}
angular
    .module('pipTheme.Pink', ['ngMaterial'])
    .config(configureDefaultPinkTheme);
},{}],14:[function(require,module,exports){
'use strict';
configureDefaultTheme.$inject = ['$mdThemingProvider'];
require("./DefaultBlueTheme");
require("./DefaultPinkTheme");
require("./DefaultAmberTheme");
require("./DefaultOrangeTheme");
require("./DefaultGreenTheme");
require("./DefaultNavyTheme");
require("./DefaultGreyTheme");
angular
    .module('pipTheme.Default', [
    'ngMaterial',
    'pipTheme.Blue',
    'pipTheme.Pink',
    'pipTheme.Amber',
    'pipTheme.Orange',
    'pipTheme.Green',
    'pipTheme.Navy',
    'pipTheme.Grey'
])
    .config(configureDefaultTheme);
function configureDefaultTheme($mdThemingProvider) {
    $mdThemingProvider.setDefaultTheme('default');
    $mdThemingProvider.alwaysWatchTheme(true);
}
},{"./DefaultAmberTheme":7,"./DefaultBlueTheme":8,"./DefaultGreenTheme":9,"./DefaultGreyTheme":10,"./DefaultNavyTheme":11,"./DefaultOrangeTheme":12,"./DefaultPinkTheme":13}],15:[function(require,module,exports){
'use strict';
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
require("./common");
require("./default");
require("./bootbarn");
__export(require("./common"));
},{"./bootbarn":4,"./common":6,"./default":14}]},{},[15])(15)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYm9vdGJhcm4vQm9vdEJhcm5Db29sVGhlbWUudHMiLCJzcmMvYm9vdGJhcm4vQm9vdEJhcm5Nb25vY2hyb21lVGhlbWUudHMiLCJzcmMvYm9vdGJhcm4vQm9vdEJhcm5XYXJtVGhlbWUudHMiLCJzcmMvYm9vdGJhcm4vaW5kZXgudHMiLCJzcmMvY29tbW9uL1RoZW1lU2VydmljZS50cyIsInNyYy9jb21tb24vaW5kZXgudHMiLCJzcmMvZGVmYXVsdC9EZWZhdWx0QW1iZXJUaGVtZS50cyIsInNyYy9kZWZhdWx0L0RlZmF1bHRCbHVlVGhlbWUudHMiLCJzcmMvZGVmYXVsdC9EZWZhdWx0R3JlZW5UaGVtZS50cyIsInNyYy9kZWZhdWx0L0RlZmF1bHRHcmV5VGhlbWUudHMiLCJzcmMvZGVmYXVsdC9EZWZhdWx0TmF2eVRoZW1lLnRzIiwic3JjL2RlZmF1bHQvRGVmYXVsdE9yYW5nZVRoZW1lLnRzIiwic3JjL2RlZmF1bHQvRGVmYXVsdFBpbmtUaGVtZS50cyIsInNyYy9kZWZhdWx0L2luZGV4LnRzIiwic3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFBWSxDQUFDO0FBRWIsb0NBQW9DLGtCQUFnRDtJQVdoRixJQUFJLHFCQUFxQixHQUFHLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7UUFDakUsTUFBTSxFQUFFLHdCQUF3QjtRQUNoQyxNQUFNLEVBQUUsc0JBQXNCO0tBQ2pDLENBQUMsQ0FBQztJQUNILGtCQUFrQixDQUFDLGFBQWEsQ0FBQywwQkFBMEIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBRXBGLElBQUksa0JBQWtCLEdBQUcsa0JBQWtCLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtRQUM5RCxLQUFLLEVBQUUsd0JBQXdCO1FBQy9CLEtBQUssRUFBRSxzQkFBc0I7UUFDN0IscUJBQXFCLEVBQUUsQ0FBQyxLQUFL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IGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBjb25maWd1cmVCb290QmFybkNvb2xUaGVtZSgkbWRUaGVtaW5nUHJvdmlkZXI6IG5nLm1hdGVyaWFsLklUaGVtaW5nUHJvdmlkZXIpIHtcclxuICAgIC8vIHBpcFRyYW5zbGF0ZVByb3ZpZGVyLnRyYW5zbGF0aW9ucygnZW4nLCB7XHJcbiAgICAvLyAgICAgVEhFTUU6ICdUaGVtZScsXHJcbiAgICAvLyAgICAgJ2Jvb3RiYXJuLWNvb2wnOiAnQ29vbCdcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIHBpcFRyYW5zbGF0ZVByb3ZpZGVyLnRyYW5zbGF0aW9ucygncnUnLCB7XHJcbiAgICAvLyAgICAgVEhFTUU6ICfQotC10LzQsCcsXHJcbiAgICAvLyAgICAgJ2Jvb3RiYXJuLWNvb2wnOiAnJ1xyXG4gICAgLy8gfSk7XHJcbiAgICBcclxuICAgIGxldCBjb29sQmFja2dyb3VuZFBhbGV0dGUgPSAkbWRUaGVtaW5nUHJvdmlkZXIuZXh0ZW5kUGFsZXR0ZSgnZ3JleScsIHtcclxuICAgICAgICAnQTEwMCc6ICdyZ2JhKDI1MCwgMjUwLCAyNTAsIDEpJyxcclxuICAgICAgICAnQTIwMCc6ICdyZ2JhKDY5LCA5MCwgMTAwLCAxKSdcclxuICAgIH0pO1xyXG4gICAgJG1kVGhlbWluZ1Byb3ZpZGVyLmRlZmluZVBhbGV0dGUoJ2Jvb3RiYXJuLWNvb2wtYmFja2dyb3VuZCcsIGNvb2xCYWNrZ3JvdW5kUGFsZXR0ZSk7XHJcblxyXG4gICAgbGV0IGNvb2xQcmltYXJ5UGFsZXR0ZSA9ICRtZFRoZW1pbmdQcm92aWRlci5leHRlbmRQYWxldHRlKCdncmV5Jywge1xyXG4gICAgICAgICczMDAnOiAncmdiYSg2OSwgOTAsIDEwMCwgLjU0KScsXHJcbiAgICAgICAgJzUwMCc6ICdyZ2JhKDY5LCA5MCwgMTAwLCAxKScsXHJcbiAgICAgICAgJ2NvbnRyYXN0TGlnaHRDb2xvcnMnOiBbJzUwMCcsICczMDAnXVxyXG4gICAgfSk7XHJcbiAgICAkbWRUaGVtaW5nUHJvdmlkZXIuZGVmaW5lUGFsZXR0ZSgnYm9vdGJhcm4tY29vbC1wcmltYXJ5JywgY29vbFByaW1hcnlQYWxldHRlKTtcclxuXHJcblxyXG4gICAgbGV0IGNvb2xBY2NlbnRQYWxldHRlID0gJG1kVGhlbWluZ1Byb3ZpZGVyLmV4dGVuZFBhbGV0dGUoJ2dyZWVuJywge1xyXG4gICAgICAgICdBNzAwJzogJ3JnYmEoNzYsIDE3NSwgODAsIDEpJyxcclxuICAgICAgICAnY29udHJhc3RMaWdodENvbG9ycyc6IFsnQTcwMCddXHJcbiAgICB9KTtcclxuICAgICRtZFRoZW1pbmdQcm92aWRlci5kZWZpbmVQYWxldHRlKCdib290YmFybi1jb29sLWFjY2VudCcsIGNvb2xBY2NlbnRQYWxldHRlKTtcclxuXHJcbiAgICAkbWRUaGVtaW5nUHJvdmlkZXIudGhlbWUoJ2Jvb3RiYXJuLWNvb2wnKVxyXG4gICAgICAgIC5wcmltYXJ5UGFsZXR0ZSgnYm9vdGJhcm4tY29vbC1wcmltYXJ5Jywge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6ICc1MDAnLFxyXG4gICAgICAgICAgICAnaHVlLTEnOiAnMzAwJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmJhY2tncm91bmRQYWxldHRlKCdib290YmFybi1jb29sLWJhY2tncm91bmQnLCB7XHJcbiAgICAgICAgICAgICdkZWZhdWx0JzogJzUwJywgIC8vIGJhY2tncm91bmRcclxuICAgICAgICAgICAgJ2h1ZS0xJzogJ0EyMDAnLCAgLy8gdGlsZXMgZGlhbG9nXHJcbiAgICAgICAgICAgICdodWUtMic6ICdBNzAwJyAgIC8vIGFwcCBiYXJcclxuICAgICAgICB9KVxyXG4gICAgICAgIC53YXJuUGFsZXR0ZSgncmVkJywge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6ICdBMjAwJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmFjY2VudFBhbGV0dGUoJ2Jvb3RiYXJuLWNvb2wtYWNjZW50Jywge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6ICdBNzAwJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICRtZFRoZW1pbmdQcm92aWRlci5hbHdheXNXYXRjaFRoZW1lKHRydWUpO1xyXG59XHJcblxyXG5hbmd1bGFyXHJcbiAgICAubW9kdWxlKCdwaXBUaGVtZS5Cb290QmFybi5Db29sJywgWyAnbmdNYXRlcmlhbCcgXSlcclxuICAgIC5jb25maWcoY29uZmlndXJlQm9vdEJhcm5Db29sVGhlbWUpO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBjb25maWd1cmVCb290QmFybk1vbm9jaHJvbWVUaGVtZSgkbWRUaGVtaW5nUHJvdmlkZXI6IG5nLm1hdGVyaWFsLklUaGVtaW5nUHJvdmlkZXIpIHtcclxuICAgIC8vIHBpcFRyYW5zbGF0ZVByb3ZpZGVyLnRyYW5zbGF0aW9ucygnZW4nLCB7XHJcbiAgICAvLyAgICAgVEhFTUU6ICdUaGVtZScsXHJcbiAgICAvLyAgICAgJ2Jvb3RiYXJuLW1vbm9jaHJvbWUnOiAnTW9ub2Nocm9tZSdcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIHBpcFRyYW5zbGF0ZVByb3ZpZGVyLnRyYW5zbGF0aW9ucygncnUnLCB7XHJcbiAgICAvLyAgICAgVEhFTUU6ICfQotC10LzQsCcsXHJcbiAgICAvLyAgICAgJ2Jvb3RiYXJuLW1vbm9jaHJvbWUnOiAnJ1xyXG4gICAgLy8gfSk7XHJcbiAgICBcclxuICAgIGxldCBtb25vY2hyb21lQmFja2dyb3VuZFBhbGV0dGUgPSAkbWRUaGVtaW5nUHJvdmlkZXIuZXh0ZW5kUGFsZXR0ZSgnZ3JleScsIHtcclxuICAgICAgICAnQTEwMCc6ICdyZ2JhKDI1MCwgMjUwLCAyNTAsIDEpJyxcclxuICAgICAgICAnQTIwMCc6ICdyZ2JhKDM4LCA1MCwgNTYsIDEpJ1xyXG4gICAgfSk7XHJcbiAgICAkbWRUaGVtaW5nUHJvdmlkZXIuZGVmaW5lUGFsZXR0ZSgnYm9vdGJhcm4tbW9ub2Nocm9tZS1iYWNrZ3JvdW5kJywgbW9ub2Nocm9tZUJhY2tncm91bmRQYWxldHRlKTtcclxuXHJcbiAgICBsZXQgbW9ub2Nocm9tZVByaW1hcnlQYWxldHRlID0gJG1kVGhlbWluZ1Byb3ZpZGVyLmV4dGVuZFBhbGV0dGUoJ2dyZXknLCB7XHJcbiAgICAgICAgJzMwMCc6ICdyZ2JhKDM4LCA1MCwgNTYsIC41NCknLFxyXG4gICAgICAgICc1MDAnOiAncmdiYSgzOCwgNTAsIDU2LCAxKScsXHJcbiAgICAgICAgJ2NvbnRyYXN0TGlnaHRDb2xvcnMnOiBbJzUwMCcsICczMDAnXVxyXG4gICAgfSk7XHJcbiAgICAkbWRUaGVtaW5nUHJvdmlkZXIuZGVmaW5lUGFsZXR0ZSgnYm9vdGJhcm4tbW9ub2Nocm9tZS1wcmltYXJ5JywgbW9ub2Nocm9tZVByaW1hcnlQYWxldHRlKTtcclxuXHJcbiAgICBsZXQgbW9ub2Nocm9tZUFjY2VudFBhbGV0dGUgPSAkbWRUaGVtaW5nUHJvdmlkZXIuZXh0ZW5kUGFsZXR0ZSgnZ3JlZW4nLCB7XHJcbiAgICAgICAgJ0E3MDAnOiAncmdiYSg3NiwgMTc1LCA4MCwgMSknLFxyXG4gICAgICAgICdjb250cmFzdExpZ2h0Q29sb3JzJzogWydBNzAwJ11cclxuICAgIH0pO1xyXG4gICAgJG1kVGhlbWluZ1Byb3ZpZGVyLmRlZmluZVBhbGV0dGUoJ2Jvb3RiYXJuLW1vbm9jaHJvbWUtYWNjZW50JywgbW9ub2Nocm9tZUFjY2VudFBhbGV0dGUpO1xyXG5cclxuICAgICRtZFRoZW1pbmdQcm92aWRlci50aGVtZSgnYm9vdGJhcm4tbW9ub2Nocm9tZScpXHJcbiAgICAgICAgLnByaW1hcnlQYWxldHRlKCdib290YmFybi1tb25vY2hyb21lLXByaW1hcnknLCB7XHJcbiAgICAgICAgICAgICdkZWZhdWx0JzogJzUwMCcsXHJcbiAgICAgICAgICAgICdodWUtMSc6ICczMDAnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYmFja2dyb3VuZFBhbGV0dGUoJ2Jvb3RiYXJuLW1vbm9jaHJvbWUtYmFja2dyb3VuZCcsIHtcclxuICAgICAgICAgICAgJ2RlZmF1bHQnOiAnNTAnLCAgLy8gYmFja2dyb3VuZFxyXG4gICAgICAgICAgICAnaHVlLTEnOiAnQTIwMCcsICAvLyB0aWxlcyBkaWFsb2dcclxuICAgICAgICAgICAgJ2h1ZS0yJzogJ0E3MDAnICAgLy8gYXBwIGJhclxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLndhcm5QYWxldHRlKCdyZWQnLCB7XHJcbiAgICAgICAgICAgICdkZWZhdWx0JzogJ0EyMDAnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYWNjZW50UGFsZXR0ZSgnYm9vdGJhcm4tbW9ub2Nocm9tZS1hY2NlbnQnLCB7XHJcbiAgICAgICAgICAgICdkZWZhdWx0JzogJ0E3MDAnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgJG1kVGhlbWluZ1Byb3ZpZGVyLmFsd2F5c1dhdGNoVGhlbWUodHJ1ZSk7XHJcbn1cclxuXHJcbmFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3BpcFRoZW1lLkJvb3RCYXJuLk1vbm9jaHJvbWUnLCBbICduZ01hdGVyaWFsJyBdKVxyXG4gICAgLmNvbmZpZyhjb25maWd1cmVCb290QmFybk1vbm9jaHJvbWVUaGVtZSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGNvbmZpZ3VyZUJvb3RCYXJuV2FybVRoZW1lKCRtZFRoZW1pbmdQcm92aWRlcikge1xyXG4gICAgLy8gcGlwVHJhbnNsYXRlUHJvdmlkZXIudHJhbnNsYXRpb25zKCdlbicsIHtcclxuICAgIC8vICAgICBUSEVNRTogJ1RoZW1lJyxcclxuICAgIC8vICAgICAnYm9vdGJhcm4td2FybSc6ICdXYXJtJ1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gcGlwVHJhbnNsYXRlUHJvdmlkZXIudHJhbnNsYXRpb25zKCdydScsIHtcclxuICAgIC8vICAgICBUSEVNRTogJ9Ci0LXQvNCwJyxcclxuICAgIC8vICAgICAnYm9vdGJhcm4td2FybSc6ICfQmtC+0YDQuNGH0L3QtdCy0LDRjydcclxuICAgIC8vIH0pO1xyXG5cclxuICAgICRtZFRoZW1pbmdQcm92aWRlci5hbHdheXNXYXRjaFRoZW1lKHRydWUpO1xyXG5cclxuICAgIGxldCB3YXJtQmFja2dyb3VuZFBhbGV0dGUgPSAkbWRUaGVtaW5nUHJvdmlkZXIuZXh0ZW5kUGFsZXR0ZSgnZ3JleScsIHtcclxuICAgICAgICAgICAgJ0ExMDAnOiAncmdiYSgyNTAsIDI1MCwgMjUwLCAxKScsXHJcbiAgICAgICAgICAgICdBMjAwJzogJ3JnYmEoMTc3LCA1NSwgMzQsIDEpJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgO1xyXG4gICAgJG1kVGhlbWluZ1Byb3ZpZGVyLmRlZmluZVBhbGV0dGUoJ2Jvb3RiYXJuLXdhcm0tYmFja2dyb3VuZCcsIHdhcm1CYWNrZ3JvdW5kUGFsZXR0ZSk7XHJcblxyXG4gICAgbGV0IHdhcm1QcmltYXJ5UGFsZXR0ZSA9ICRtZFRoZW1pbmdQcm92aWRlci5leHRlbmRQYWxldHRlKCdicm93bicsIHtcclxuICAgICAgICAnMzAwJzogJ3JnYmEoMTc3LCA1NSwgMzQsIC41NCknLFxyXG4gICAgICAgICc1MDAnOiAncmdiYSgxNzcsIDU1LCAzNCwgMSknLFxyXG4gICAgICAgICdjb250cmFzdExpZ2h0Q29sb3JzJzogWyc1MDAnLCAnMzAwJ11cclxuICAgIH0pO1xyXG4gICAgJG1kVGhlbWluZ1Byb3ZpZGVyLmRlZmluZVBhbGV0dGUoJ2Jvb3RiYXJuLXdhcm0tcHJpbWFyeScsIHdhcm1QcmltYXJ5UGFsZXR0ZSk7XHJcblxyXG5cclxuICAgIGxldCB3YXJtQWNjZW50UGFsZXR0ZSA9ICRtZFRoZW1pbmdQcm92aWRlci5leHRlbmRQYWxldHRlKCdhbWJlcicsIHtcclxuICAgICAgICAnQTcwMCc6ICdyZ2JhKDEyNywgMTQ4LCA5MiwgMSknLFxyXG4gICAgICAgICdjb250cmFzdExpZ2h0Q29sb3JzJzogWydBNzAwJ11cclxuICAgIH0pO1xyXG4gICAgJG1kVGhlbWluZ1Byb3ZpZGVyLmRlZmluZVBhbGV0dGUoJ2Jvb3RiYXJuLXdhcm0tYWNjZW50Jywgd2FybUFjY2VudFBhbGV0dGUpO1xyXG5cclxuICAgIGxldCB3YXJtRXJyb3JQYWxldHRlID0gJG1kVGhlbWluZ1Byb3ZpZGVyLmV4dGVuZFBhbGV0dGUoJ3JlZCcsIHtcclxuICAgICAgICAnQTIwMCc6ICdyZ2JhKDI1NSwgODIsIDgyLCAxKScsXHJcbiAgICAgICAgJ2NvbnRyYXN0TGlnaHRDb2xvcnMnOiBbJ0EyMDAnXVxyXG4gICAgfSk7XHJcbiAgICAkbWRUaGVtaW5nUHJvdmlkZXIuZGVmaW5lUGFsZXR0ZSgnYm9vdGJhcm4td2FybS1lcnJvcicsIHdhcm1FcnJvclBhbGV0dGUpO1xyXG5cclxuICAgICRtZFRoZW1pbmdQcm92aWRlci50aGVtZSgnYm9vdGJhcm4td2FybScpXHJcbiAgICAucHJpbWFyeVBhbGV0dGUoJ2Jvb3RiYXJuLXdhcm0tcHJpbWFyeScsIHtcclxuICAgICAgICAnZGVmYXVsdCc6ICc1MDAnLFxyXG4gICAgICAgICdodWUtMSc6ICczMDAnXHJcbiAgICB9KVxyXG4gICAgLmJhY2tncm91bmRQYWxldHRlKCdib290YmFybi13YXJtLWJhY2tncm91bmQnLCB7XHJcbiAgICAgICAgJ2RlZmF1bHQnOiAnNTAnLCAgLy8gYmFja2dyb3VuZFxyXG4gICAgICAgICdodWUtMSc6ICdBMjAwJywgIC8vIHRpbGVzIGRpYWxvZ1xyXG4gICAgICAgICdodWUtMic6ICdBNzAwJyAgIC8vIGFwcCBiYXJcclxuICAgIH0pXHJcbiAgICAud2FyblBhbGV0dGUoJ2Jvb3RiYXJuLXdhcm0tZXJyb3InLCB7XHJcbiAgICAgICAgJ2RlZmF1bHQnOiAnQTIwMCdcclxuICAgIH0pXHJcbiAgICAuYWNjZW50UGFsZXR0ZSgnYm9vdGJhcm4td2FybS1hY2NlbnQnLCB7XHJcbiAgICAgICAgJ2RlZmF1bHQnOiAnQTcwMCdcclxuICAgIH0pO1xyXG59XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgncGlwVGhlbWUuQm9vdEJhcm4uV2FybScsIFsgJ25nTWF0ZXJpYWwnIF0pXHJcbiAgICAuY29uZmlnKGNvbmZpZ3VyZUJvb3RCYXJuV2FybVRoZW1lKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL0Jvb3RCYXJuQ29vbFRoZW1lJztcclxuaW1wb3J0ICcuL0Jvb3RCYXJuV2FybVRoZW1lJztcclxuaW1wb3J0ICcuL0Jvb3RCYXJuTW9ub2Nocm9tZVRoZW1lJztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdwaXBUaGVtZS5Cb290QmFybicsIFtcclxuICAgICduZ01hdGVyaWFsJyxcclxuICAgICdwaXBUaGVtZS5Cb290QmFybi5XYXJtJyxcclxuICAgICdwaXBUaGVtZS5Cb290QmFybi5Db29sJyxcclxuICAgICdwaXBUaGVtZS5Cb290QmFybi5Nb25vY2hyb21lJyxcclxuXSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBsZXQgVGhlbWVSb290VmFyID0gXCIkdGhlbWVcIjtcclxuZXhwb3J0IGxldCBUaGVtZUNoYW5nZWRFdmVudCA9IFwicGlwVGhlbWVDaGFuZ2VkXCI7ICAgIFxyXG5leHBvcnQgbGV0IFRoZW1lUmVzZXRQYWdlID0gXCJwaXBSZXNldFBhZ2VcIjsgICAgXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUaGVtZVNlcnZpY2Uge1xyXG4gICAgdGhlbWU6IHN0cmluZztcclxuICAgIHVzZShsYW5ndWFnZTogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUaGVtZVByb3ZpZGVyIGV4dGVuZHMgSVRoZW1lU2VydmljZSwgbmcuSVNlcnZpY2VQcm92aWRlciB7XHJcbiAgICBzZXRSb290VmFyOiBib29sZWFuO1xyXG4gICAgcGVyc2lzdDogYm9vbGVhbjtcclxufVxyXG5cclxuY2xhc3MgVGhlbWVDb25maWcge1xyXG4gICAgcHVibGljIHRoZW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIFRoZW1lU2VydmljZSBpbXBsZW1lbnRzIElUaGVtZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBUaGVtZUNvbmZpZztcclxuICAgIHByaXZhdGUgX3NldFJvb3RWYXI6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9wZXJzaXN0OiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfcm9vdFNjb3BlOiBuZy5JUm9vdFNjb3BlU2VydmljZTtcclxuICAgIHByaXZhdGUgX2xvZzogbmcuSUxvZ1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIF93aW5kb3c6IG5nLklXaW5kb3dTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBfdGhlbWluZzogYW55O1xyXG4gICAgcHJpdmF0ZSBfY3VycmVudFRoZW1lOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBjb25maWc6IFRoZW1lQ29uZmlnLFxyXG4gICAgICAgIHNldFJvb3RWYXI6IGJvb2xlYW4sXHJcbiAgICAgICAgcGVyc2lzdDogYm9vbGVhbixcclxuICAgICAgICAkcm9vdFNjb3BlOiBuZy5JUm9vdFNjb3BlU2VydmljZSxcclxuICAgICAgICAkbG9nOiBuZy5JTG9nU2VydmljZSxcclxuICAgICAgICAkd2luZG93OiBuZy5JV2luZG93U2VydmljZSxcclxuICAgICAgICAkbWRUaGVtaW5nOiBhbnlcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX3NldFJvb3RWYXIgPSBzZXRSb290VmFyO1xyXG4gICAgICAgIHRoaXMuX3BlcnNpc3QgPSBwZXJzaXN0O1xyXG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLl9yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgICAgIHRoaXMuX2xvZyA9ICRsb2c7XHJcbiAgICAgICAgdGhpcy5fd2luZG93ID0gJHdpbmRvdztcclxuICAgICAgICB0aGlzLl90aGVtaW5nID0gJG1kVGhlbWluZztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3BlcnNpc3QgJiYgdGhpcy5fd2luZG93LmxvY2FsU3RvcmFnZSAmJiB0aGlzLl9jb25maWcudGhlbWUgPT0gXCJkZWZhdWx0XCIpXHJcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy50aGVtZSA9IHRoaXMuX3dpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSB8fCB0aGlzLl9jb25maWcudGhlbWU7XHJcblxyXG4gICAgICAgIHRoaXMuX2xvZy5kZWJ1ZyhcIlNldCB0aGVtZSB0byBcIiArIHRoaXMuX2NvbmZpZy50aGVtZSk7XHJcblxyXG4gICAgICAgIC8vIERlZmluZSB0aGVtZSBmb3IgYW5ndWxhciBtYXRlcmlhbCBcclxuICAgICAgICAkKCdib2R5JykuYXR0cignbWQtdGhlbWUnLCAne3snICsgVGhlbWVSb290VmFyICsgJ319Jyk7XHJcbiAgICAgICAgdGhpcy5zYXZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzYXZlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBib2R5ID0gJCgnYm9keScpO1xyXG4gICAgICAgIGxldCBuZXdUaGVtZSA9IHRoaXMuX2NvbmZpZy50aGVtZTtcclxuXHJcbiAgICAgICAgLy8gU3dpdGNoIG1hdGVyaWFsIHRoZW1lXHJcbiAgICAgICAgLy8gYm9keS5hdHRyKCdtZC10aGVtZScsIG5ld1RoZW1lKTtcclxuXHJcbiAgICAgICAgLy8gQ2hhbmdlIGN1c3RvbSB0aGVtZVxyXG4gICAgICAgIGJvZHkuYWRkQ2xhc3MobmV3VGhlbWUpO1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50VGhlbWUgIT0gbnVsbCAmJiB0aGlzLl9jdXJyZW50VGhlbWUgIT0gbmV3VGhlbWUpXHJcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2xhc3ModGhpcy5fY3VycmVudFRoZW1lKTsgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5fY3VycmVudFRoZW1lID0gbmV3VGhlbWU7XHJcblxyXG4gICAgICAgIC8vIFNldCByb290IHNjb3BlIHZhcmlhYmxlXHJcbiAgICAgICAgaWYgKHRoaXMuX3NldFJvb3RWYXIpXHJcbiAgICAgICAgICAgIHRoaXMuX3Jvb3RTY29wZVtUaGVtZVJvb3RWYXJdID0gdGhpcy5fY29uZmlnLnRoZW1lO1xyXG5cclxuICAgICAgICAvLyBTYXZlIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICBpZiAodGhpcy5fcGVyc2lzdCAmJiB0aGlzLl93aW5kb3cubG9jYWxTdG9yYWdlICE9IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuX3dpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCB0aGlzLl9jb25maWcudGhlbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdGhlbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnLnRoZW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgdGhlbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPSB0aGlzLl9jb25maWcudGhlbWUpIHtcclxuICAgICAgICAgICAgaWYgKCEodmFsdWUgaW4gdGhpcy5fdGhlbWluZy5USEVNRVMpKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVtZSAnICsgdmFsdWUgKyAnIGlzIG5vdCBkZWZpbmVkLiBQbGVhc2UsIHJlZ2lzdGVyIGl0IGZpcnN0IHdpdGggJG1kVGhlbWluZ1Byb3ZpZGVyJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jb25maWcudGhlbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX2xvZy5kZWJ1ZyhcIkNoYW5naW5nIHRoZW1lIHRvIFwiICsgdmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zYXZlKCk7ICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgdGhpcy5fcm9vdFNjb3BlLiRlbWl0KFRoZW1lQ2hhbmdlZEV2ZW50LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jvb3RTY29wZS4kZW1pdChUaGVtZVJlc2V0UGFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1c2UodGhlbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoZW1lICE9IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMudGhlbWUgPSB0aGVtZTtcclxuICAgICAgICByZXR1cm4gdGhpcy50aGVtZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIFRoZW1lUHJvdmlkZXIgaW1wbGVtZW50cyBJVGhlbWVQcm92aWRlciB7XHJcbiAgICBwcml2YXRlIF9jb25maWc6IFRoZW1lQ29uZmlnID0gbmV3IFRoZW1lQ29uZmlnKCk7XHJcbiAgICBwcml2YXRlIF9zZXRSb290VmFyOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX3BlcnNpc3Q6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBfc2VydmljZTogVGhlbWVTZXJ2aWNlO1xyXG4gICAgXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fY29uZmlnLnRoZW1lID0gXCJkZWZhdWx0XCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzZXRSb290VmFyKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXRSb290VmFyOyAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBzZXRSb290VmFyKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0Um9vdFZhciA9ICEhdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBwZXJzaXN0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wZXJzaXN0OyAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBwZXJzaXN0KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fcGVyc2lzdCA9ICEhdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB0aGVtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWcudGhlbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB0aGVtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fY29uZmlnLnRoZW1lID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVzZSh0aGVtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhlbWUgIT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy50aGVtZSA9IHRoZW1lO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRoZW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyAkZ2V0KFxyXG4gICAgICAgICRyb290U2NvcGU6IG5nLklSb290U2NvcGVTZXJ2aWNlLFxyXG4gICAgICAgICRsb2c6IG5nLklMb2dTZXJ2aWNlLCBcclxuICAgICAgICAkd2luZG93OiBuZy5JV2luZG93U2VydmljZSxcclxuICAgICAgICAkbWRUaGVtaW5nOiBhbnlcclxuICAgICk6IGFueSB7XHJcbiAgICAgICAgXCJuZ0luamVjdFwiO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fc2VydmljZSA9PSBudWxsKSBcclxuICAgICAgICAgICAgdGhpcy5fc2VydmljZSA9IG5ldyBUaGVtZVNlcnZpY2UodGhpcy5fY29uZmlnLCB0aGlzLl9zZXRSb290VmFyLCB0aGlzLl9wZXJzaXN0LCAkcm9vdFNjb3BlLCAkbG9nLCAkd2luZG93LCAkbWRUaGVtaW5nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRUaGVtZShwaXBUaGVtZTogSVRoZW1lU2VydmljZSkge1xyXG4gICAgcGlwVGhlbWUudGhlbWU7XHJcbn1cclxuXHJcbmFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3BpcFRoZW1lJylcclxuICAgIC5wcm92aWRlcigncGlwVGhlbWUnLCBUaGVtZVByb3ZpZGVyKVxyXG4gICAgLnJ1bihpbml0VGhlbWUpO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgncGlwVGhlbWUnLCBbJ25nTWF0ZXJpYWwnXSk7XHJcblxyXG5pbXBvcnQgJy4vVGhlbWVTZXJ2aWNlJztcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vVGhlbWVTZXJ2aWNlJztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gY29uZmlndXJlRGVmYXVsdEFtYmVyVGhlbWUoJG1kVGhlbWluZ1Byb3ZpZGVyOiBuZy5tYXRlcmlhbC5JVGhlbWluZ1Byb3ZpZGVyKSB7XHJcbiAgICAvLyBwaXBUcmFuc2xhdGVQcm92aWRlci50cmFuc2xhdGlvbnMoJ2VuJywge1xyXG4gICAgLy8gICAgIFRIRU1FOiAnVGhlbWUnLFxyXG4gICAgLy8gICAgIGFtYmVyOiAnQW1iZXInXHJcbiAgICAvLyB9KTtcclxuICAgIC8vIHBpcFRyYW5zbGF0ZVByb3ZpZGVyLnRyYW5zbGF0aW9ucygncnUnLCB7XHJcbiAgICAvLyAgICAgVEhFTUU6ICfQotC10LzQsCcsXHJcbiAgICAvLyAgICAgYW1iZXI6ICfQr9C90YLQsNGA0L3QsNGPJ1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgbGV0IG9yYW5nZUJhY2tncm91bmRQYWxldHRlID0gJG1kVGhlbWluZ1Byb3ZpZGVyLmV4dGVuZFBhbGV0dGUoJ2dyZXknLCB7XHJcbiAgICAgICAgJ0ExMDAnOiAncmdiYSgyNTAsIDI1MCwgMjUwLCAxKScsXHJcbiAgICAgICAgJ0EyMDAnOiAncmdiYSgyNTUsIDE1MiwgMCwgMSknXHJcbiAgICB9KTtcclxuICAgICRtZFRoZW1pbmdQcm92aWRlci5kZWZpbmVQYWxldHRlKCdvcmFuZ2UtYmFja2dyb3VuZCcsIG9yYW5nZUJhY2tncm91bmRQYWxldHRlKTtcclxuXHJcbiAgICBsZXQgb3JhbmdlUHJpbWFyeVBhbGV0dGUgPSAkbWRUaGVtaW5nUHJvdmlkZXIuZXh0ZW5kUGFsZXR0ZSgnb3JhbmdlJywge1xyXG4gICAgICAgICc4MDAnOiAncmdiYSgyNTUsIDE1MiwgMCwgMSknLFxyXG4gICAgICAgICc5MDAnOiAncmdiYSgyNTUsIDE1MiwgMCwgLjU0KTsnXHJcbiAgICB9KTtcclxuICAgICRtZFRoZW1pbmdQcm92aWRlci5kZWZpbmVQYWxldHRlKCdvcmFuZ2UtcHJpbWFyeScsIG9yYW5nZVByaW1hcnlQYWxldHRlKTtcclxuXHJcbiAgICAkbWRUaGVtaW5nUHJvdmlkZXIudGhlbWUoJ2FtYmVyJylcclxuICAgICAgICAucHJpbWFyeVBhbGV0dGUoJ29yYW5nZS1wcmltYXJ5Jywge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6ICc4MDAnLFxyXG4gICAgICAgICAgICAnaHVlLTEnOiAnOTAwJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmJhY2tncm91bmRQYWxldHRlKCdvcmFuZ2UtYmFja2dyb3VuZCcsIHtcclxuICAgICAgICAgICAgJ2RlZmF1bHQnOiAnNTAnLCAgLy8gYmFja2dyb3VuZFxyXG4gICAgICAgICAgICAnaHVlLTEnOiAnQTIwMCcsICAvLyB0aWxlcyBkaWFsb2dcclxuICAgICAgICAgICAgJ2h1ZS0yJzogJ0E3MDAnICAgLy8gYXBwIGJhclxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLndhcm5QYWxldHRlKCdyZWQnLCB7XHJcbiAgICAgICAgICAgICdkZWZhdWx0JzogJ0EyMDAnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYWNjZW50UGFsZXR0ZSgnb3JhbmdlJywge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6ICc5MDAnXHJcbiAgICAgICAgfSk7XHJcbiAgICAkbWRUaGVtaW5nUHJvdmlkZXIuYWx3YXlzV2F0Y2hUaGVtZSh0cnVlKTtcclxufVxyXG5cclxuYW5ndWxhclxyXG4gICAgLm1vZHVsZSgncGlwVGhlbWUuQW1iZXInLCBbICduZ01hdGVyaWFsJyBdKVxyXG4gICAgLmNvbmZpZyhjb25maWd1cmVEZWZhdWx0QW1iZXJUaGVtZSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGNvbmZpZ3VyZURlZmF1bHRCbHVlVGhlbWUoJG1kVGhlbWluZ1Byb3ZpZGVyOiBuZy5tYXRlcmlhbC5JVGhlbWluZ1Byb3ZpZGVyKSB7XHJcbiAgICAvLyBwaXBUcmFuc2xhdGVQcm92aWRlci50cmFuc2xhdGlvbnMoJ2VuJywge1xyXG4gICAgLy8gICAgIFRIRU1FOiAnVGhlbWUnLFxyXG4gICAgLy8gICAgIGJsdWU6ICdCbHVlJyxcclxuICAgIC8vIH0pO1xyXG4gICAgLy8gcGlwVHJhbnNsYXRlUHJvdmlkZXIudHJhbnNsYXRpb25zKCdydScsIHtcclxuICAgIC8vICAgICBUSEVNRTogJ9Ci0LXQvNCwJyxcclxuICAgIC8vICAgICBibHVlOiAn0JPQvtC70YPQsdCw0Y8nXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICByZWdpc3RlckJsdWVUaGVtZSgnZGVmYXVsdCcpO1xyXG4gICAgcmVnaXN0ZXJCbHVlVGhlbWUoJ2JsdWUnKTtcclxuXHJcbiAgICAkbWRUaGVtaW5nUHJvdmlkZXIuc2V0RGVmYXVsdFRoZW1lKCdkZWZhdWx0Jyk7XHJcbiAgICAkbWRUaGVtaW5nUHJvdmlkZXIuYWx3YXlzV2F0Y2hUaGVtZSh0cnVlKTtcclxuXHJcbiAgICBmdW5jdGlvbiByZWdpc3RlckJsdWVUaGVtZSh0aGVtZU5hbWUpIHtcclxuICAgICAgICBsZXQgYmx1ZVByaW1hcnlQYWxldHRlID0gJG1kVGhlbWluZ1Byb3ZpZGVyLmV4dGVuZFBhbGV0dGUoJ2JsdWUnLCB7XHJcbiAgICAgICAgICAgICdjb250cmFzdERlZmF1bHRDb2xvcic6ICdsaWdodCcsXHJcbiAgICAgICAgICAgICdjb250cmFzdERhcmtDb2xvcnMnOiB1bmRlZmluZWRcclxuICAgICAgICB9KTtcclxuICAgICAgICAkbWRUaGVtaW5nUHJvdmlkZXIuZGVmaW5lUGFsZXR0ZSgnYmx1ZS1wcmltYXJ5JywgYmx1ZVByaW1hcnlQYWxldHRlKTtcclxuXHJcbiAgICAgICAgbGV0IGJsdWVCYWNrZ3JvdW5kUGFsZXR0ZSA9ICRtZFRoZW1pbmdQcm92aWRlci5leHRlbmRQYWxldHRlKCdncmV5Jywge1xyXG4gICAgICAgICAgICAnQTEwMCc6ICdyZ2JhKDI1MCwgMjUwLCAyNTAsIDEpJyxcclxuICAgICAgICAgICAgJ0EyMDAnOiAncmdiYSgzMywgMTUwLCAyNDMsIDEpJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICRtZFRoZW1pbmdQcm92aWRlci5kZWZpbmVQYWxldHRlKCdibHVlLWJhY2tncm91bmQnLCBibHVlQmFja2dyb3VuZFBhbGV0dGUpO1xyXG5cclxuICAgICAgICBsZXQgYmx1ZUFjY2VudFBhbGV0dGUgPSAkbWRUaGVtaW5nUHJvdmlkZXIuZXh0ZW5kUGFsZXR0ZSgnZ3JlZW4nLCB7XHJcbiAgICAgICAgICAgICc2MDAnOiAncmdiYSgwLCAyMDAsIDgzLCAxKSdcclxuICAgICAgICB9KTtcclxuICAgICAgICAkbWRUaGVtaW5nUHJvdmlkZXIuZGVmaW5lUGFsZXR0ZSgnYmx1ZS1hY2NlbnQnLCBibHVlQWNjZW50UGFsZXR0ZSk7XHJcblxyXG4gICAgICAgICRtZFRoZW1pbmdQcm92aWRlci50aGVtZSh0aGVtZU5hbWUpXHJcbiAgICAgICAgICAgIC5wcmltYXJ5UGFsZXR0ZSgnYmx1ZS1wcmltYXJ5Jywge1xyXG4gICAgICAgICAgICAgICAgJ2RlZmF1bHQnOiAnNTAwJyxcclxuICAgICAgICAgICAgICAgICdodWUtMSc6ICczMDAnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5iYWNrZ3JvdW5kUGFsZXR0ZSgnYmx1ZS1iYWNrZ3JvdW5kJywge1xyXG4gICAgICAgICAgICAgICAgJ2RlZmF1bHQnOiAnNTAnLCAgLy8gYmFja2dyb3VuZFxyXG4gICAgICAgICAgICAgICAgJ2h1ZS0xJzogJ0EyMDAnLCAgLy8gdGlsZXMgZGlhbG9nXHJcbiAgICAgICAgICAgICAgICAnaHVlLTInOiAnQTcwMCcgICAvLyBhcHAgYmFyXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC53YXJuUGFsZXR0ZSgncmVkJywge1xyXG4gICAgICAgICAgICAgICAgJ2RlZmF1bHQnOiAnQTIwMCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmFjY2VudFBhbGV0dGUoJ2JsdWUtYWNjZW50Jywge1xyXG4gICAgICAgICAgICAgICAgJ2RlZmF1bHQnOiAnNjAwJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuYW5ndWxhclxyXG4gICAgLm1vZHVsZSgncGlwVGhlbWUuQmx1ZScsIFsgJ25nTWF0ZXJpYWwnIF0pXHJcbiAgICAuY29uZmlnKGNvbmZpZ3VyZURlZmF1bHRCbHVlVGhlbWUpO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBjb25maWd1cmVEZWZhdWx0R3JlZW5UaGVtZSgkbWRUaGVtaW5nUHJvdmlkZXI6IG5nLm1hdGVyaWFsLklUaGVtaW5nUHJvdmlkZXIpIHtcclxuICAgIC8vIHBpcFRyYW5zbGF0ZVByb3ZpZGVyLnRyYW5zbGF0aW9ucygnZW4nLCB7XHJcbiAgICAvLyAgICAgVEhFTUU6ICdUaGVtZScsXHJcbiAgICAvLyAgICAgZ3JlZW46ICdHcmVlbidcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIHBpcFRyYW5zbGF0ZVByb3ZpZGVyLnRyYW5zbGF0aW9ucygncnUnLCB7XHJcbiAgICAvLyAgICAgVEhFTUU6ICfQotC10LzQsCcsXHJcbiAgICAvLyAgICAgZ3JlZW46ICfQl9C10LvQtdC90LDRjydcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIGxldCBncmVlbkJhY2tncm91bmRQYWxldHRlID0gJG1kVGhlbWluZ1Byb3ZpZGVyLmV4dGVuZFBhbGV0dGUoJ2dyZXknLCB7XHJcbiAgICAgICAgJ0ExMDAnOiAncmdiYSgyNTAsIDI1MCwgMjUwLCAxKScsXHJcbiAgICAgICAgJ0EyMDAnOiAncmdiYSg3NiwgMTc1LCA4MCwgMSknXHJcbiAgICB9KTtcclxuICAgICRtZFRoZW1pbmdQcm92aWRlci5kZWZpbmVQYWxldHRlKCdncmVlbi1iYWNrZ3JvdW5kJywgZ3JlZW5CYWNrZ3JvdW5kUGFsZXR0ZSk7XHJcblxyXG4gICAgbGV0IGdyZWVuUHJpbWFyeVBhbGV0dGUgPSAkbWRUaGVtaW5nUHJvdmlkZXIuZXh0ZW5kUGFsZXR0ZSgnZ3JlZW4nLCB7XHJcbiAgICAgICAgJzMwMCc6ICcjOWVkNGExJyxcclxuICAgICAgICAnY29udHJhc3RMaWdodENvbG9ycyc6IFsnNTAwJywgJzMwMCddXHJcbiAgICB9KTtcclxuICAgICRtZFRoZW1pbmdQcm92aWRlci5kZWZpbmVQYWxldHRlKCdncmVlbi1wcmltYXJ5JywgZ3JlZW5QcmltYXJ5UGFsZXR0ZSk7XHJcblxyXG5cclxuICAgIGxldCBncmVlbkFjY2VudFBhbGV0dGUgPSAkbWRUaGVtaW5nUHJvdmlkZXIuZXh0ZW5kUGFsZXR0ZSgnYW1iZXInLCB7XHJcbiAgICAgICAgJ2NvbnRyYXN0TGlnaHRDb2xvcnMnOiBbJ0E3MDAnXVxyXG4gICAgfSk7XHJcbiAgICAkbWRUaGVtaW5nUHJvdmlkZXIuZGVmaW5lUGFsZXR0ZSgnZ3JlZW4tYWNjZW50JywgZ3JlZW5BY2NlbnRQYWxldHRlKTtcclxuXHJcbiAgICAkbWRUaGVtaW5nUHJvdmlkZXIudGhlbWUoJ2dyZWVuJylcclxuICAgICAgICAucHJpbWFyeVBhbGV0dGUoJ2dyZWVuLXByaW1hcnknLCB7XHJcbiAgICAgICAgICAgICdkZWZhdWx0JzogJzUwMCcsXHJcbiAgICAgICAgICAgICdodWUtMSc6ICczMDAnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYmFja2dyb3VuZFBhbGV0dGUoJ2dyZWVuLWJhY2tncm91bmQnLCB7XHJcbiAgICAgICAgICAgICdkZWZhdWx0JzogJzUwJywgIC8vIGJhY2tncm91bmRcclxuICAgICAgICAgICAgJ2h1ZS0xJzogJ0EyMDAnLCAgLy8gdGlsZXMgZGlhbG9nXHJcbiAgICAgICAgICAgICdodWUtMic6ICdBNzAwJyAgIC8vIGFwcCBiYXJcclxuICAgICAgICB9KVxyXG4gICAgICAgIC53YXJuUGFsZXR0ZSgncmVkJywge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6ICdBMjAwJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmFjY2VudFBhbGV0dGUoJ2dyZWVuLWFjY2VudCcsIHtcclxuICAgICAgICAgICAgJ2RlZmF1bHQnOiAnQTcwMCdcclxuICAgICAgICB9KTtcclxuICAgICRtZFRoZW1pbmdQcm92aWRlci5hbHdheXNXYXRjaFRoZW1lKHRydWUpO1xyXG59XHJcblxyXG5hbmd1bGFyXHJcbiAgICAubW9kdWxlKCdwaXBUaGVtZS5HcmVlbicsIFsgJ25nTWF0ZXJpYWwnIF0pXHJcbiAgICAuY29uZmlnKGNvbmZpZ3VyZURlZmF1bHRHcmVlblRoZW1lKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gY29uZmlndXJlRGVmYXVsdEdyZXlUaGVtZSgkbWRUaGVtaW5nUHJvdmlkZXI6IG5nLm1hdGVyaWFsLklUaGVtaW5nUHJvdmlkZXIpIHtcclxuICAgIC8vIHBpcFRyYW5zbGF0ZVByb3ZpZGVyLnRyYW5zbGF0aW9ucygnZW4nLCB7XHJcbiAgICAvLyAgICAgVEhFTUU6ICdUaGVtZScsXHJcbiAgICAvLyAgICAgZ3JleTogJ0dyZXknXHJcbiAgICAvLyB9KTtcclxuICAgIFxyXG4gICAgLy8gcGlwVHJhbnNsYXRlUHJvdmlkZXIudHJhbnNsYXRpb25zKCdydScsIHtcclxuICAgIC8vICAgICBUSEVNRTogJ9Ci0LXQvNCwJyxcclxuICAgIC8vICAgICBncmV5OiAn0KHQtdGA0LDRjydcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIGxldCB0aGlyZFBhcnR5UGFsZXR0ZSA9ICRtZFRoZW1pbmdQcm92aWRlci5leHRlbmRQYWxldHRlKCdncmV5Jywge1xyXG4gICAgICAgICdBMTAwJzogJ3JnYmEoMjUwLCAyNTAsIDI1MCwgMSknLFxyXG4gICAgICAgICdBMjAwJzogJ3JnYmEoMjU1LCAxNTIsIDAsIDEpJyxcclxuICAgICAgICAnQTQwMCc6ICcjYTliOWMwJyxcclxuICAgICAgICAnNTAwJzogJyM2MDdEOEInLFxyXG4gICAgICAgICdBNzAwJzogJyM5MEE0QUUnLFxyXG4gICAgICAgIC8vJzgwMCc6ICcnLFxyXG4gICAgICAgICdjb250cmFzdERlZmF1bHRDb2xvcic6ICdkYXJrJyxcclxuICAgICAgICAnY29udHJhc3RMaWdodENvbG9ycyc6IFsnMzAwJywgJzQwMCcsICc1MDAnLCAnNjAwJywgJzcwMCcsICc4MDAnLCAnOTAwJywgJ0E3MDAnXVxyXG4gICAgfSk7XHJcbiAgICAkbWRUaGVtaW5nUHJvdmlkZXIuZGVmaW5lUGFsZXR0ZSgndGhpcmQtcGFydHknLCB0aGlyZFBhcnR5UGFsZXR0ZSk7XHJcblxyXG5cclxuICAgICRtZFRoZW1pbmdQcm92aWRlci50aGVtZSgnZ3JleScpXHJcbiAgICAgICAgLnByaW1hcnlQYWxldHRlKCd0aGlyZC1wYXJ0eScsIHtcclxuICAgICAgICAgICAgJ2RlZmF1bHQnOiAnNTAwJyxcclxuICAgICAgICAgICAgJ2h1ZS0xJzogJ0E0MDAnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYmFja2dyb3VuZFBhbGV0dGUoJ3RoaXJkLXBhcnR5Jywge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6ICc1MCcsICAvLyBiYWNrZ3JvdW5kXHJcbiAgICAgICAgICAgICdodWUtMSc6ICc1MDAnLCAgLy8gdGlsZXMgZGlhbG9nXHJcbiAgICAgICAgICAgICdodWUtMic6ICdBNzAwJyAgIC8vIGFwcCBiYXJcclxuICAgICAgICB9KVxyXG4gICAgICAgIC53YXJuUGFsZXR0ZSgncmVkJywge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6ICdBMjAwJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmFjY2VudFBhbGV0dGUoJ3RoaXJkLXBhcnR5Jywge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6ICdBNzAwJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAkbWRUaGVtaW5nUHJvdmlkZXIuYWx3YXlzV2F0Y2hUaGVtZSh0cnVlKTtcclxufVxyXG5cclxuYW5ndWxhclxyXG4gICAgLm1vZHVsZSgncGlwVGhlbWUuR3JleScsIFsgJ25nTWF0ZXJpYWwnIF0pXHJcbiAgICAuY29uZmlnKGNvbmZpZ3VyZURlZmF1bHRHcmV5VGhlbWUpO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBjb25maWd1cmVEZWZhdWx0TmF2eVRoZW1lKCRtZFRoZW1pbmdQcm92aWRlcjogbmcubWF0ZXJpYWwuSVRoZW1pbmdQcm92aWRlcikge1xyXG4gICAgLy8gcGlwVHJhbnNsYXRlUHJvdmlkZXIudHJhbnNsYXRpb25zKCdlbicsIHtcclxuICAgIC8vICAgICBUSEVNRTogJ1RoZW1lJyxcclxuICAgIC8vICAgICBuYXZ5OiAnTmF2eSdcclxuICAgIC8vIH0pO1xyXG4gICAgLy8gcGlwVHJhbnNsYXRlUHJvdmlkZXIudHJhbnNsYXRpb25zKCdydScsIHtcclxuICAgIC8vICAgICBUSEVNRTogJ9Ci0LXQvNCwJyxcclxuICAgIC8vICAgICBuYXZ5OiAn0KHQuNC90LUt0YHQtdGA0LDRjydcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIGxldCBncmV5UGFsZXR0ZSA9ICRtZFRoZW1pbmdQcm92aWRlci5leHRlbmRQYWxldHRlKCdncmV5Jywge1xyXG4gICAgICAgICc3MDAnOiAncmdiYSg4NiwgOTcsIDEyNSwgMSknLFxyXG4gICAgICAgICc4MDAnOiAncmdiYSg4NiwgOTcsIDEyNSwgLjU0KScsXHJcbiAgICAgICAgJ0ExMDAnOiAncmdiYSgyNTAsIDI1MCwgMjUwLCAxKScsXHJcbiAgICB9KTtcclxuICAgICRtZFRoZW1pbmdQcm92aWRlci5kZWZpbmVQYWxldHRlKCdncmV5JywgZ3JleVBhbGV0dGUpO1xyXG5cclxuICAgIGxldCB0ZWFsUGFsZXR0ZSA9ICRtZFRoZW1pbmdQcm92aWRlci5leHRlbmRQYWxldHRlKCd0ZWFsJywge1xyXG4gICAgICAgICdjb250cmFzdExpZ2h0Q29sb3JzJzogWyc1MDAnLCAnNjAwJywgJzcwMCcsICc4MDAnLCAnOTAwJywgJ0E3MDAnXVxyXG4gICAgfSk7XHJcbiAgICAkbWRUaGVtaW5nUHJvdmlkZXIuZGVmaW5lUGFsZXR0ZSgndGVhbCcsIHRlYWxQYWxldHRlKTtcclxuXHJcbiAgICAkbWRUaGVtaW5nUHJvdmlkZXIudGhlbWUoJ25hdnknKVxyXG4gICAgICAgIC5wcmltYXJ5UGFsZXR0ZSgnZ3JleScsIHtcclxuICAgICAgICAgICAgJ2RlZmF1bHQnOiAnNzAwJyxcclxuICAgICAgICAgICAgJ2h1ZS0xJzogJzgwMCdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5iYWNrZ3JvdW5kUGFsZXR0ZSgnZ3JleScsIHtcclxuICAgICAgICAgICAgJ2RlZmF1bHQnOiAnNTAnLCAgLy8gYmFja2dyb3VuZFxyXG4gICAgICAgICAgICAnaHVlLTEnOiAnNzAwJywgIC8vIHRpbGVzIGRpYWxvZ1xyXG4gICAgICAgICAgICAnaHVlLTInOiAnQTcwMCcgICAvLyBhcHAgYmFyXHJcbiAgICAgICAgfSlcclxuICAgICAgICAud2FyblBhbGV0dGUoJ3JlZCcsIHtcclxuICAgICAgICAgICAgJ2RlZmF1bHQnOiAnQTIwMCdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5hY2NlbnRQYWxldHRlKCd0ZWFsJywge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6ICdBNzAwJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgJG1kVGhlbWluZ1Byb3ZpZGVyLmFsd2F5c1dhdGNoVGhlbWUodHJ1ZSk7XHJcbn1cclxuXHJcbmFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3BpcFRoZW1lLk5hdnknLCBbICduZ01hdGVyaWFsJyBdKVxyXG4gICAgLmNvbmZpZyhjb25maWd1cmVEZWZhdWx0TmF2eVRoZW1lKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gY29uZmlndXJlRGVmYXVsdE9yYW5nZVRoZW1lKCRtZFRoZW1pbmdQcm92aWRlcjogbmcubWF0ZXJpYWwuSVRoZW1pbmdQcm92aWRlcikge1xyXG4gICAgLy8gcGlwVHJhbnNsYXRlUHJvdmlkZXIudHJhbnNsYXRpb25zKCdlbicsIHtcclxuICAgIC8vICAgICBUSEVNRTogJ1RoZW1lJyxcclxuICAgIC8vICAgICBvcmFuZ2U6ICdPcmFuZ2UnXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyBwaXBUcmFuc2xhdGVQcm92aWRlci50cmFuc2xhdGlvbnMoJ3J1Jywge1xyXG4gICAgLy8gICAgIFRIRU1FOiAn0KLQtdC80LAnLFxyXG4gICAgLy8gICAgIG9yYW5nZTogJ9Ce0YDQsNC90LbQtdCy0LDRjydcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIGxldCBSZWRCYWNrZ3JvdW5kUGFsZXR0ZSA9ICRtZFRoZW1pbmdQcm92aWRlci5leHRlbmRQYWxldHRlKCdncmV5Jywge1xyXG4gICAgICAgICdBMTAwJzogJ3JnYmEoMjUwLCAyNTAsIDI1MCwgMSknLFxyXG4gICAgICAgICdBMjAwJzogJ3JnYmEoMjU1LCAxMTIsIDY3LCAxKScsXHJcbiAgICAgICAgJ2NvbnRyYXN0TGlnaHRDb2xvcnMnOiBbJzYwMCcsICc3MDAnLCAnODAwJywgJzkwMCcsICdBMjAwJ11cclxuICAgIH0pO1xyXG4gICAgJG1kVGhlbWluZ1Byb3ZpZGVyLmRlZmluZVBhbGV0dGUoJ3JlZC1iYWNrZ3JvdW5kJywgUmVkQmFja2dyb3VuZFBhbGV0dGUpO1xyXG5cclxuICAgIGxldCBSZWRQcmltYXJ5UGFsZXR0ZSA9ICRtZFRoZW1pbmdQcm92aWRlci5leHRlbmRQYWxldHRlKCdvcmFuZ2UnLCB7XHJcbiAgICAgICAgJzgwMCc6ICdyZ2JhKDI1NSwgMTEyLCA2NywgMSknLFxyXG4gICAgICAgICc5MDAnOiAncmdiYSgyNTUsIDE1MiwgNjcsIC41NCknLFxyXG4gICAgICAgICdBMTAwJzogJ3JnYmEoMjU1LCAxNzEsIDY0LCAxKScsXHJcbiAgICAgICAgJ2NvbnRyYXN0TGlnaHRDb2xvcnMnOiBbJzgwMCcsICc5MDAnLCAnQTEwMCddXHJcbiAgICB9KTtcclxuICAgICRtZFRoZW1pbmdQcm92aWRlci5kZWZpbmVQYWxldHRlKCdyZWQtcHJpbWFyeScsIFJlZFByaW1hcnlQYWxldHRlKTtcclxuXHJcbiAgICAkbWRUaGVtaW5nUHJvdmlkZXIudGhlbWUoJ29yYW5nZScpXHJcbiAgICAgICAgLnByaW1hcnlQYWxldHRlKCdyZWQtcHJpbWFyeScsIHtcclxuICAgICAgICAgICAgJ2RlZmF1bHQnOiAnODAwJyxcclxuICAgICAgICAgICAgJ2h1ZS0xJzogJzkwMCdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5iYWNrZ3JvdW5kUGFsZXR0ZSgncmVkLWJhY2tncm91bmQnLCB7XHJcbiAgICAgICAgICAgICdkZWZhdWx0JzogJzUwJywgIC8vIGJhY2tncm91bmRcclxuICAgICAgICAgICAgJ2h1ZS0xJzogJ0EyMDAnLCAgLy8gdGlsZXMgZGlhbG9nXHJcbiAgICAgICAgICAgICdodWUtMic6ICdBNzAwJyAgIC8vIGFwcCBiYXJcclxuICAgICAgICB9KVxyXG4gICAgICAgIC53YXJuUGFsZXR0ZSgncmVkJywge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6ICdBMjAwJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmFjY2VudFBhbGV0dGUoJ3JlZC1wcmltYXJ5Jywge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6ICdBMTAwJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgJG1kVGhlbWluZ1Byb3ZpZGVyLmFsd2F5c1dhdGNoVGhlbWUodHJ1ZSk7XHJcbn1cclxuXHJcbmFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3BpcFRoZW1lLk9yYW5nZScsIFsgJ25nTWF0ZXJpYWwnIF0pXHJcbiAgICAuY29uZmlnKGNvbmZpZ3VyZURlZmF1bHRPcmFuZ2VUaGVtZSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGNvbmZpZ3VyZURlZmF1bHRQaW5rVGhlbWUoJG1kVGhlbWluZ1Byb3ZpZGVyOiBuZy5tYXRlcmlhbC5JVGhlbWluZ1Byb3ZpZGVyKSB7XHJcbiAgICAvLyBwaXBUcmFuc2xhdGVQcm92aWRlci50cmFuc2xhdGlvbnMoJ2VuJywge1xyXG4gICAgLy8gICAgIFRIRU1FOiAnVGhlbWUnLFxyXG4gICAgLy8gICAgIHBpbms6ICdQaW5rJ1xyXG4gICAgLy8gfSk7XHJcbiAgICAvLyBwaXBUcmFuc2xhdGVQcm92aWRlci50cmFuc2xhdGlvbnMoJ3J1Jywge1xyXG4gICAgLy8gICAgIFRIRU1FOiAn0KLQtdC80LAnLFxyXG4gICAgLy8gICAgIHBpbms6ICfQoNC+0LfQvtCy0LDRjycsXHJcblxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgbGV0IFBpbmtCYWNrZ3JvdW5kUGFsZXR0ZSA9ICRtZFRoZW1pbmdQcm92aWRlci5leHRlbmRQYWxldHRlKCdncmV5Jywge1xyXG4gICAgICAgICdBMTAwJzogJ3JnYmEoMjUwLCAyNTAsIDI1MCwgMSknLFxyXG4gICAgICAgICdBMjAwJzogJ3JnYmEoMTg4LCA4NiwgMTIxLCAxKScsXHJcbiAgICAgICAgJ2NvbnRyYXN0RGVmYXVsdENvbG9yJzogJ2RhcmsnLFxyXG4gICAgICAgICdjb250cmFzdExpZ2h0Q29sb3JzJzogWydBMjAwJywgJ0E3MDAnXVxyXG4gICAgfSk7XHJcbiAgICAkbWRUaGVtaW5nUHJvdmlkZXIuZGVmaW5lUGFsZXR0ZSgncGluay1iYWNrZ3JvdW5kJywgUGlua0JhY2tncm91bmRQYWxldHRlKTtcclxuXHJcbiAgICBsZXQgUGlua1ByaW1hcnlQYWxldHRlID0gJG1kVGhlbWluZ1Byb3ZpZGVyLmV4dGVuZFBhbGV0dGUoJ3BpbmsnLCB7XHJcbiAgICAgICAgJzYwMCc6ICdyZ2JhKDI1NSwgMTI4LCAxNzEsIDEpJyxcclxuICAgICAgICAnNzAwJzogJ3JnYmEoMTg4LCA4NiwgMTIxLCAuNTQpJyxcclxuICAgICAgICAnOTAwJzogJ3JnYmEoMTg4LCA4NiwgMTIxLCAxKScsXHJcbiAgICAgICAgJ2NvbnRyYXN0RGVmYXVsdENvbG9yJzogJ2xpZ2h0J1xyXG4gICAgfSk7XHJcbiAgICAkbWRUaGVtaW5nUHJvdmlkZXIuZGVmaW5lUGFsZXR0ZSgncGluay1wcmltYXJ5JywgUGlua1ByaW1hcnlQYWxldHRlKTtcclxuXHJcbiAgICAkbWRUaGVtaW5nUHJvdmlkZXIudGhlbWUoJ3BpbmsnKVxyXG4gICAgICAgIC5wcmltYXJ5UGFsZXR0ZSgncGluay1wcmltYXJ5Jywge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6ICc5MDAnLFxyXG4gICAgICAgICAgICAnaHVlLTEnOiAnNzAwJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmJhY2tncm91bmRQYWxldHRlKCdwaW5rLWJhY2tncm91bmQnLCB7XHJcbiAgICAgICAgICAgICdkZWZhdWx0JzogJzUwJywgIC8vIGJhY2tncm91bmRcclxuICAgICAgICAgICAgJ2h1ZS0xJzogJ0EyMDAnLCAgLy8gdGlsZXMgZGlhbG9nXHJcbiAgICAgICAgICAgICdodWUtMic6ICdBNzAwJyAgIC8vIGFwcCBiYXJcclxuICAgICAgICB9KVxyXG4gICAgICAgIC53YXJuUGFsZXR0ZSgncmVkJywge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6ICdBMjAwJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmFjY2VudFBhbGV0dGUoJ3BpbmstcHJpbWFyeScsIHtcclxuICAgICAgICAgICAgJ2RlZmF1bHQnOiAnNjAwJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgJG1kVGhlbWluZ1Byb3ZpZGVyLmFsd2F5c1dhdGNoVGhlbWUodHJ1ZSk7XHJcbn1cclxuXHJcbmFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3BpcFRoZW1lLlBpbmsnLCBbICduZ01hdGVyaWFsJyBdKVxyXG4gICAgLmNvbmZpZyhjb25maWd1cmVEZWZhdWx0UGlua1RoZW1lKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL0RlZmF1bHRCbHVlVGhlbWUnO1xyXG5pbXBvcnQgJy4vRGVmYXVsdFBpbmtUaGVtZSc7XHJcbmltcG9ydCAnLi9EZWZhdWx0QW1iZXJUaGVtZSc7XHJcbmltcG9ydCAnLi9EZWZhdWx0T3JhbmdlVGhlbWUnO1xyXG5pbXBvcnQgJy4vRGVmYXVsdEdyZWVuVGhlbWUnO1xyXG5pbXBvcnQgJy4vRGVmYXVsdE5hdnlUaGVtZSc7XHJcbmltcG9ydCAnLi9EZWZhdWx0R3JleVRoZW1lJztcclxuXHJcblxyXG5hbmd1bGFyXHJcbiAgICAubW9kdWxlKCdwaXBUaGVtZS5EZWZhdWx0JywgW1xyXG4gICAgICAgICduZ01hdGVyaWFsJyxcclxuICAgICAgICAncGlwVGhlbWUuQmx1ZScsIFxyXG4gICAgICAgICdwaXBUaGVtZS5QaW5rJyxcclxuICAgICAgICAncGlwVGhlbWUuQW1iZXInLCBcclxuICAgICAgICAncGlwVGhlbWUuT3JhbmdlJywgXHJcbiAgICAgICAgJ3BpcFRoZW1lLkdyZWVuJywgXHJcbiAgICAgICAgJ3BpcFRoZW1lLk5hdnknLCBcclxuICAgICAgICAncGlwVGhlbWUuR3JleSdcclxuICAgIF0pXHJcbiAgICAuY29uZmlnKGNvbmZpZ3VyZURlZmF1bHRUaGVtZSk7XHJcblxyXG5mdW5jdGlvbiBjb25maWd1cmVEZWZhdWx0VGhlbWUoJG1kVGhlbWluZ1Byb3ZpZGVyKSB7XHJcbiAgICAkbWRUaGVtaW5nUHJvdmlkZXIuc2V0RGVmYXVsdFRoZW1lKCdkZWZhdWx0Jyk7XHJcbiAgICAkbWRUaGVtaW5nUHJvdmlkZXIuYWx3YXlzV2F0Y2hUaGVtZSh0cnVlKTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vY29tbW9uJztcclxuaW1wb3J0ICcuL2RlZmF1bHQnO1xyXG5pbXBvcnQgJy4vYm9vdGJhcm4nO1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9jb21tb24nOyJdfQ==