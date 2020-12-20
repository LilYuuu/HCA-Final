const spotlight = document.getElementById("spotlight");
const spotlight_child = document.getElementById("spotlight-child");
// const main = document.getElementById("main");
document.body.addEventListener("mousemove", moveSpotlight);
document.body.addEventListener("touchmove", moveSpotlight);
function moveSpotlight(e) {
  let pos, x, y;
  e.preventDefault();
  x = e.clientX - 200;
  y = e.clientY - 250;
  spotlight.style.left = x + "px";
  spotlight.style.top = y + "px";
  spotlight_child.style.left = x + "px";
  spotlight_child.style.top = y + "px";
}

// //this is a sample flashlight effect

// $(document).ready(function() {
//   $(this).mousemove(function(e) {
//     $("#light").css({
//       "top": e.pageY - 250,
//       "left": e.pageX - 250
//     })
//   })
// })
