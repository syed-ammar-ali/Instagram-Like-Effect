var box = document.querySelector("#post");
var love = document.querySelector("i");

box.addEventListener("dblclick", function () {
  love.style.transform = "translate(-50%, -50%) scale(1)";
  love.style.opacity = "0.8";
  setTimeout(() => {
    love.style.opacity = "0";
  }, 400);
  setTimeout(() => {
    love.style.transform = "translate(-50%, -50%) scale(0)";
  }, 500);
});
