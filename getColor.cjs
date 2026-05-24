const Jimp = require('jimp');

async function getColor() {
  const image = await Jimp.read('c:\\Users\\Ady\\Desktop\\magnu-site-v2\\public\\logo.png');
  let brightestGreen = { r: 0, g: 0, b: 0, val: 0 };
  
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    const a = this.bitmap.data[idx + 3];
    
    if (a > 10) { // Not fully transparent
      // We are looking for neon green: High G, low R, low B
      if (g > r && g > b) {
        const val = g - (r + b)/2;
        if (val > brightestGreen.val) {
          brightestGreen = { r, g, b, val };
        }
      }
    }
  });
  
  console.log(`RGB: ${brightestGreen.r}, ${brightestGreen.g}, ${brightestGreen.b}`);
  console.log('Hex: #' + ((1 << 24) + (brightestGreen.r << 16) + (brightestGreen.g << 8) + brightestGreen.b).toString(16).slice(1));
}

getColor().catch(console.error);
