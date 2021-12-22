/*  ===============================================
 Hide navbar on scrolldown, show on scrollup.
 =============================================== */
 var PrevScrollPos = window.pageYOffset;
window.onscroll = function() {
  var CurrentScrollPos = window.pageYOffset;
  if (PrevScrollPos > CurrentScrollPos || CurrentScrollPos == 0) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-322px";
  }
  PrevScrollPos = CurrentScrollPos;
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

/*  ===============================================
 Drop & show mobile menu links.
 =============================================== */
function BurgMenFunc() {
  var x = document.getElementById("navlinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 