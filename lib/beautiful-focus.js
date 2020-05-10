const focusSpan = document.createElement("span");
focusSpan.id = "focusSpan";
focusSpan.style.position = "absolute";
focusSpan.style.zIndex = 1000;
focusSpan.style.transition = "all ease-in-out 0.2s";
focusSpan.style.boxShadow =
  "white 0px 0px 0px 8px, black 0px 0px 8px 4px, rgba(0, 0, 0, 0.3) 0px 0px 7px 10px";
focusSpan.style.display = "none";

document.body.appendChild(focusSpan);

const getFocusSpanCoords = (activeElement) => {
  const { width, height } = activeElement.getBoundingClientRect();

  let top = 0;
  let left = 0;

  let element = activeElement;

  while (element) {
    left += element.offsetLeft - element.scrollLeft + element.clientLeft;
    top += element.offsetTop - element.scrollTop + element.clientTop;
    element = element.offsetParent;
  }

  return { top, left, width, height };
};

const setFocusSpanCoords = ({ top, left, width, height }) => {
  const focusSpan = document.getElementById("focusSpan");
  if (!focusSpan) return;
  focusSpan.style.top = `${top - 4}px`;
  focusSpan.style.left = `${left - 4}px`;
  focusSpan.style.width = `${width + 8}px`;
  focusSpan.style.height = `${height + 8}px`;
};

const hideFocus = () => {
  const focusSpan = document.getElementById("focusSpan");
  if (!focusSpan) return;
  focusSpan.style.display = "none";
};

const showFocus = (e) => {
  if (e.code !== "Tab" || e.keyCode !== 9) return;
  const focusSpan = document.getElementById("focusSpan");
  if (!focusSpan) return;
  focusSpan.style.display = "inline";
};

const setFocusElement = () => {
  const activeElement = document.activeElement;
  if (!activeElement) return;
  const { top, left, width, height } = getFocusSpanCoords(activeElement);
  setFocusSpanCoords({ top, left, width, height });
};

document.addEventListener("pointerdown", hideFocus);
document.addEventListener("keydown", showFocus);
document.addEventListener("focusin", setFocusElement);

window.addEventListener("clearFocus", hideFocus);
