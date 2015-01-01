// Gulp & plugins
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	autoprefixer = require ('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	notify = require("gulp-notify");

// Sources
var src = {
	images: 'app/src/images/*',
	sass: 'app/src/**/*.scss',
	php: 'app/**/*.php',
	js: 'app/src/js/**/*.js'
}

// Destinations
var dest = {
	images: 'app/dest/images',
	css: 'app/',
	js: 'app/dest/js'
}



// TASKS
// Minify js
gulp.task('scripts', function() {

	return gulp.src(src.js)
		.pipe(uglify())
		.on("error", notify.onError({
			title: "Uglify JS error",
			message: "<%= error.message %>"
		}))
		.pipe(gulp.dest(dest.js))

});

// Compile SASS
gulp.task('styles', function () {

	return gulp.src(src.sass)
		.pipe(sass({
			style: 'expanded',
			errLogToConsole: false,
			onError: function(err) {
				return notify().write(err);
			}
		}))
		.pipe(gulp.dest(dest.css))
		.pipe(reload({
			stream:true
		}))
		.pipe(notify('SASS approves this syntax!'));

});

// Compile SASS.min
gulp.task('styles-min', function () {

	return gulp.src(src.sass)
		.pipe(sass({
			style: 'compressed',
			errLogToConsole: false,
			onError: function(err) {
				return notify().write(err);
			}
		}))
		.pipe(autoprefixer())
		.pipe(gulp.dest(dest.css))

});

// Optimize images
gulp.task('images', function () {
	return gulp.src(src.images)
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{
				removeViewBox: false,
				cleanupIDs: false,
				cleanupAttrs: false
			}],
			use: [pngquant()],
			onError: function(err) {
				return notify().write(err);
			}
		}))
		.pipe(gulp.dest(dest.images))
});

// Browser-sync
gulp.task('browser-sync', function() {
	browserSync({
		proxy: "localhost:8888",
		ghostMode: false,
		notify: false,
		open: "external"
	});
	gulp.watch(src.php, reload);
	gulp.watch(['style.css'], reload);
	gulp.watch(dest.images, reload);
	gulp.watch(src.js, reload);
});

// Watch
gulp.task('watch', function() {
	gulp.watch(src.sass, ['styles']);
})

// Default
gulp.task('default', ['scripts', 'styles', 'browser-sync'], function(){
	gulp.watch(src.sass, ['styles']);
	gulp.watch(src.js, ['scripts']);
});

// Production
gulp.task('production', ['scripts', 'styles-min', 'images']);