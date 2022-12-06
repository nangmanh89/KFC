var myIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 5000); // Change image every 2 seconds
}

//------------- hidden button when scrolls down-------------------

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    let btn = document.querySelector(".btn__oder");
    btn.style.visibility = "visible"
    btn.style.transition = "visibility 0s linear 0s"
  } else {
    document.querySelector(".btn__oder").style.visibility = "hidden";
  }
}


// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector(".btn__oder").style.display = "none";
//   } else {
//     document.querySelector(".btn__oder").style.display = "block";
//   }
//   prevScrollpos = currentScrollPos;
// }

