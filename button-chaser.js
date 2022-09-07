const button = document.getElementsByClassName("button-to-chase")[0];
const projectcontainer = document.getElementsByClassName("project-container")[0];
const distanceBorder = 100;
const xBorder = 10;
const yBorder = 20;
const buttonRightSide = button.offsetLeft + button.offsetWidth;

onmousemove = function (e) {

  var buttonX = button.offsetLeft + (button.offsetWidth / 2);
  var buttonY = button.offsetTop + (button.offsetHeight / 2);
  var dX = e.clientX - buttonX;
  var dY = e.clientY - buttonY;
  var distance = Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));

  if (distance <= distanceBorder) {
    button.style.left = `${button.offsetLeft - dX}px`;
    button.style.top = `${button.offsetTop - dY}px`;
  }
  if (button.offsetLeft <= xBorder && button.offsetTop <= yBorder) {
    fromCornerToMid();
  }
  else if (button.offsetLeft <= xBorder && button.offsetTop >= (projectcontainer.offsetHeight - yBorder)) {
    fromCornerToMid();
  }
  else if (buttonRightSide >= (projectcontainer.offsetWidth - xBorder) && button.offsetTop <= yBorder) {
    fromCornerToMid();
  }
  else if (buttonRightSide >= (projectcontainer.offsetWidth - xBorder) && button.offsetTop >= (projectcontainer.offsetHeight - yBorder)) {
    fromCornerToMid();
  }
}

function fromCornerToMid() {

  button.style.left = `${document.body.offsetWidth / 2}px`;
  button.style.top = `${document.body.offsetHeight / 2}px`;
}
