/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-undef */
const { src, dest } = require("gulp");
const imagemin = require("gulp-imagemin");

function minifyImages() {
  return src(["./images/**/*"])
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 60, progressive: true }),
        imagemin.optipng({ optimizationLevel: 6 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
        })
      ])
    )
    .pipe(dest("public/images"));
}
exports.minifyImages = minifyImages;
