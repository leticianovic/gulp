const {series, parallel} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')
const stripJs = require('gulp-strip-comments')
const stripCss = require('gulp-strip-css-comments')
const htmlmin = require('gulp-htmlmin')
const babel = require('gulp-babel')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')(require('node-sass'))
const reload = browserSync.reload

function tarefasCSS(cb){
    gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
        './vendor/owl/dist/assets/owl.carousel.css',
        './vendor/jquery-ui/jquery-ui.css'
    ])
        .pipe(stripCss()) // remover comentarios do css
        .pipe(concat('libs.css')) // mescla os arquivos
        .pipe(cssmin()) // minifica css
        .pipe(rename({suffix: '.min'})) // libs.min.css
        .pipe(gulp.dest('./dist/css')) // cria arquivo em novo diretorio

    cb()
}

function tarefasSASS(cb){
    gulp.src('./src/scss/**/*.scss')
        .pipe(sass()) // Transforma o sass para css
        .pipe(gulp.dest('./dist/css'))

    cb()
}

function tarefasJS(cb){
    gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './vendor/owl/dist/owl.carousel.js',
        './vendor/jquery-mask/jquery.mask.js',
        './src/js/custom.js'
    ])
        .pipe(babel({comments: false, presets: ['@babel/env']}))
        .pipe(concat('scripts.js')) // mescla os arquivos
        .pipe(rename({suffix: '.min'})) // scripts.min.js
        .pipe(gulp.dest('./dist/js')) // cria arquivo em novo diretorio

    cb()
}

function tarefasImagem(){
    return gulp.src('./src/images/*')
        .pipe(imagemin({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/images'))
}

// POC - Proof of Concept
function tarefasHTML(cb){
    gulp.src('./src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'))

    cb()
}

gulp.task('serve', function(){
    browserSync.init({server: {baseDir: "./dist"}})

    gulp.watch('./src/**/*').on('change', process) // repete o processo quando alterar algo em src
    gulp.watch('./dist/**/*').on('change', reload)
})

function end(cb){
    console.log("Tarefas concluídas!")
    
    cb()
}

const process = series(tarefasHTML, tarefasJS, tarefasCSS, tarefasSASS, end)

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem
exports.sass = tarefasSASS

exports.default = process