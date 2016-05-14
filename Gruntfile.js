module.exports = function(grunt){
   var config = {
        pkg : grunt.file.readJSON("package.json"),
        src: {
            js: ['client/**/*.js'],
            templates: ['index.html','client/table/templates/*.html']
        },
        express: {
            api: {
                options: {
                    port: 3001,
                    server: "server.js"
                }
            }
        },
        open: {
            dev: {
                path: 'http://localhost:3001/'
            }
        },
        watch : {
            all : {
                files : ['client/**/*'],
                tasks : []
            }
        },
        concurrent: {
            dev: {
                tasks: ['api', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
    };

    grunt.initConfig(config);

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('api', ['express:api', 'express-keepalive']);
    grunt.registerTask('default', ['concurrent:dev']);    
}