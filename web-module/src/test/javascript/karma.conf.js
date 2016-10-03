module.exports = function(config){
  config.set({

    basePath : '../../../', // TODO

    files : [
      'src/main/webapp/vendor/angular**/**.min.js', // TODO
      'src/main/webapp/vendor/angular-mocks/angular-mocks.js', // TODO
      'src/main/webapp/js/**/*.js', // TODO
      'src/test/javascript/unit/**/*.js' // TODO
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'target/test_out/unit.xml', //TODO
      suite: 'src/test/javascript/unit' //TODO
    }
  });
};