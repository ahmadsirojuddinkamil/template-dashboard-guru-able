import webpack from 'webpack-stream';

export const js = () => {
  return app.gulp
    .src(app.path.src.js, { sourcemaps: app.isDev }) //возможность создания карты исходников
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'JS',
          message: 'Error <%= errorr.message %>',
        })
      )
    )
    .pipe(
      webpack({
        mode: app.isBuild ? 'production' : 'development',
        output: {
          filename: 'app.min.js',
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
};
