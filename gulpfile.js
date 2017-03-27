
const   gulp        = require('gulp'),
        csso        = require('gulp-csso'),
        uglify      = require('gulp-uglify'),
        pug         = require('gulp-pug'),
        concat      = require('gulp-concat'),
        browserSync = require('browser-sync'), // Livereload plugin needed: https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
        reload      = browserSync.reload,
        path        = require('path'),
        rename      = require('gulp-rename'),
        autoprefixer = require('gulp-autoprefixer'),
        pump = require('pump'),
        stylus = require('gulp-stylus'),
        notify = require("gulp-notify"),
        plumber = require('gulp-plumber');

gulp.task('styles', () => {
    return gulp.src('src/**/styles.styl')
        .pipe(stylus({
            'include css': true
        }))
        // .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .on("error", notify.onError({
            message: "Error: <%= error.message %>",
            title: "Error running something"
        }))
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        // .pipe( csso() )
        .pipe( rename('bundle.min.css') )
        .pipe( gulp.dest('dist/assets/css') )
        .pipe( browserSync.reload({
            stream: true
        }))
})

gulp.task('styles', () => {
    return gulp.src('src/**/styles.styl')
        .pipe(stylus({
            'include css': true
        }))
        // .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .on("error", notify.onError({
            message: "Error: <%= error.message %>",
            title: "Error running something"
        }))
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        // .pipe( csso() )
        .pipe( rename('bundle.min.css') )
        .pipe( gulp.dest('wp-content/themes/safederal/css') )
        .pipe( browserSync.reload({
            stream: true
        }))
})

gulp.task('js', function (cb) {
  pump([
        gulp.src(['src/assets/scripts/vendor/*.js','src/assets/scripts/client/*.js','!src/assets/bemto/**/*.js']),concat('bundle.min.js'),
        gulp.dest('wp-content/themes/safederal/scripts')
    ],
    cb
  );
});



gulp.task('indexTemplate', function() {
  return gulp.src('src/pages/*.pug')
    .pipe(pug({
      pretty: true,
      basedir: 'src'
    }))
    .pipe(gulp.dest('wp-content/themes/safederal'))
});

gulp.task('styles-watch', ['styles'], reload);

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'wp-content/themes/safederal',
            open: false
        },
    })
})

/**
 * Serve and watch the pug files for changes
 */
gulp.task('default', ['indexTemplate','js','styles', 'browserSync'], function() {
    gulp.watch(['src/**/*.styl','src/**/*.css'], ['styles-watch']);
    gulp.watch('src/**/*.pug', ['indexTemplate']);
    gulp.watch('src/**/*.js', ['js']);
});

