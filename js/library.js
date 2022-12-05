function newElement(tagName, className) {
  const element = document.createElement(tagName);
  element.className = className;
  return element;
}
function getElementSelector(elementSelector) {
  return document.querySelector(elementSelector);
}
function writeOnElement(element, text) {
  element.innerHTML = text;
}
function removeChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
function changeZindex(element, positionIndex) {
  element.style.zIndex = positionIndex;
}
function superposition(element1, element2) {
  const a = element1.getBoundingClientRect();
  const b = element2.getBoundingClientRect();
  const aux = (
    a.bottom < b.top ||
    a.top > b.bottom ||
    a.left > b.right ||
    a.right < b.left 
  );
  return !aux;
}
