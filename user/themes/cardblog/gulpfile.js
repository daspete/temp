var gulp = require('gulp'),
    util = require('gulp-util'),
    sass = require('gulp-sass'),
    gulpif = require('gulp-if'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream');


//////////////////////////////////////////////////////////////////
// ENV vars
////////////////////////////////////////////////////////////////
var production = (util.env.production ? true : false);


//////////////////////////////////////////////////////////////////
// SASS compiler
////////////////////////////////////////////////////////////////
gulp.task('sass', function(){
    gulp.src('src/sass/styles.scss')
        .pipe(gulpif(!production, sourcemaps.init()))
        .pipe(sass.sync({ outputStyle: 'compressed' }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulpif(!production, sourcemaps.write('.')))
    .pipe(gulp.dest('css/'));
});


//////////////////////////////////////////////////////////////////
// ES6 Javascript builder
////////////////////////////////////////////////////////////////
gulp.task('js', function(){
    var extension = 'js';
    var presets = [ 'es2015' ];

    var _browserify = browserify({
        entries: 'src/js/app.' + extension,
        debug: production ? false : true,
        transform: [
            babelify.configure({
                presets: presets
            })
        ]
    });

    return _browserify.bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulpif(!production, sourcemaps.init({ loadMaps: true })))
        .pipe(uglify())
        .pipe(gulpif(!production, sourcemaps.write('.')))
        .pipe(gulp.dest('js'));
});


//////////////////////////////////////////////////////////////////
// Watcher
////////////////////////////////////////////////////////////////
gulp.task('watch', function(){
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/js/**/*.js', ['js']);
});


//////////////////////////////////////////////////////////////////
// Default task
////////////////////////////////////////////////////////////////
gulp.task('default', [
    'sass',
    'js',
    'watch'
]);