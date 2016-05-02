module.exports = function (grunt) {
    // Grunt configuration
    grunt.initConfig({
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
                console.log("BUILD : DEBUG.");
                break;
            case "RELEASE":
                console.log("BUILD : RELEASE.");
                break;
            default:
                // Unknown build configuration
                grunt.fail.fatal("Unknown build configuration '" + target + "'");
                break;
        }

        // Run all tasks
        grunt.task.run.apply(grunt.task, tasks);
    });
};
