var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    prefix = require('gulp-autoprefixer'),
    webserver  = require('gulp-webserver'),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify");



gulp.task('styles', function() {
  return sass('./css/greenroom.scss', {style: 'compact'})
    .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
    .pipe(gulp.dest('./css'));
});


gulp.task('webserver', function() {
    gulp.src('')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true,
            host: '127.0.0.1'
        }));
});




/*gulp.task('minifyJS', function(){
    return gulp.src([
        './js/controllers/!*.js',
		'./js/greenroom.js'
    ])
        .pipe(concat('gr.temp.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js/temp'));
});*/

/*gulp.task('concatFilesThatAreAlreadyMinified', function(){
    //these are already minified
    return gulp.src(
        [
            './js/lib/!*.js'
        ])
            .pipe(concat('gr_already_min.temp.min.js'))
            .pipe(gulp.dest('./js/temp'));

});*/




gulp.task('watch', function () {
    gulp.watch('css/**/*.scss', ['styles']);
/*    gulp.watch([
        './!**!/!*.js'
    ], ['minifyJS', 'concatFilesThatAreAlreadyMinified']);*/
});

gulp.task('default', ['styles', 'webserver', 'watch'], function(){
    console.log("Write some bitchin' code...");
});