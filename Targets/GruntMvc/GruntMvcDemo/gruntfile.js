module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-csslint");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-requirejs");

    // Grunt configuration
    grunt.initConfig({
        less: {
            options: {
                paths: ["less"],
                strictMath: false
            },
            src: {
                files: {
                    "css/site.css": "less/site.less"
                }
            }
        },
        csslint: {
            options: {
            },
            src: [
                "css/**/*.css",
                "!css/**/*.min.css"
            ]
        },
        cssmin: {
            options: {
            },
            build: {
                files: [{
                    expand: true,
                    cwd: "css",
                    src: ["*.css", "!*.min.css"],
                    dest: "css",
                    ext: ".min.css"
                }]
            }
        },
        jshint: {
            options: {
                debug: true,
                globals: {
                    jQuery: true
                }
            },
            src: [
                "gruntfile.js",
                "js/**/*.js",
                "!js/libs/*.js"
            ]
        },
        requirejs: {
            publish: {
                options: {
                    appDir: "./",
                    skipDirOptimize: true,
                    writeBuildTxt: false,
                    mainConfigFile: "./js/config.js",
                    dir: "./",
                    keepBuildDir: true,
                    allowSourceOverwrites: true,
                    removeCombined: true,
                    preserveLicenseComments: false,
                    optimize: "uglify",
                    inlineText: true,
                    optimizeCss: "none",
                    skipModuleInsertion: false,
                    modules: [{
                        name: "config",
                        create: true,
                        include: [
                            "config"
                        ]
                    }]
                }
            }
        },
    });

    // Build task
    grunt.registerTask("build", function (target) {
        if (!target) {
            grunt.fail.fatal("Missing build configuration.");
            return;
        }

        // List of default tasks for each build configuration
        var tasks = [
        ];

        // Custom task according to custom build configurations
        switch (target.toUpperCase()) {
            case "DEBUG":
                tasks.push("less");
                tasks.push("csslint");
                tasks.push("jshint");
                break;
            case "RELEASE":
                grunt.config("jshint.options.debug", false);

                tasks.push("less");
                tasks.push("csslint");
                tasks.push("cssmin");
                tasks.push("jshint");
                break;
            default:
                // Unknown build configuration
                grunt.fail.fatal("Unknown build configuration '" + target + "'");
                break;
        }

        // Run all tasks
        grunt.task.run.apply(grunt.task, tasks);
    });

    // Publish task
    grunt.registerTask("publish", function (target) {
        if (!target) {
            grunt.fail.fatal("Missing publish configuration.");
            return;
        }

        // List of default tasks for each build configuration
        var tasks = [
        ];

        // Custom task according to custom build configurations
        switch (target.toUpperCase()) {
            case "RELEASE":
                tasks.push("requirejs:publish");
                break;
            default:
                grunt.fail.fatal("Unknown publish configuration '" + target + "'");
                break;
        }

        // Run all tasks
        grunt.task.run.apply(grunt.task, tasks);
    });
};
