const { src, dest, watch }  = require('gulp');
const scss   = require('gulp-sass');
const concat = require('gulp-concat');
// const browserSync = require('browser-sync');
function styles() {
    return src('app/scss/style.scss')
     .pipe(scss({outputStyle: 'expanded'}))
     .pipe(concat('style.min.css'))
     .pipe(dest('app/css'))
    //  .pipe(browserSync.stream())
}
function watching() {
    watch(['app/scss/**/*.scss'], styles)
    // watch(['app/*.html'].on('change', browserSync.reload));
}
function browsersync() {
    browsersync.init({
        server: {
            baseDir: 'app/'
        }
    });  
}
exports.styles = styles;
exports.watching = watching;
// exports.browsersync = browsersync;