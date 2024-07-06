const { src, dest, watch, parallel} = require("gulp");

//CSS
const sass = (require("gulp-sass"))(require("sass"));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');

//Imágenes
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');
const sourcemaps = require('gulp-sourcemaps')

//Javascript
const terser = require('gulp-terser-js')


// CSS Compiler
function css(done){
  
  src('src/scss/**/*.scss')    // Identificar el archivo SASS
    .pipe(sourcemaps.init())
    .pipe(plumber())           
    .pipe(sass())              // Compilarlo
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest("build/css"));  // Almacenarla en el disco duro

  done(); // Callback que avisa a gulp cuando llegamos al final
}

// Imágenes ligeras
function imagenes(done){ 

  const opciones = {
    optimizationLevel: 3
  }

  src('src/img/**/*.{png,jpg}')
    .pipe( cache (imagemin(opciones) ) )
    .pipe( dest('build/img' ) )
  done();
}

// Image Converter
function versionWebp(done){

  const opciones = {
    quality: 50,
  };

  src('src/img/**/*.{png,jpg}')
    .pipe(webp(opciones))
    .pipe(dest('build/img'))

  done();
}

// Imágenes AVIF
function versionAvif(done){

  const opciones = {
    quality: 50,
  };

  src('src/img/**/*.{png,jpg}')
    .pipe(avif(opciones))
    .pipe(dest('build/img'))

  done();
}

// Compilar Javascript
function javascript(done) {
  src('src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/js'))

  done();
}
// Auto Save
function dev(done){
  watch('src/scss/**/*.scss', css);
  watch('src/js/**/*.js', javascript);

  done();
}

exports.css = css;
exports.js = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes, versionWebp, versionAvif, javascript, dev);
