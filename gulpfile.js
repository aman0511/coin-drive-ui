(function() {
    var gulp = require('gulp'),
        gp_connect = require('gulp-connect'),
        gp_concat = require('gulp-concat'),
        gp_rename = require('gulp-rename'),
        gp_uglify = require('gulp-uglify'),
        gp_sourcemaps = require('gulp-sourcemaps'),
        eslint = require('gulp-eslint'),
        concatCss = require('gulp-concat-css'),
        uglifycss = require('gulp-uglifycss'),
        sass = require('gulp-sass');

    gulp.task('sass', function () {
      return gulp.src('assets/sass/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('assets/css'));
    });

    gulp.task('connect', function() {
        gp_connect.server({
            port: 4000,
            host:"0.0.0.0"
        })
    })

    gulp.task('cssconcat', function () {
      return gulp.src('assets/**/*.css')
        .pipe(gp_sourcemaps.init())
        .pipe(concatCss("deliveryapp.css"))
        .pipe(gulp.dest('dist/css'))
        .pipe(gp_rename('deliveryapp.min.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest('dist/css'));
    });

    gulp.task('lintcss', function() {
        return gulp.src('app/**/*.css')
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
    });

    gulp.task('lint', function() {
        return gulp.src('app/**/*.js')
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
    });

    gulp.task('scripts', function() {
        return gulp.src('app/**/*.js')
            .pipe(gp_sourcemaps.init())
            .pipe(gp_concat('deliveryapp.js'))
            .pipe(gulp.dest('dist/js'))
            .pipe(gp_rename('deliveryapp.min.js'))
            .pipe(gp_uglify({ mangle: false })
            .on('error', function(e){
                  console.log(e);
                })
            )
            .pipe(gulp.dest('dist/js'));
    });

    gulp.task('watch', function() {
        gulp.watch('assets/sass/**/*.scss', ['sass']);
        gulp.watch('assets/**/*.css',['lintcss','cssconcat']);
        gulp.watch('assets/*.css',['lintcss','cssconcat']);
        gulp.watch('app/**/*.js', ['lint','scripts']);
        gulp.watch('app/*.js', ['lint','scripts']);
        gulp.watch('gulpfile.js', ['lint', 'scripts']);
    })

    gulp.task('default', ['lint', 'lintcss', 'scripts', 'watch', 'connect', 'cssconcat', 'sass'])

})();
