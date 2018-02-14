var link = document.querySelector(".make-order-btn");
var overlay = document.querySelector(".modal_overlay");
var writeus = document.querySelector(".modal");
var form = writeus.querySelector("form");
var close = document.querySelector(".modal_overlay")

var size = writeus.querySelector("[name=size]");

var storage_name = localStorage.getItem("name");

link.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal_overlay_show");
  writeus.classList.add("modal_show");

  if(storage_name) {
  name.value = storage_name;
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  writeus.classList.remove("modal_show");
  overlay.classList.remove("modal_overlay_show");
});
