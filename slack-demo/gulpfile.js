'use strict';

// Include Gulp & Tools
var gulp         = require('gulp');
var watch        = require('gulp-watch');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var runSequence  = require('run-sequence');
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;

// SASS
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(gulp.dest('./css'));
});

// Watch Files & Reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
  
  gulp.watch('./sass/**/*.scss', ['sass', reload]);
});

// Build
gulp.task('build', [], function() {
  runSequence('sass');
});

// Gulp Default
gulp.task('default', ['serve'], function() {
  gulp.start('build');
});
