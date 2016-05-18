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
                                },
                                "css" : {
                                    build :false
                                },
                                "*.css" : {
                                    build : false
                                }
                            }                          
                            });
                            
builder.bundle('dist/main.js', 'dist/app.js', { minify: false, sourceMaps: false })
.then(function(){
    console.log('done bundling...!')
}, function(error){console.error(error)});                            

// builder.bundle('dist/main.js - [bower_components/**/*.js]', 'dist/bundled/app.js', { minify: false, sourceMaps: false })
// .then(function(){
//     builder.bundle('dist/main.js - dist/bundled/app.js', 'dist/bundled/vendor.js', { minify: false, sourceMaps: false })
// }, function(error){console.error(error)});