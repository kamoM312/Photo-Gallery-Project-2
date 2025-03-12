const galleryItem = document.getElementsByClassName("gallery-item");

const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("div");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fas", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fas", "fa-angle-right ","lightbox");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContainer.appendChild(lightBoxImg);
lightBoxContainer.appendChild(lightBoxPrev);
lightBoxContainer.appendChild(lightBoxNext);
document.body.appendChild(lightBoxContainer);

let index = 1;

function showLightBox(n) {
    if (n < galleryItem.length) {
        index = 0;
    } if (n < 0) {
        index = galleryItem.length;
    }

    let imageLocation = galleryItem[index].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage() {
    lightBoxContainer.style.display = "block";
    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}

for( i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", currentImage);
}
