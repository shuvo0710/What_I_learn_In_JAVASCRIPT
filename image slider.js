let photos = ["image/img1.jpg", "image/img2.jpg", "image/img3.jpg"];
let image = document.querySelector("img");
let count = 0;
function next() {
  count++;
  if (count >= photos.length) {
    count = 0;
    image.src = photos[count];
  } else {
    image.src = photos[count];
  }
}

function prev() {
  count--;
  if (count < 0) {
    count = photos.length - 1;
    image.src = photos[count];
  } else {
    image.src = photos[count];
  }
}
