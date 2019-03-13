module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    babel: {
      options: {
        presets: ['@babel/preset-env'], // applies `browserslist` from package.json
        sourceType: 'script'
      },
      dist: {
        files: {
          'textblock.min.js': 'src/textblock.js'
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.version %> */'
      },
      textblock: {
        options: {
          mangle: {
            properties: {
              // compress object properties...
              reserved: ['Textblock', 'units'] // ...but not these ones...
            }
          },
          reserveDOMProperties: true // ...or any used by the browser
        },
        files: {
          'textblock.min.js': ['textblock.min.js']
        }
      }
    },

    watch: {
      scripts: {
        files: ['src/textblock.js'],
        tasks: ['uglify:textblock']
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Defaults
  // grunt.registerTask('default', ['postcss:dist','uncss:dist']);
  grunt.registerTask('default', ['babel', 'uglify:textblock']);
};
