module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> (<%= pkg.homepage %>) */\n'
			},

			ngActivityIndicator: {
				files: {
					'ngActivityIndicator.min.js': ['ngActivityIndicator.js']
				}
			}
		},

		jshint: {
			options: {
				ignores: ['ngActivityIndicator.min.js'],
				jshintrc: true
			},

			files: ['*.js']
		},

		concat: {
			component: {
				files: {
					'ngActivityIndicator-component.js': ['ngActivityIndicator.js', 'component-export.js']
				}
			}
		},

		cssmin: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> (<%= pkg.homepage %>) */\n'
			},
			minify:{
				files: {
					'css/ngActivityIndicator.min.css': ['css/ngActivityIndicator.css'],
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['jshint', 'uglify', 'concat', 'cssmin']);
};
