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
        sass: {
			options: {
				style: 'compact',
				loadPath: [
					'style/ext',
					'style/parameters',
					'style/partials',
					'style/sass'
				]
			},
			dist: {
				files: {
					'style/css/dev.css': 'style/sass/dev.scss',
				}
			}
		}, 
		autoprefixer: {
			options: {
				// Task-specific options go here.
			},

			single_file: {
				options: {
					browsers: ['last 2 versions', 'ie 8', 'ie 9']
				},
				src: 'style/css/dev.css',
				dest: 'style/css/dev-prefixed.css'
			}
		},

		watch: {
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
				files: "**/*.scss",
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
			"watch"
		]
	);
};