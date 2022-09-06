const Movement = 40;
const buttonContainer = document.getElementsByClassName("button-container")[0];
const button = document.getElementsByClassName("button-to-chase")[0];
const mousePosition = {
    leftTop: 1,
    top: 2,
    rightTop: 3,
    left: 4,
    right: 5,
    leftBottom: 6,
    bottom: 7,
    rightBottom: 8
};

function getMousePosition(event) {

    const buttonTopSide = buttonContainer.offsetTop + button.offsetTop;
    const buttonLeftSide = buttonContainer.offsetLeft + button.offsetLeft;
    const buttonRightSide = buttonLeftSide + button.offsetWidth;
    const buttonBottomSide = buttonTopSide + button.offsetHeight;

    const mousePositionX = event.x;
    const mousePositionY = event.y;

    const mouseIsOnTop = mousePositionY <= buttonTopSide && mousePositionX >= buttonLeftSide && mousePositionX <= buttonRightSide;
    const mouseIsOnBottom = mousePositionY >= buttonBottomSide && mousePositionX >= buttonLeftSide && mousePositionX <= buttonRightSide;
    const mouseIsOnLeft = mousePositionX <= buttonLeftSide && mousePositionY >= buttonTopSide && mousePositionY <= buttonBottomSide;
    const mouseIsOnRight = mousePositionX >= buttonRightSide && mousePositionY >= buttonTopSide && mousePositionY <= buttonBottomSide;

    const mouseIsOnLeftTop = mousePositionY <= buttonTopSide && mousePositionX <= buttonLeftSide;
    const mouseIsOnRightTop = mousePositionY <= buttonTopSide && mousePositionX >= buttonRightSide;
    const mouseIsOnLeftBottom = mousePositionY >= buttonBottomSide && mousePositionX <= buttonLeftSide;
    const mouseIsOnRightBottom = mousePositionY >= buttonBottomSide && mousePositionX >= buttonRightSide;

    if (mouseIsOnLeftTop) {
        return mousePosition.leftTop;
    }
    if (mouseIsOnRightTop) {
        return mousePosition.rightTop;
    }
    if (mouseIsOnLeftBottom) {
        return mousePosition.leftBottom;
    }
    if (mouseIsOnRightBottom) {
        return mousePosition.rightBottom;
    }
    if (mouseIsOnTop) {
        return mousePosition.top;
    }
    if (mouseIsOnBottom) {
        return mousePosition.bottom;
    }
    if (mouseIsOnLeft) {
        return mousePosition.left;
    }
    if (mouseIsOnRight) {
        return mousePosition.right;
    }
}

function moveButton(event) {

    const mouseFinalPosition = getMousePosition(event);
    console.log(mouseFinalPosition);
    switch (mouseFinalPosition) {
        case mousePosition.top:
            buttonContainer.style.top = `${buttonContainer.offsetTop + Movement}px`;
            break;
        case mousePosition.bottom:
            buttonContainer.style.top = `${buttonContainer.offsetTop - Movement}px`;
            break;
        case mousePosition.left:
            buttonContainer.style.left = `${buttonContainer.offsetLeft + Movement}px`;
            break;
        case mousePosition.right:
            buttonContainer.style.left = `${buttonContainer.offsetLeft - Movement}px`;
            break;
        case mousePosition.leftTop:
            buttonContainer.style.left = `${buttonContainer.offsetLeft + Movement}px`;
            buttonContainer.style.top = `${buttonContainer.offsetTop + Movement}px`;
            break;
        case mousePosition.leftBottom:
            buttonContainer.style.left = `${buttonContainer.offsetLeft + Movement}px`;
            buttonContainer.style.top = `${buttonContainer.offsetTop - Movement}px`;
            break;
        case mousePosition.rightTop:
            buttonContainer.style.left = `${buttonContainer.offsetLeft - Movement}px`;
            buttonContainer.style.top = `${buttonContainer.offsetTop + Movement}px`;
            break;
        case mousePosition.rightBottom:
            buttonContainer.style.left = `${buttonContainer.offsetLeft - Movement}px`;
            buttonContainer.style.top = `${buttonContainer.offsetTop - Movement}px`;
            break;
    }
}

function fromCornerToMid() {
    buttonContainer.style.left = `${document.body.offsetWidth / 2}px`;
    buttonContainer.style.top = `${document.body.offsetHeight / 2}px`;
}

buttonContainer.onmouseover = (event) => moveButton(event);
button.onmouseover = () => fromCornerToMid("button-container");
