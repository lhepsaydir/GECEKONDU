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
  } else if (hoveredItemId === "stove") {
    showElement("stove_popover")
  } else if (hoveredItemId === "imece") {
    showElement("imece_popover")
  } else if (hoveredItemId === "collectivework") {
    showElement("collectivework_popover")
  } else if (hoveredItemId === "lacecurtain") {
    showElement("lacecurtain_popover")
  } else if (hoveredItemId === "dinnertable") {
    showElement("dinnertable_popover")
  } else if (hoveredItemId === "GK1") {
    showElement("GK1_popover")
  } else if (hoveredItemId === "GK2") {
    showElement("GK2_popover")
  } else if (hoveredItemId === "GK3") {
    showElement("GK3_popover")
  } else if (hoveredItemId === "GK4") {
    showElement("GK4_popover")
  } else if (hoveredItemId === "GK5") {
    showElement("GK5_popover")
  } else if (hoveredItemId === "GK6") {
    showElement("GK6_popover")
  } else if (hoveredItemId === "GK7") {
    showElement("GK7_popover")
  } else if (hoveredItemId === "GK8") {
    showElement("GK8_popover")

  } else if (hoveredItemId === "KH1") {
    showElement("KH1_popover")
  } else if (hoveredItemId === "KH2") {
    showElement("KH2_popover")
  } else if (hoveredItemId === "kahvetable") {
    showElement("kahvetable_popover")
  } else if (hoveredItemId === "playingokey") {
    showElement("playingokey_popover")
  } else if (hoveredItemId === "wallart") {
    showElement("wallart_popover")
  } else if (hoveredItemId === "entrance") {
    showElement("entrance_popover") 

  } else if (hoveredItemId === "explosion") {
    showElement("explosion_popover")
  } else if (hoveredItemId === "animals") {
    showElement("animals_popover")
  } else if (hoveredItemId === "shelfgarlic") {
    showElement("shelfgarlic_popover")
  } else if (hoveredItemId === "YS1") {
    showElement("YS1_popover")
  } else if (hoveredItemId === "YS2") {
    showElement("YS2_popover")
  } else if (hoveredItemId === "YS3") {
    showElement("YS3_popover")

  } else if (hoveredItemId === "gecekondu_image") {
    showElement("gecekondu_description")
      } else if (hoveredItemId === "kahve_image"){
    showElement("kahve_description")
  } else if (hoveredItemId === "yap_sat_image"){
    showElement("yap_sat_description")
  } else if (hoveredItemId === "altin_gunu_image"){
    showElement("altin_gunu_description")
  }
  e.stopPropagation();
}

function addMouseOutEvent(e) {
  var hoveredItemId = e.target.id;

  if (hoveredItemId === "cabbage") {
    hideElement("cabbage_popover")
  } else if (hoveredItemId === "bookshelf") {
    hideElement("bookshelf_popover")
  } else if (hoveredItemId === "stove") {
    hideElement("stove_popover")
  } else if (hoveredItemId === "imece") {
    hideElement("imece_popover")
  } else if (hoveredItemId === "collectivework") {
    hideElement("collectivework_popover")
  } else if (hoveredItemId === "lacecurtain") {
    hideElement("lacecurtain_popover")
  } else if (hoveredItemId === "dinnertable") {
    hideElement("dinnertable_popover")
  } else if (hoveredItemId === "GK1") {
    hideElement("GK1_popover")
  } else if (hoveredItemId === "GK2") {
    hideElement("GK2_popover")
  } else if (hoveredItemId === "GK3") {
    hideElement("GK3_popover")
  } else if (hoveredItemId === "GK4") {
    hideElement("GK4_popover")
  } else if (hoveredItemId === "GK5") {
    hideElement("GK5_popover")
  } else if (hoveredItemId === "GK6") {
    hideElement("GK6_popover")
  } else if (hoveredItemId === "GK7") {
    hideElement("GK7_popover")
  } else if (hoveredItemId === "GK8") {
    hideElement("GK8_popover")

  } else if (hoveredItemId === "KH1") {
    hideElement("KH1_popover")
  } else if (hoveredItemId === "KH2") {
    hideElement("KH2_popover")
  } else if (hoveredItemId === "kahvetable") {
    hideElement("kahvetable_popover")
  } else if (hoveredItemId === "playingokey") {
    hideElement("playingokey_popover")
  } else if (hoveredItemId === "wallart") {
    hideElement("wallart_popover")
  } else if (hoveredItemId === "entrance") {
    hideElement("entrance_popover") 

  } else if (hoveredItemId === "explosion") {
    hideElement("explosion_popover")
  } else if (hoveredItemId === "animals") {
    hideElement("animals_popover")
  } else if (hoveredItemId === "shelfgarlic") {
    hideElement("shelfgarlic_popover")
  } else if (hoveredItemId === "YS1") {
    hideElement("YS1_popover")
  } else if (hoveredItemId === "YS2") {
    hideElement("YS2_popover")
  } else if (hoveredItemId === "YS3") {
    hideElement("YS3_popover")

  } else if (hoveredItemId === "gecekondu_image") {
    hideElement("gecekondu_description")
      } else if (hoveredItemId === "kahve_image"){
    hideElement("kahve_description")
  } else if (hoveredItemId === "yap_sat_image"){
    hideElement("yap_sat_description")
  } else if (hoveredItemId === "altin_gunu_image"){
    hideElement("altin_gunu_description")
  }

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