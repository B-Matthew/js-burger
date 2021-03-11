
calculateBtn = document.getElementById("calculate");

var coupons = [
  "Cy0M5mqt",
  "6cewtIYZ",
  "PjmBwRjL",
  "I8KvfaKp",
  "yxgrvCF9",
  "SEawEX8D",
  "dOCT0RaA",
  "L87J53aF",
  "KGL41HYX",
  "PUzryOtN",
  "RAUL è il best PIRATA"
];

var finded = false;

calculateBtn.addEventListener('click', function() {
  var price = 7.50;
  var nameBurg = document.getElementById("name-burg").value;

  if (nameBurg.length < 1) {

    alert("Prego, inserire il nome del tuo panino");
  }else {
    // SEZIONE INGREDIENTI
    var ingreds = document.getElementsByClassName("checkboxes");
    for (var i = 0; i < ingreds.length; i++) {

      var ingred = ingreds[i];
      var isChecked = ingred.checked;
      sumIngred = parseInt(ingred.dataset.ing);

      if (isChecked) {

        price = sumIngred + price;
      }
    }

    // SEZIONE COUPON
    var coupon = document.getElementById("coupon").value;

    for (var i = 0; i < coupons.length; i++) {

      var codeCoupon = coupons[i];
      if (codeCoupon == coupon) {

        finded = true;
      }
    }
    if (finded) {

      price = price * 0.90;
    }

    finalPrice = document.getElementById("price");
    finalPrice.innerHTML = price.toFixed(2);
  }
})
