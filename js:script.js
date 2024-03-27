const prevButton = document.getElementById("prevButton")
const nextButton = document.getElementById("nextButton");
const gallery = document.querySelector(".gallery");
const images = [
  "https://upload.wikimedia.org/wikipedia/en/e/ed/Stephen_Sanchez_-_Angel_Face.png",
  "https://i.ebayimg.com/images/g/5GIAAOSwDPdkW80f/s-l1200.webp",
  "https://i.scdn.co/image/ab67616d0000b273eabddae72a3b1a5ed51d1ac6",
  "https://m.media-amazon.com/images/I/418gMPldpYL._UXNaN_FMjpg_QL85_.jpg",
  "https://m.media-amazon.com/images/I/61svAqvCsGL._AC_UF894,1000_QL80_.jpg"
];

let currentIndex = 0;


function displayImage(index) {
  gallery.style.transform = "rotateY(90deg)";
  setTimeout(function () {
    gallery.innerHTML = `<img src="${images[index]}" alt="Image ${index + 1}">`;
    gallery.style.opacity = 1;
    gallery.style.transform = "rotateY(0deg)";
  }, 500);
}

displayImage(currentIndex);

prevButton.addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  displayImage(currentIndex);
});

nextButton.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % images.length;
  displayImage(currentIndex);
});
