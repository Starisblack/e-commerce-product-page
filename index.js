// product quantity

var buttonPlus = $('.increase-btn');
var buttonMinus = $('.decrease-btn');
var quantityInput = $('.quantity');

buttonPlus.click(function() {
  quantityInput.val(parseInt(quantityInput.val()) + 1); // `parseInt` converts the `value` from a string to a number
});

buttonMinus.click(function() {
  quantityInput.val(parseInt(quantityInput.val()) - 1);

});



// product images lightbox slide show

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}



// add items to cart

document.querySelector(".cart-button").addEventListener("click", function() {
  quantityInsert = document.querySelector(".quantity");
  quanityValue = Number(quantityInsert.value);

  if (quanityValue >= 1) {
    document.querySelector(".cart-count").style.display = "block";
    document.querySelector(".cart-count").innerHTML = quanityValue;
    document.querySelector(".amt-cal").innerHTML = "$125 " + "x " + quanityValue;
    calTotalAmt();
  } else {

  }


});


function calTotalAmt() {
  quantityInsert = document.querySelector(".quantity");
  quanityValue = Number(quantityInsert.value);
  totalAmt = "125" * quanityValue;
  document.querySelector(".price-cart").innerHTML = "$" + totalAmt.toFixed(2);
}

// cart items detail

document.querySelector(".cart-img").addEventListener("click", function() {

  countItem = document.querySelector(".cart-count").innerHTML;
  if (countItem <= 0) {
    document.querySelector(".empty-cart").style.display = "block";
  } else if (countItem >= 1) {
    document.querySelector(".cart-pop").style.display = "block";
  }

});


// delete cart items

document.querySelector(".delete").addEventListener("click", function() {
  document.querySelector(".cart-pop").style.display = "none";
  document.querySelector(".cart-count").innerHTML = 0;
  document.querySelector(".cart-count").style.display = "none";
  inputValue();
});


function inputValue() {
  var quantityInsert = document.querySelector(".quantity");
  quantityInsert.value = 0;
}


// delete empty cart pop up
document.querySelector(".close-empty-cart").addEventListener("click", function() {
  document.querySelector(".empty-cart").style.display = "none";
});



// hide cart icon on mobile view
document.querySelector(".navbar-toggler-icon").addEventListener("click", function() {

  var x = document.querySelector(".cart-img");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});
