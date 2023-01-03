function addEventListeners(id) {
  const element = document.getElementById(id);
  element.addEventListener('mouseover', addMouseOverEvent, false);
  element.addEventListener('mouseout', addMouseOutEvent, false);
}

function addMouseOverEvent(e) {
  var hoveredItemId = e.target.id;

  if (hoveredItemId === "cabbage") {
    showElement("cabbage_popover")
  } else if (hoveredItemId === "bookshelf") {
    showElement("bookshelf_popover")
  } else if (hoveredItemId === "gecekondu_image"){
    showElement("gecekondu_description")
  }
  e.stopPropagation();
}

function addMouseOutEvent(e) {
  var hoveredItemId = e.target.id;

  if (hoveredItemId === "cabbage") {
    hideElement("cabbage_popover")
  } else if (hoveredItemId === "bookshelf") {
    hideElement("bookshelf_popover")
  } else if (hoveredItemId === "gecekondu_image") {
    hideElement("gecekondu_description")
  }
  e.stopPropagation();
}

function showElement(id) {
  var element = document.getElementById(id);
  element.classList.remove("hide");
  element.classList.add("show");
}

function hideElement(id) {
  var element = document.getElementById(id);
  element.classList.remove("show");
  element.classList.add("hide");
}