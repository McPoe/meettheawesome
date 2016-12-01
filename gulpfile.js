const gulp = require('gulp');
var webserver = require('gulp-webserver');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');

gulp.task('default', ['webserver' , 'compress','uglify', 'watch']);

gulp.task('webserver', function() {
  gulp.src('./dist/')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: 'index.html'
    }));
});

gulp.task('compress', function () {
  return gulp.src('./src/style.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('uglify', function() {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('min_js'));
});

gulp.task('watch', function() {
    gulp.watch('js/**/*.js', ['uglify']);
});