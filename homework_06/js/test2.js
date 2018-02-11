window.onload = function() {
    var euro,
        usd,
        EURO,
        USD,
        euroToUsd;

    EURO = 33.23;
    USD = 27.12;

    getEuro = +prompt("Write EURO");
    getUsd = +prompt("Write USD");

    euroToUah = (EURO * getEuro).toFixed(0);
    usdToUah = (USD * getUsd).toFixed(0);
    euroToUsd = (EURO / USD).toFixed(3)

    console.log(getEuro + " euros are equal " + euroToUah + " UAH " + getUsd + " dollars are equal " + usdToUah + " UAH, one euro is equal " + euroToUsd + " dollars.");
};