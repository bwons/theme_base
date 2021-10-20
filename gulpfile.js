'use strict';
// Import specific gulp API functions
const { src, dest, watch, series, parallel } = require('gulp');
// Import required packages
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const imagemin = require('gulp-imagemin');
const urlversioner = require('gulp-css-url-versioner');

var paths = {
  js: 'scripts/**/*.js',
  css: 'css',
  maps: '.',
  sass: 'styles/**/*.scss',
  images: {
    original: 'images/original/**/*',
    optimized: 'images/optimized'
  }
};

var prefixer_config = {
  cascade: false
}

var imagemin_config = {
  progressive: true,
  interlaced: true,
  svgoPlugins: [{
    cleanupIDs: false
  }]
}

// SASS Production
function sassTask() {
  return src(paths.sass)
    .pipe(sass())
    .pipe(postcss([autoprefixer(prefixer_config), cssnano()]))
    .pipe(urlversioner())
    .pipe(dest(paths.css));
}


// SASS Development -- add sourcemaps
function sassDevTask(){
  return src(paths.sass)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(prefixer_config)]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.css));
}

// Watch Development - takes a task as argument. Use sassTask or sassDevTask
function watchTask() {
  watch(paths.sass, parallel(sassDevTask));
}

// Minify images and create SVG sprite
function imageTask() {
  return src(paths.images.original)
    .pipe(imagemin(imagemin_config))
    .pipe(dest(paths.images.optimized));
}

exports.images = imageTask;

exports.development = series(
  sassDevTask, watchTask
);

exports.production = series(
  imageTask, sassTask
);