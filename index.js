let fontSizeDropdown = document.getElementById('font-size');
let heading = document.getElementById('heading');

fontSizeDropdown.addEventListener('change', function() {
    heading.style.fontSize = fontSizeDropdown.value;
});

// Set initial font size
heading.style.fontSize = fontSizeDropdown.value;

let fontfamilyDropdown = document.getElementById('font-family');
fontfamilyDropdown.addEventListener('change', function() {
    heading.style.fontFamily = fontfamilyDropdown.value;
});
// Set initial font family
heading.style.fontFamily = fontfamilyDropdown.value;

let fontcolorDropdown = document.getElementById('font-color');
fontcolorDropdown.addEventListener('change', function() {
    heading.style.color = fontcolorDropdown.value;
});
// Set initial font color
heading.style.color = fontcolorDropdown.value;





const textInput = document.getElementById('text-input');
const maxChars = 200;
const charCount = document.getElementById('char-count');

textInput.maxLength = maxChars;
textInput.maxLength = maxChars;

textInput.addEventListener('input', function() {
    charCount.textContent = `${textInput.value.length} / ${maxChars}`;
});
// Set initial character count
charCount.textContent = `${textInput.value.length} / ${maxChars}`;









const images = [
     "https://i.pinimg.com/736x/61/53/72/6153724d9fbc86a3667eb14db465d286.jpg",
     "https://i.pinimg.com/736x/62/a4/aa/62a4aa274httpsaeb50aff62393163fe34511.jpg",
     "https://i.pinimg.com/736x/62/a4/aa/62a4aa274httpsaeb50aff62393163fe34511.jpg",
    ];
        
let currentIndex = 0;

 const carouselImage = document.getElementById('carousel-image');
 const prevButton = document.getElementById('prev');
 const nextButton = document.getElementById('next');

 function updateImage() {
         carouselImage.src = images[currentIndex];
 }

 prevButton.addEventListener('click', () => {
     currentIndex = (currentIndex - 1 + images.length) % images.length;
     updateImage();
 });

  nextButton.addEventListener('click', () => {
       currentIndex = (currentIndex + 1) % images.length;
       updateImage();
 });







    
