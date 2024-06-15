'use strict';

const gulp = require('gulp');

async function buildStyles(cb) {
    const sass = (await import('gulp-sass')).default(require('sass'));
    const autoprefixer = (await import('gulp-autoprefixer')).default;
    const sourcemaps = (await import('gulp-sourcemaps')).default;

    gulp.src('./style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./stylesheet'));
    cb();
}

function watchScss() {
    gulp.watch('./style.scss', buildStyles);
}

gulp.task('default', watchScss);
gulp.task('buildStyles', buildStyles);
