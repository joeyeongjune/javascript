const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

/*
// Review 이미지 파일을 배경화면으로 설정 하기.
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("style");

bgImage.innerText = `body {background-image: url(img/${chosenImg}); background-position: center; background-repeat; background-size: cover}`;

document.head.appendChild(bgImage);
*/
