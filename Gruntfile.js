module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            all: {
                options: {
                    livereload: true
                },
                files: [
                    '*.html',
                    'examples/**/*.html',
                    'test/*.js',
                    'test/*.html',
                    'test/**/*.html'
                ],
                // tasks: ['jshint'],
            },
        },
        // Mocha
		mocha: {
		  all: {
		    src: ['test/index.html'],
		  },
		  options: {
		    run: true
		  }
		},

        bump: {
          options: {
            files: ['package.json', 'package-lock.json', 'starcounter-include.html'],
            commit: true,
            commitMessage: '%VERSION%',
            commitFiles: ['package.json', 'package-lock.json', 'starcounter-include.html'],
            createTag: true,
            tagName: '%VERSION%',
            tagMessage: 'Version %VERSION%',
            push: false,
            // pushTo: 'origin',
            globalReplace: false,
            prereleaseName: 'rc',
            regExp: false
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
  	grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-bump');

    grunt.registerTask('default', ['watch']);
  	grunt.registerTask('test', ['mocha']);

};
