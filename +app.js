const sharp = require("sharp");

// Kompresja obrazu

const image = "./oryginal/image3.jpg";

async function compressed() {
  try {
    const metadata = await sharp(image)
        .jpeg({quality: 80})
        .toFormat("jpeg", { mozjpeg: true })
        .toFile("compressed/image-resized-compressed.jpeg");

    const metadata1 = await sharp(image)
        .toFormat("webp")
        .toFile("compressed/image-resized-compressed.webp");

        console.log(metadata)
        console.log(metadata1.size / 1000 )
    }

  catch (error) {
    console.log(error);
  }
}

compressed();

// Zmiana rozmiaru

async function resizeImage() {
    try {
        await sharp(image)
          .toFormat("jpeg", { mozjpeg: true })
          .resize(200, 200)
          .toFile("compressed/image-resized-compressed-200x200.jpeg");

        await sharp(image)
          .toFormat("webp")
          .resize(200, 200)
          .toFile("compressed/image-resized-compressed-200x200.webp");

      }

    catch (error) {
      console.log(error);
    }
  }

  resizeImage();

