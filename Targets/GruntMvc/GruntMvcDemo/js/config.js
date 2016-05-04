require({
    paths: {
        jquery: "libs/jquery",
        domReady: "libs/domReady"
    },
    shim: {
        "jquery": {
            exports: "jQuery"
        }
    },
    config: {
        "app": {
            environment: "DEBUG"
        }
    }
}, ["app"]);