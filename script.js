

function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}

//console.log(show());

function animationRubric() {
    anime({
        targets: '#headline path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2800,
        delay: function(el, i) {return i * 250},
        direction: 'alternate',
        loop: false
    });
}
document.addEventListener('DOMContentLoaded', animationRubric);

function addToBasket(product) {
    let basket = {};
    console.log("i början: ", basket[product]);
//    basket[product] === 'undefined' ? basket[product] = 1 : basket[product]++;
    
    switch (!basket.hasOwnProperty(product)) {
        case true:
            basket[product] = 1;
        default:
            basket[product] = basket.value+1;
    }
    console.log("basket = ", basket[product]);

    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    console.log("tömd? ", document.cookie);

    document.cookie = basket;
    let test = document.cookie;
    console.log("nya värden: ", test.key);
}

async function showBasket() {
    /*try {
        let getFile = await fetch("items.json");
        let data = await getFile.text();
        console.log("Data från json ", data);
    } catch (error) {
        console.log(error);
    }*/
    
    fetch("items.txt")
                .then((res) => {
                    if (!res.ok) {
                        throw new Error
                            (`HTTP error! Status: ${res.status}`);
                    }
                    return res.text();
                })
                .then((data) =>
                    console.log(data))
                .catch((error) =>
                    console.error("Unable to fetch data:", error));
}

function addCookies(basket) {
    document.cookie = basket;
}