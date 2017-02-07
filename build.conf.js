module.exports = {
    module: {
        name: 'pipFiles',
        styles: 'files',
        export: 'pip.files',
        standalone: 'pip.files'
    },
    build: {
        js: false,
        ts: false,
        tsd: true,
        bundle: true,
        html: true,
        less: true,
        lib: true,
        images: true,
        dist: false
    },
    file: {
        lib: [
            '../pip-webui-test/dist/**/*',
            '../pip-webui-lib/dist/**/*',
            '../pip-webui-buttons/dist/**/*',
            // '../pip-webui-csscomponents/dist/**/*',
            '../pip-webui-services/dist/**/*',
            //  '../pip-webui-lists/dist/**/*',
            //  '../pip-webui-rest/dist/**/*',
            // '../pip-webui-controls/dist/**/*',
            //  '../pip-webui-nav/dist/**/*',
             '../pip-webui-layouts/dist/**/*',
             '../pip-webui-themes/dist/**/*',             
        ]
    },
    samples: {
        port: 8130
    },
    api: {
        port: 8131
    }
};
