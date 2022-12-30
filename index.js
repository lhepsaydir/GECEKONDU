var cabbage = document.getElementById('cabbage');
cabbage.addEventListener('mouseover', showElement, false);
cabbage.addEventListener('mouseout', hideElement, false);

var bookshelf = document.getElementById('bookshelf');
bookshelf.addEventListener('mouseover', showElement, false);
bookshelf.addEventListener('mouseout', hideElement, false);

function showElement(e) {
  findMouseCoords();
  var clickedBtnId = e.target.id;

  if (clickedBtnId === "cabbage") {
    var element = document.getElementById("cabbage_popover");

    element.classList.remove("hide");
    element.classList.add("show");
  } else if (clickedBtnId === "bookshelf") {
    var element = document.getElementById("bookshelf_popover");

    element.classList.remove("hide");
    element.classList.add("show");
  }
  e.stopPropagation();
}

function hideElement(e) {
  var clickedBtnId = e.target.id;

  if (clickedBtnId === "cabbage") {
    var element = document.getElementById("cabbage_popover");

    element.classList.remove("show");
    element.classList.add("hide");
  } else if (clickedBtnId === "bookshelf") {
    var element = document.getElementById("bookshelf_popover");

    element.classList.remove("show");
    element.classList.add("hide");
  }
  e.stopPropagation();
}

function findMouseCoords() {
}