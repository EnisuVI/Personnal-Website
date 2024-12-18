const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
    const files = await imagemin(['public/img/*.{jpg,png}'], {
        destination: 'public/img/compressed',
        plugins: [
            imageminMozjpeg({ quality: 75 }),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    });

    console.log('Images compressed:', files);
})();