
module.exports = function(grunt) {


	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			options: {  
				
			 },

			dist: {
				files: {
					'css/dell-coc.css' : 'scss/dell-coc.scss'
				}
			}
		},
		watch: {
			css: {
				files: ['scss/*.scss', 'scss/*/*.scss'],
				tasks: ['sass']
			}
		}
		

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', [
		'watch',
		'sass',
		] );

};