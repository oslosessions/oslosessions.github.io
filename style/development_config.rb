#================================================================================#
#	Compass Configuration
#	Development Configuration uses expanded output style
#================================================================================#

# Environment	========================================
environment = :development

#	Imports 	========================================
add_import_path "ext"
add_import_path "parameters"
add_import_path "partials"

#	Project Parameters 	========================================
css_dir = "css"
sass_dir = "sass"
images_dir = "img"
fonts_dir = "fonts"

#	Output options 	========================================
relative_assets = true
output_style = :expanded

# compass watch -c development_config.rb 
# cd /Users/hanskristian/Documents/devProjects/oslosessions.github.io 

# grunt serve
# grunt

