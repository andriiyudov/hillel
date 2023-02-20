const gulp = require('gulp');
const sass = require('sass');
const gulpSass = require('gulp-sass');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

const scssCompiler = gulpSass(sass);

const SRC_FOLDER = './src';
const BUILD_FOLDER = './build';

const JS_FILES_PATH = SRC_FOLDER + '/**/*.js';
const SCSS_FILES_PATH = SRC_FOLDER + '/**/*.scss';

const gulpJSCompilation = async () => {
    gulp.src(JS_FILES_PATH)
        // .pipe(babel())
        .pipe(uglify())
        .pipe(concat('result.js'))
        .pipe(gulp.dest(BUILD_FOLDER))
};

const gulpSassCompilation = async () => {
    gulp.src(SCSS_FILES_PATH)
        .pipe(scssCompiler())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(BUILD_FOLDER))
}

gulp.task('js', gulpJSCompilation);
gulp.task('scss', gulpSassCompilation);

gulp.task('watch-scss', () => {
    gulp.watch(SCSS_FILES_PATH, gulpSassCompilation);
});
gulp.task('watch-js', () => {
    gulp.watch(JS_FILES_PATH, gulpJSCompilation);
});

gulp.task('watch', gulp.parallel('watch-js', 'watch-scss'));

gulp.task('default', gulp.parallel('js', 'scss'));
