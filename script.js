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
}

function hideBasket() {
    document.getElementById("basketPopup").style.display = "none";
}
