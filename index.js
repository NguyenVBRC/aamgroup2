const cube = document.getElementById("cube");
const triangle = document.getElementById("triangle");
const circle = document.getElementById("circle");
let boolean = false;

function moveShape() {
  !boolean ? (cube.style.top = "20rem") : (cube.style.top = "0rem");
  !boolean ? (triangle.style.top = "0rem") : (triangle.style.top = "20rem");
  !boolean
    ? (circle.style.transform = "rotate(360deg)")
    : (circle.style.transform = "rotate(0deg)");
  boolean ? (boolean = false) : (boolean = true);
  console.log(boolean);
}

cube.addEventListener("click", moveShape);
