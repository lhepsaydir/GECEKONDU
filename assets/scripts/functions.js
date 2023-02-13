function addEventListeners(id) {
  const element = document.getElementById(id);
  element.addEventListener('mouseover', addMouseOverEvent, false);
  element.addEventListener('mouseout', addMouseOutEvent, false);
}

// PLEASE NOTE!!!!
//
// You should not have to touch this file anymore.
// 
// The IDs used in HTML must always adhere to the following pattern:
//
// id = "item"
// id = "item_popover"
//
function addMouseOverEvent(e) {
  var hoveredItemId = e.target.id;
  showElement(`${hoveredItemId}_popover`)
  e.stopPropagation();
}

function addMouseOutEvent(e) {
  var hoveredItemId = e.target.id;
  hideElement(`${hoveredItemId}_popover`)
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