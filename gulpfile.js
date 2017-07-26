const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');
const usemin = require('gulp-usemin');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const cleanCss = require('gulp-clean-css');
const ngAnnotate = require('gulp-ng-annotate');


gulp.task('test', function(){
  console.log("let's assume everything is going great");
})


function rebuildProject(){
  return gulp.src('./app/*.html')
    .pipe(usemin({
      css: [ ],
      html: [ htmlmin({ collapseWhitespace: true }) ],
      js: [ babel({presets: ['es2016'], "plugins": ["transform-es2015-template-literals"]}), ngAnnotate(), uglify()],
      inlinejs: [ uglify() ],
      inlinecss: [ cleanCss(), 'concat' ]
    }))
    .pipe(gulp.dest('dist/'));
}

// Regular build for deployment
gulp.task('build', rebuildProject);


// Static server
gulp.task('default', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    rebuildProject();

    gulp.watch("**/*.*", {cwd: 'app'}).on('change', function(){

      rebuildProject().on('end', browserSync.reload);
      // browserSync.reload();
    });
});