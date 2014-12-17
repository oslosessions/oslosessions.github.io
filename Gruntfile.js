module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		shell: {
			jekyllServe: {
				command: "jekyll serve --baseurl="
			},
			jekyllBuild: {
				command: "jekyll build --config _config.yml"
			}
		},
		watch: {
			options: {
				livereload: true
			},
			site: {
				files: [
					"index.html",
					"_layouts/*.html",
					"_posts/*.html",
					"_posts/*.md",
					"_config.yml",
					"_includes/*.html",
					"style/css/*.css"
				],
				tasks: [
					"shell:jekyllBuild"
				]
			},
			css: {
				files: ["_sass/*.scss"],
				tasks: ["sass", "autoprefixer", "shell:jekyllBuild"]
			},
			src: {
				files: ['lib/*.js', 'style/**/*.scss'],
				tasks: ['default']
			}
		}


	});


	require("load-grunt-tasks")(grunt);

	grunt.registerTask("serve",
		[
			"shell:jekyllServe"
		]
	);

	grunt.registerTask("default",
		[
			"shell:jekyllBuild",
			"watch"
		]
	);
};