var link = document.querySelectorAll(".make-order-btn");
var overlay = document.querySelector(".modal__overlay");
var makeOrder = document.querySelector(".modal");
var form = makeOrder.querySelector("form");
var close = document.querySelector(".modal__overlay");
var size = makeOrder.querySelector("[name=size]");
var storageName = localStorage.getItem("name");

for (var i = 0; i < link.length; i++)
{
  link[i].addEventListener(
    "click", function(event)
    {
      event.preventDefault();
      overlay.classList.add("modal__overlay--show");
      makeOrder.classList.add("modal--show");
    });
  }
      if(storageName)
      {
        name.value = storageName;
      }

close.addEventListener(
  "click", function(event)
  {
    event.preventDefault();
    makeOrder.classList.remove("modal--show");
    overlay.classList.remove("modal__overlay--show");
  });
