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
        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'client/',
                        src: ['table/**/*.js'],
                        dest: 'dist/'
                    },
                    {
                        expand: true,
                        cwd: 'client/',
                        src: ['main.js'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        clean : {
            dist : ['dist']
        },
        execute: {
            target: {
                src: ['client_bundler.js']
            }
        },
        html2js: {
            main: {
                options: {
                    base: "/",
                    module: "table.templates"
                },
                src: "client/table/templates/**/*.html",
                dest: "client/table/templates/__module.js"
            }
        },
    };

    grunt.initConfig(config);

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('transpile', ['clean','babel']);
    grunt.registerTask('api', ['express:api', 'express-keepalive']);
    grunt.registerTask('default', ['concurrent:dev']);    
}