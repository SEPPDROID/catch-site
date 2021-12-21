/* const nav = document.querySelector('#nav');
let navTop = navbar.offsetTop;

function fixedNav() {
  if (window.scrollY >= navTop) {    
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');    
  }
}

window.addEventListener('scroll', fixedNav);
 */
 
/*  ===============================================
 Hide navbar on scrolldown, show on scrollup.
 =============================================== */
 
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-52px";
  }
  prevScrollpos = currentScrollPos;
} 

/*  ===============================================
 Drop list on click, dropdownbtn (cur. links).
 =============================================== */
function DropFunc() {
  document.getElementById("DropList").classList.toggle("show");
}
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var DropList = document.getElementById("DropList");
    if (DropList.classList.contains('show')) {
      DropList.classList.remove('show');
    }
  }
}