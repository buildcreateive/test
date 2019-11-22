const  gulp = require('gulp');
const  babel = require('gulp-babel');
const  eslint = require('gulp-eslint'); 
//var gulpDebug = require('gulp-debug');

gulp.task('default', async function() {
 //執行Eslint
  gulp.src(["es6/**/*.js","public/es6/**/*.js"])
    .pipe(eslint())
    .pipe(eslint.format());
 //node 來源
  gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
    //browser 來源
  gulp.src("public/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));
  });