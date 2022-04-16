// start in back to top and navbar
let containrToTop = document.getElementById("backToTop");
let btnToTop = document.getElementById("toTop");
let nav = document.getElementById("navbar");

window.onscroll = function () {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    containrToTop.style.bottom = "5%";
    nav.style.borderBottom = "4px solid #fee715";
  } else {
    containrToTop.style.bottom = "100%";
    nav.style.borderBottom = "none";
  }
  btnToTop.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
};
// end  in back to top and navbar

let filterBtn = document.querySelectorAll(".choose ul li");
let box = document.querySelectorAll(".box-product");

filterBtn.forEach((btn) => {
  btn.addEventListener("click", filter);
});

function filter() {
  box.forEach((boxProduct) => {
    boxProduct.style.display = "none";
  });
  document.querySelectorAll(this.dataset.filter).forEach((data) => {
    data.style.display = "block";
  });
  filterBtn.forEach((active) => {
    active.classList.remove("activeFilter");
    this.classList.add("activeFilter");
  });
}
