function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}

//console.log(show());

function addToBasket(product) {
    let basket = {};

    if (!sessionStorage.hasOwnProperty(product)) {
        basket[product] = 1;
        sessionStorage.setItem(product, basket[product]);
    } else {
        let productAmount = sessionStorage.getItem(product);
        productAmount++;
        console.log(productAmount, " går in i update");
        sessionStorage.setItem(product, productAmount);
    }
}

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

function hideBasket() {
    document.getElementById("basketPopup").style.display = "none";
}

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