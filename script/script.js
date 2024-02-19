window.onscroll = function () {
  scrollFunction();
};
let mybutton = document.getElementById("myBtn");

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // if(window.screenX)
    console.log(window.screen.availWidth < 576);
    if (window.screen.availWidth < 576) {
      document.getElementById("navbar").style.padding = "0px 0px";
    }
    mybutton.style.display = "block";
    document.getElementById("header-bottom").style.padding = "0px 0px";
  } else {
    if (window.screen.availWidth < 576) {
      document.getElementById("navbar").style.padding = "10px  0px";
    }
    document.getElementById("header-bottom").style.padding = "10px  0px";
    mybutton.style.display = "none";
  }
}

window.onscroll = function () {
  scrollFunction();
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let modeBtn = document.getElementById("light-dark");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  document.querySelector(".header_bottom").classList.toggle("dark");
  document.querySelectorAll("#theme").forEach((item) => {
    item.classList.toggle("dark");
  });
});

let header_links = document.getElementById("header_links");

function toogleMenu() {
  //   alert("ok");
  if (header_links.classList.contains("active")) {
    header_links.classList.remove("active");
  } else {
    header_links.classList.add("active");
  }
}
