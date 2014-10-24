module.exports = (grunt) ->
	grunt.loadNpmTasks 'grunt-node-webkit-builder'
	grunt.initConfig
		nodewebkit:
			options:
				platforms: ['win', 'osx', 'linux32', 'linux64']
				buildDir: './dist'
			src: ['./chromize/**/*']

	grunt.registerTask 'default', ['nodewebkit']
