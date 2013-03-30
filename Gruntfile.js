module.exports = function(grunt){

	grunt.initConfig({

		less: {
			development: {
				options: {
					compress: false
				},
				files: {
					"css/style.css": "css/style.less"
				}
			},
			production: {
				options: {
					compress: true
				},
				files: {
					"css/style.css": "css/style.less"
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
}