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
Object.defineProperty(exports, "__esModule", { value: true });
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
Object.defineProperty(exports, "__esModule", { value: true });
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
Object.defineProperty(exports, "__esModule", { value: true });
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
Object.defineProperty(exports, "__esModule", { value: true });
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
Object.defineProperty(exports, "__esModule", { value: true });
require("./common");
require("./default");
require("./bootbarn");
__export(require("./common"));
},{"./bootbarn":4,"./common":6,"./default":14}]},{},[15])(15)
});

//# sourceMappingURL=pip-webui-themes.js.map
