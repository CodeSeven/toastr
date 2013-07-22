module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      dev: {
        files: {
          "toastr.css": "toastr.less"
        }
      },
      prod: {
        options: {
          yuicompress: true
        },
        files: {
          "toastr.min.css": "toastr.less"
        }
      }
    },

    uglify: {
      prod: {
        files: {
          "toastr.min.js": "toastr.js"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['less', 'uglify']);
};