let img = document.images[0];
let nextButton = document.getElementById ('next');
let previousButton = document.getElementById ('previous')
let imgs = ['../../h1.jpg', '../../h2.jpg', '../../h3.jpg', '../../h4.jpg', '../../h5.jpg', '../../h6.jpg', '../../h7.jpg', '../../h8.jpg'];
img.count = 0;


nextButton.onclick = function () {
    if (img.count >= imgs.length - 1) 
        img.count = 0;
    img.count ++;
    img.src = imgs[img.count];
}

previousButton.onclick = function () {
    if (img.count<=0) 
        img.count = imgs.length;

    img.count --;
    img.src = imgs[img.count];
        
}