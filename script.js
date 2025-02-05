// Shows and hides pages on product page.
function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}

// Adds product to the basket. If the product is already in the basket, it increments the amount.
function addToBasket(product) {
    let basket = {};

    if (!sessionStorage.hasOwnProperty(product)) {
        basket[product] = 1;
        sessionStorage.setItem(product, basket[product]);
    } else {
        let productAmount = sessionStorage.getItem(product);
        productAmount++;
        sessionStorage.setItem(product, productAmount);
    }
}

// Retrives products from session storage and displays them.
function showBasket() {
    document.getElementById("basketPopup").style.display = "block";
    let showCake = sessionStorage.getItem("cake");
    let showRaspberryRoll = sessionStorage.getItem("raspberryRoll");
    let showMuffin = sessionStorage.getItem("muffin");
    let chocoPrice = showCake * 50;
    let raspberryPrice = showRaspberryRoll * 35;
    let muffinPrice = showMuffin * 25;
    let total = chocoPrice + raspberryPrice + muffinPrice;

    document.getElementById('displayChocolate').innerHTML = showCake;
    document.getElementById('displayRaspberry').innerHTML = showRaspberryRoll;
    document.getElementById('displayMuffin').innerHTML = showMuffin;
    document.getElementById('totalPrice').innerHTML = total;
}

// Hide the popup basket
function hideBasket() {
    document.getElementById("basketPopup").style.display = "none";
}

document.getElementById('clearBasket').addEventListener('click', function() {
    sessionStorage.clear();
});

// Slideshow on product page.
slideIndex = 0;
slideShow();
function slideShow() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(slideShow, 5000);
}