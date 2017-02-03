var gulp = require('gulp');
var eslint = require('gulp-eslint');
var bootlint = require('gulp-bootlint');

gulp.task('eslint', function () {
    return gulp.src(['**/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
});

gulp.task('bootlint', function () {
    return gulp.src('./index.html')
        .pipe(bootlint());
});

gulp.task('default', ['eslint', 'bootlint'], function () {
});
