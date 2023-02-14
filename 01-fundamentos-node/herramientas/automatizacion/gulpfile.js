const gulp = require('gulp')
const server = require('gulp-server-livereload')


gulp.task('build', function(callback){
  console.log('Construyendo el proyecto')
  setTimeout(callback, 1200)

})

gulp.task('serve', function(callback){
  gulp.src('www')
    .pipe(server({
      livereload: false,
      open: true
    })) 
})

