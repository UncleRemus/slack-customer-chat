import gulp from 'gulp';
import browser from 'browser-sync';

const port = process.env.SERVER_PORT || 8080;

// Starts a BrowerSync instance
gulp.task('serve', () => {
  browser.init({ server: './build', port });
});

gulp.task('default', ['serve']);
