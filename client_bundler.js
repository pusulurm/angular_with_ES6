var Builder = require('systemjs-builder');

var builder = new Builder({
                            baseURL: '/',
                            defaultJSExtensions: true  ,
                            buildCSS : false,
                            map : {
                                        "angular" : "bower_components/angular/angular",
                                        "jquery" : "bower_components/jquery/dist/jquery",
                                        "text" : "bower_components/plugin-text/text",
                                        "css" : "bower_components/plugin-css/css",
                                        "babel" : "bower_components/babel/browser.js",
                                        "main" : "client/main"
                                    },
                                    meta : {
                                        "bower_components/angular/angular"  : {
                                            "format": "global",
                                            "exports": "angular"
                                        }
                                    }                          
                            });

builder.bundle('dist/main.js - [bower_components/**/*.js]', 'dist/bundled/app.js', { minify: true, sourceMaps: true });

//builder.bundle('dist/main.js - angular', 'dist/bundled/app.js', { minify: true, sourceMaps: true });