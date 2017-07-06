'use strict';
import gulp from 'gulp';
import iconfont from 'gulp-iconfont';
import consolidate from 'gulp-consolidate';


//Paths
const disticonfont = './src/fonts';

//Compile Sass and create Sourcemaps

gulp.task('iconfont', function() {
    return gulp.src('./src/assets/icons/*.svg')
        .pipe(iconfont({
            fontName: 'Iconfont',
            formats: ['woff', 'woff2'],
            appendCodepoints: true,
            prependUnicode: true,
            normalize: true,
            fontHeight: 1000,
            centerHorizontally: true
        }))
        .on('glyphs', function(glyphs, options) {
            gulp.src('./src/iconfont/_iconfont.scss')
                .pipe(consolidate('underscore', {
                    glyphs: glyphs,
                    fontName: options.fontName,
                    fontDate: new Date().getTime()
                }))
                .pipe(gulp.dest('./src/styles'));
        })
        .pipe(gulp.dest(disticonfont));
});

gulp.task('default', ['iconfont']);
