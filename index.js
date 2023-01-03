addEventListeners('cabbage');
addEventListeners('bookshelf');

function addEventListeners(elem) {
  const element = document.getElementById(elem);
  element.addEventListener('mouseover', showElement, false);
  element.addEventListener('mouseout', hideElement, false);
}

function showElement(e) {
  var hoveredItemId = e.target.id;

  if (hoveredItemId === "cabbage") {
    var element = document.getElementById("cabbage_popover");

    element.classList.remove("hide");
    element.classList.add("show");
  } else if (hoveredItemId === "bookshelf") {
    var element = document.getElementById("bookshelf_popover");

    element.classList.remove("hide");
    element.classList.add("show");
  }
  e.stopPropagation();
}

function hideElement(e) {
  var hoveredItemId = e.target.id;

  if (hoveredItemId === "cabbage") {
    var element = document.getElementById("cabbage_popover");

    element.classList.remove("show");
    element.classList.add("hide");
  } else if (hoveredItemId === "bookshelf") {
    var element = document.getElementById("bookshelf_popover");

    element.classList.remove("show");
    element.classList.add("hide");
  }
  e.stopPropagation();
}
