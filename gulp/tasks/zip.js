import del from 'del';
import zipPlugin from 'gulp-zip';

export const zip = () => {
  del(`./${app.path.rootFolder}.zip`);
  return app.gulp
    .src(`${app.path.buildFolder}/**/*.*`, {}) //возможность создания карты исходников
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'ZIP',
          message: 'Error <%= errorr.message %>',
        })
      )
    )
    .pipe(zipPlugin(`${app.path.rootFolder}.zip`))
    .pipe(app.gulp.dest(`./`));
};
