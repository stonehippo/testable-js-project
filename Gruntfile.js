module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['src/main/*.js', 'src/test/*.js'],            
            options: {
                asi: true
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/wok.min.js':['src/main/*.js']
                }
            }
        },
        testacular: {
            unit: {
                configFile: 'testacular.conf.js'
            }
        }
    })
    
    grunt.loadNpmTasks('grunt-contrib-jshint')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('gruntacular');
    
    grunt.registerTask('default', ['jshint', 'uglify']);
}
