var gulp = require('gulp'),
    gls = require('gulp-live-server'),
    connect = require('gulp-connect'), // runs a local dev server
    browserify = require('browserify'),
    babelify = require('babelify'),
    concat = require('gulp-concat'),
    source = require('vinyl-source-stream');


var config = {
    port: 7777,
    devBaseUrl: 'http:localhost',
    paths: {
        html: './src/*.html',
        css: [
            'node_modules/font-awesome/css/font-awesome.min.css',
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            'node_modules/toastr/build/toastr.css',
            './src/**/*.css'],
        js: ['./src/**/*.js'],
        fonts: [
            'node_modules/font-awesome/fonts/*',
            'node_modules/bootstrap/fonts/*'],
        images: ['./src/img/**/*'],
        mainJs: './src/main.react.js',
        dist: './dist'
    }
};

// starts a local development server
gulp.task('connect', function(){
    connect.server({
        root: config.paths.dist,
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

//gulp.task('live-server', function(){
//    var server = gls.new(config.paths.server);
//    server.start();
//});

gulp.task('html', function(){
    gulp.src(config.paths.html).pipe(gulp.dest(config.paths.dist)).pipe(connect.reload());
});

gulp.task('fonts', function(){
    gulp.src(config.paths.fonts).pipe(gulp.dest(config.paths.dist + '/fonts'));
});

gulp.task('images', function(){
    gulp.src(config.paths.images).pipe(gulp.dest(config.paths.dist + '/img'));

    // publish fav icon
    gulp.src('src/favicon.ico').pipe(gulp.dest(config.paths.dist));
});

gulp.task('css', function(){
    gulp.src(config.paths.css).pipe(concat('bundle.css')).pipe(gulp.dest(config.paths.dist)).pipe(connect.reload());
});

gulp.task('js', function(){
    browserify({ entries: config.paths.mainJs, debug: true })
        //.transform(reactify)
        .transform(babelify, {presets: ["es2015", "react"]})
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('watch', function(){
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);
    gulp.watch(config.paths.css, ['css']);
});

gulp.task('default', ['html', 'fonts', 'css', 'js', 'images', 'connect', 'watch']);