const Movement = 40;
button = document.getElementsByClassName("button-container")[0];
const mousePosition = {
    leftTop: 1,
    rightTop: 2,
    leftBottom: 3,
    rightBottom: 4,
};

function moveButton() {

    const buttonContainerPosLeft = button.offsetLeft;
    const buttonContainerPosTop = button.offsetTop;
    const mousePositionX = event.x;
    const mousePositionY = event.y;

    function getMousePosition() {

        const mouseIsOnTop = mousePositionY <= buttonContainerPosTop;
        const mouseIsOnBottom = mousePositionY >= buttonContainerPosTop;
        const mouseIsOnLeft = mousePositionX <= buttonContainerPosLeft;
        const mouseIsOnRight = mousePositionX >= buttonContainerPosLeft;

        const mouseIsOnLeftTop = mouseIsOnLeft && mouseIsOnTop;
        const mouseIsOnRightTop = mouseIsOnRight && mouseIsOnTop;
        const mouseIsOnLeftBottom = mouseIsOnLeft && mouseIsOnBottom;
        const mouseIsOnRightBottom = mouseIsOnRight && mouseIsOnBottom;

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
    }

    const mouseFinalPosition = getMousePosition();
    switch (mouseFinalPosition) {
        case mousePosition.leftTop:
            button.style.left = `${button.offsetLeft + Movement}px`;
            button.style.top = `${button.offsetTop + Movement}px`;
            break;
        case mousePosition.leftBottom:
            button.style.left = `${button.offsetLeft + Movement}px`;
            button.style.top = `${button.offsetTop - Movement}px`;
            break;
        case mousePosition.rightTop:
            button.style.left = `${button.offsetLeft - Movement}px`;
            button.style.top = `${button.offsetTop + Movement}px`;
            break;
        case mousePosition.rightBottom:
            button.style.left = `${button.offsetLeft - Movement}px`;
            button.style.top = `${button.offsetTop - Movement}px`;
            break;
    }
}

button.onmouseover = () => moveButton("button-container");
