const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');

function buildStyles() {
	return gulp
		.src('./styles/sass/index.scss')
		.pipe(sass())
		.pipe(gulp.dest('./styles/css'));
}

function minifyStyles() {
	return gulp
		.src('./styles/css/index.css')
		.pipe(cleanCss({ compatibility: 'ie8' }))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('./styles/css'));
}

function watchTask() {
	gulp.watch(
		['./styles/sass/*.scss'],
		gulp.series(buildStyles, minifyStyles)
	);
}

exports.default = gulp.series(buildStyles, minifyStyles, watchTask);

// to run, just type 'gulp' in CLI to produce and watch Sass/Scss files
