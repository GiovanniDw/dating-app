const gulp = require('gulp');
const sass = require('gulp-sass');

var cssFolder = 'app/static/css'; // folder for final style.css/style-custom-prop-fallbac.css files
var scssFilesPath = 'app/static/scss/*.scss'; // scss files to watch

gulp.task('sass', function() {
    return gulp.src(scssFilesPath)
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest(cssFolder))
});

gulp.task('watch', function() {
    gulp.watch('app/static/scss/**.scss', gulp.series(['sass']));
    // Other watchers
})