module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  //任务配置，所有插件的配置信息
  grunt.initConfig({

    //获取 package.json 的信息
    pkg: grunt.file.readJSON('package.json'),

    //uglify插件的配置信息：用来压缩javascript文件
    uglify: {
      options: {
        stripBanners: true,
        banner: '/*! <%= pkg.name %> */\n/*! <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      build: {
        src: 'js/*.js',
        dest: 'build/*.min.js'
      }
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: [{
          expand: true,
          flatten: true,
          src: 'scss/style.scss',
          dest: 'build/',
          ext: '.css'
        }]
      }
    },

		watch: {
			css: {
				files: 'scss/*.scss',
				tasks: ['sass']
			},
      scripts: {
        files: ['js/script.js'],
        tasks: ['uglify']
      }
		}



  });


  //告诉grunt我们将使用插件
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //告诉grunt当我们在终端中输入grunt时需要做什么 注意先后顺序
  grunt.registerTask('default', ['watch']);


};
