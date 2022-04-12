let filterBtn = document.querySelectorAll(".dash .link-div");
let filterLink = document.querySelectorAll(".dash .lind-div a");
let filterDiv = document.querySelectorAll("#main .item");

filterBtn.forEach(function (link) {
  filterBtn.forEach((link) => {
    link.addEventListener("click", manageImgs);
  });
});

function manageImgs() {
  filterDiv.forEach(function (div) {
    div.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}
