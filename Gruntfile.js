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
                sourceMap: false,
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
        copy: {
            assets: {
                files : [
                        {expand: true, cwd: 'client/table/assets', src: ['**/*'], dest: 'dist/client/table/assets' },
                        {expand: true, cwd: 'client/', src: ['lib/**/*'], dest: 'dist/client' },
                    ],
                
            }
        },
        clean : {
            dist : ['dist'],
            es6 : ['dist/table', 'dist/main.*']
        },
        execute: {
            target: {
                src: ['client_bundler.js']
            }
        },
        concat: {
            templates: {
                src: ['build/templates.prefix',
                    'client/table/templates/__module.js',
                    'build/templates.suffix'
                ],
                dest: 'client/table/templates/__module.js'
            }
        },
        ngtemplates: {
            myapp: {
                options: {
                    base: "/",
                    module: "table.templates",
                },
                src: "client/table/templates/**/*.html",
                dest: "client/table/templates/__module.js"
            }
        },
        preprocess: {
            index: {                
                src: 'index.html',
                dest: 'dist/index.html'
            }
        },       
    };

    grunt.initConfig(config);

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('templatesToJs', ['ngtemplates','concat'])
    grunt.registerTask('transpile', ['clean:dist','babel']);
    grunt.registerTask('api', ['express:api', 'express-keepalive']);
    grunt.registerTask('default', ['concurrent:dev']);
    grunt.registerTask('release', ['templatesToJs', 'transpile', 'copy', 'preprocess', 'execute', 'clean:es6']);    
}