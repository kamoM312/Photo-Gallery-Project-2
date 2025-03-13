// retrieve all gallery items' elements and attributes
const galleryItem = document.getElementsByClassName("gallery-item");

// create lightBox elements
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

// add classes for css styling of lightbox
lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fas", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fas", "fa-angle-right","lightbox-next");
lightBoxImg.classList.add("lightbox-img")

// assemble lightbox
lightBoxContainer.appendChild(lightBoxContent);
lightBoxContainer.appendChild(lightBoxImg);
lightBoxContainer.appendChild(lightBoxPrev);
lightBoxContainer.appendChild(lightBoxNext);

// add lightbox to html
document.body.appendChild(lightBoxContainer);

// set initial index on load
let index = 0;

// make click event work on every gallery item
for( i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", currentImage);
}

// get galleryItem image src for lightbox
// set img src of lightbox img to galleryItem
// reset index for slider when neccessary
function showLightBox(n) {
    if (n > galleryItem.length - 1) {
        index = 0;
    } if (n < 0) {
        index = galleryItem.length - 1;
    }

    let imageLocation = galleryItem[index].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
}

// get index of image to be displayed in lightbox
function currentImage() {
    lightBoxContainer.style.display = "grid";
    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}


// image slider
function sliderImage(n) {
    showLightBox(index += n);
}

function prevImage() {
    sliderImage(-1);
}

function nextImage() {
    sliderImage(1);
}

lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

// close lightbox
function closeLightBox() {
    if( this === event.target) {
        lightBoxContainer.style.display = "none";
    }
}

// lightBoxContainer.addEventListener("click", closeLightBox);
lightBoxContent.addEventListener("click", closeLightBox);