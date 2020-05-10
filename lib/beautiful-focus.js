const BEAUTIFUL_FOCUS = "__beautiful-focus";

const addBeautifulFocus = () => {
  const beautifulFocus = document.createElement("span");
  beautifulFocus.id = BEAUTIFUL_FOCUS;
  beautifulFocus.classList.add(BEAUTIFUL_FOCUS);
  document.body.appendChild(beautifulFocus);
};

const beautifulFocusCssSheet = document.createElement("link");
beautifulFocusCssSheet.rel = "stylesheet";
beautifulFocusCssSheet.type = "text/css";
// beautifulFocusCssSheet.href =
//   "https://beautifulfocus.io/lib/beautiful-focus.css";

beautifulFocusCssSheet.href = "http://localhost:5500/lib/beautiful-focus.css";

const documentHead = document.head || document.getElementsByTagName("head")[0];
documentHead.appendChild(beautifulFocusCssSheet);

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
  const beautifulFocus = document.getElementById(BEAUTIFUL_FOCUS);
  if (!beautifulFocus) return;
  beautifulFocus.style.top = `${top - 4}px`;
  beautifulFocus.style.left = `${left - 4}px`;
  beautifulFocus.style.width = `${width + 8}px`;
  beautifulFocus.style.height = `${height + 8}px`;
};

const hideFocus = () => {
  const beautifulFocus = document.getElementById(BEAUTIFUL_FOCUS);
  if (!beautifulFocus) return;
  beautifulFocus.style.display = "none";
};

const showFocus = (e) => {
  if (e.code !== "Tab" || e.keyCode !== 9) return;
  const beautifulFocus = document.getElementById(BEAUTIFUL_FOCUS);
  if (!beautifulFocus) return;
  beautifulFocus.style.display = "inline";
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

document.addEventListener("DOMContentLoaded", addBeautifulFocus);
