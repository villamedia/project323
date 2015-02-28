module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    useminPrepare: {
      html: ['source/index.html'],
      options: {
        dest: 'dist'
      }
    },

    usemin: {
      html: ['dist/index.html']
    },

    uglify: {
      options: {
        banner: '/* Villamedia 2015 */\n'
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/index.html' : 'dist/index.html'
        }
      }
    },

    clean: ["dist/"],

    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'source',
            src: '*.html',
            dest: 'dist/'}
        ]
      },
    },


  });

  // Load the plugin that provides the "uglify" task.


  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-usemin');

  // Default task(s).
  grunt.registerTask('default');

  grunt.registerTask('build', [
    'clean',
    'copy',
    'useminPrepare',
    'concat',
    'uglify',
    'usemin',
    'htmlmin'
  ]);

};
