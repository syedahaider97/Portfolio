scrollButton = document.getElementById("ScrollToTop");

var prevScrollpos = window.pageYOffset;
var currentScrollPos = 0;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else if (prevScrollpos < currentScrollPos && currentScrollPos > 100) {
    document.getElementById("navbar").style.top = "-12vh";
  }
  prevScrollpos = currentScrollPos;

  if (currentScrollPos > 400) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};

function topFunction() {
    $('html, body').animate({ scrollTop: 0 }, 700);
}

