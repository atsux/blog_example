const gulp = require('gulp');
const jasmine = require('gulp-jasmine');

gulp.task('default', () =>
    gulp.src('tests/**/*.js')
        .pipe(jasmine())
);

gulp.task('tests', () => {
  gulp.src('tests/**/*.js')
      .pipe(jasmine());
  }
);

gulp.task('watch', function () {
  gulp.watch('**/*.js', ['tests']);
});
