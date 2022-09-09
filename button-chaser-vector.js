const button = document.getElementsByClassName("button-to-chase")[0];
const projectContainer = document.getElementsByClassName("project-container")[0];
const distanceBorder = 100;
const xBorder = 10;
const yBorder = 20;

onmousemove = function (e) {

  var buttonX = button.offsetLeft + (button.offsetWidth / 2);
  var buttonY = button.offsetTop + (button.offsetHeight / 2);
  var VectorXpositionMouseToButton = e.clientX - buttonX;
  var VectorYpositionMouseToButton = e.clientY - buttonY;
  var distanceMouseToButton = Math.sqrt(Math.pow(VectorXpositionMouseToButton, 2) + Math.pow(VectorYpositionMouseToButton, 2));
  var buttonRightSide = button.offsetLeft + button.offsetWidth;
  let buttonIsInTopLeftCorner = button.offsetLeft <= xBorder && button.offsetTop <= yBorder;
  let buttonIsInBottomLeftCorner = button.offsetLeft <= xBorder && button.offsetTop >= (projectContainer.offsetHeight - yBorder);
  let buttonIsInTopRightCorner = buttonRightSide >= (projectContainer.offsetWidth - xBorder) && button.offsetTop <= yBorder;
  let buttonIsInBottomRightCorner = buttonRightSide >= (projectContainer.offsetWidth - xBorder) && button.offsetTop >= (projectContainer.offsetHeight - yBorder);

  if (distanceMouseToButton <= distanceBorder) {
    button.style.left = `${button.offsetLeft - VectorXpositionMouseToButton}px`;
    button.style.top = `${button.offsetTop - VectorYpositionMouseToButton}px`;
  }

  if (buttonIsInTopLeftCorner) {
    fromCornerToMid();
  }
  else if (buttonIsInBottomLeftCorner) {
    fromCornerToMid();
  }
  else if (buttonIsInTopRightCorner) {
    fromCornerToMid();
  }
  else if (buttonIsInBottomRightCorner) {
    fromCornerToMid();
  }
}

function fromCornerToMid() {
  button.style.left = `${document.body.offsetWidth / 2}px`;
  button.style.top = `${document.body.offsetHeight / 2}px`;
}
