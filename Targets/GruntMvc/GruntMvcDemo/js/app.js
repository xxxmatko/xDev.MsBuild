define([
	"module",
	"jquery",
	"domReady!"
], function (module, $) {
    var global = (function () { return this; })();

    //#region [ Constructor ]

    /**
	 * Constructor.
	 *
	 * @param {object} args Contructor arguments.
	 */
    var Application = function (args) {
        args = args || {};

        this.environment = args.environment || "";
    };

    //#endregion


    //#region [ Methods : Public ]

    /**
	 * Starts the application.
	 */
    Application.prototype.start = function () {
        $(".map").html("app is running:" + this.environment);
    };

    //#endregion


    // Create application instance
    var app = global.app = new Application(module.config());

    // Start the application
    app.start();
});