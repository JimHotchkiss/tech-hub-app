document.addEventListener("DOMContentLoaded", function () {
  iconButtons();
  addingDisplayEventListener();
  addingCameraEventListener();
  addinSpecialtyEventListener();
});

// Constants
const navDiv = document.getElementById("nav");
const featureNavDiv = document.getElementById("feature-nav-div");
const featureBodyDiv = document.getElementById("feature-body-div");
const cardDiv = document.getElementById("card-div");
const msaFeatureDiv = document.getElementsByClassName("msa-feature-div");
const camerasDiv = document.getElementById("msa-feature-div");

const state = {
  camera: { name: "", clicked: false },
  display: { name: "", clicked: false },
  specialty: { name: "", clicked: false },
};

const settings = {
  ccu: [
    { "Shutter Mode": "Auto" },
    { "Shutter Level": "30" },
    { Area: "0" },
    { Speed: "9" },
    { "Photometry Mode": "Photometry" },
    { "Photometry Peak/Avg": "2" },
    { "S Gamma": "3" },
    { "BG Gamma": "4" },
    { MPED: "0" },
    { "BG Point": "4" },
    { "R Knee Slope": "8" },
    { "R Knee Point": "0" },
    { Enhance: "23" },
    { Chroma: "14" },
    { "B Gain": "0" },
    { "B Hue": "0" },
    { "R Gain": "-10" },
    { "R Hue": "4" },
    { "ENV Gain Mode": "Auto" },
    { "ENV Manual Gain": "0" },
    { "ENV Level": "0" },
    { "ENV BG Offset": "0" },
    { "ENV Gamma": "0" },
    { "ENV Max Gain": "0" },
  ],
  monitor: [
    { Red: "-45" },
    { Green: "-5" },
    { Blue: "10" },
    { Gamma: "S7" },
    { Enhancement: "Low" },
    { Brightness: "45" },
    { Contrast: "50" },
    { Sharpness: "No Data" },
  ],
};

const loopThrough = () => {
  settings.ccu.forEach((item) => {
    for (let [key, value] of Object.entries(item)) {
      console.log(`${key}: ${value}`);
    }
  });
};
const iconData = [
  {
    data: "msa",
    src: "/img/ms-blue.png",
    name: "Money Settings",
  },
  {
    data: "sports-med",
    src: "/img/sportsmed.png",
    name: "Shaver/Bur RPM",
  },
  {
    data: "reprocessing",
    src: "/img/reprocessing.png",
    name: "Reprocessing",
  },
  {
    data: "dhr request",
    src: "/img/dhr.png",
    name: "DHR Request",
  },
  {
    data: "tech-spec",
    src: "/img/ifu.png",
    name: "Tech Specs",
  },
  {
    data: "networking",
    src: "/img/networking2.png",
    name: "Networking",
  },
  {
    data: "color-adjustments",
    src: "/img/adjustment.png",
    name: "Color Adjustments",
  },
];

const shaverBurs = [
  {
    name: "test name one",
    pn: "123-456-789",
    url: "/img/shaver.png",
    speed_step_increase: "test step",
    high_speed_default: "test hight speed default",
    high_speed_max: "test hight speed max",
    low_speed_default: "test low speed default",
    low_speed_max: "test low speed max",
  },
  {
    name: "test name two",
    pn: "123-456-789",
    url: "/img/shaver3.png",
    speed_step_increase: "test step",
    high_speed_default: "test hight speed default",
    high_speed_max: "test hight speed max",
    low_speed_default: "test low speed default",
    low_speed_max: "test low speed max",
  },
  {
    name: "test name three",
    pn: "123-456-789",
    url: "/img/shaver2.png",
    speed_step_increase: "test step",
    high_speed_default: "test hight speed default",
    high_speed_max: "test hight speed max",
    low_speed_default: "test low speed default",
    low_speed_max: "test low speed max",
  },
];

const iconButtons = () => {
  iconData.map((item, index) => {
    const topCardDiv = document.getElementById("card-div");
    const cardClassDiv = document.createElement("div");
    cardClassDiv.setAttribute("class", "card-wrapper");
    cardClassDiv.setAttribute("dataset-feature", item.data);
    cardClassDiv.addEventListener("click", (event) => {
      navBarFeature(event);
      // showShaverHomePage(index, event);
    });
    const aTagImgDiv = document.createElement("div");
    aTagImgDiv.setAttribute("class", "icon-div");
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", item.src);
    imgElement.setAttribute("class", "img-element");
    imgElement.setAttribute("alt", "icon");
    const cardAnchor = document.createElement("a");
    cardAnchor.setAttribute("data-feature", item.data);
    cardAnchor.setAttribute("class", "icon-anchor");
    cardAnchor.appendChild(imgElement);
    cardClassDiv.appendChild(cardAnchor);
    topCardDiv.appendChild(cardClassDiv);
    const pTag = document.createElement("p");
    pTag.innerHTML = `${item.name}`;
    const textContainer = document.createElement("div");
    textContainer.setAttribute("class", "text-container");
    textContainer.appendChild(pTag);
    cardClassDiv.appendChild(textContainer);
    topCardDiv.appendChild(cardClassDiv);
  });
};

const shaverContainerDiv = document.getElementById("shaver-container-div");

const showShaverHomePage = () => {
  if (
    event.target.parentNode.dataset.feature === "sports-med" &&
    shaverContainerDiv.style.display === "none"
  ) {
    shaverContainerDiv.style.display = "block";
  } else {
    shaverContainerDiv.style.display = "none";
  }
  clearShaveDom();
};

const clearShaveDom = () => {
  if (shaverContainerDiv.firstChild) {
    while (shaverContainerDiv.firstChild) {
      shaverContainerDiv.removeChild(shaverContainerDiv.firstChild);
    }
  }
  showShaverImagesAndData();
};

const showShaverImagesAndData = () => {
  shaverBurs.map((shaverBur) => {
    // first main div
    const shaverImageDataDiv = document.createElement("div");
    shaverImageDataDiv.setAttribute("class", "shaver-image-data-div");
    // data div
    const shaverDataDiv = document.createElement("div");
    shaverDataDiv.setAttribute("class", "shaver-data-div"); // Shaver data
    shaverBurs.map((shaverData, index) => {
      // Shaver data p tags
      console.log(shaverData, index);
      const shaverNamePtag = document.createElement("p");
      shaverNamePtag.setAttribute("class", "shaver-name-text");
      const shaverPNtag = document.createElement("p");
      shaverNamePtag.setAttribute("class", "shaver-pn-text");
      shaverNamePtag.innerText = "Name: " + shaverData.name;
      shaverPNtag.innerText = "Part Number: " + shaverData.pn;
      shaverDataDiv.append(shaverNamePtag);
      shaverDataDiv.append(shaverPNtag);
    });

    const shaverImgDiv = document.createElement("div");
    shaverImgDiv.setAttribute("class", "shaver-image-div");
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", shaverBur.url);
    imgElement.setAttribute("class", "shaver-img");
    shaverImgDiv.appendChild(imgElement);
    shaverImageDataDiv.append(shaverImgDiv);
    shaverImageDataDiv.append(shaverDataDiv);
    shaverContainerDiv.appendChild(shaverImageDataDiv);
  });
};

const navBarFeature = (event) => {
  const text = event.currentTarget.textContent;
  const featureImg = document.getElementById("feature-nav-img");
  if (event.target.attributes.src) {
    featureImg.src = event.target.attributes.src.value;
  } else {
    featureImg.src = event.target.parentNode.parentNode.childNodes[0].childNodes[0].getAttribute(
      "src"
    );
  }
  const textPTag = document.getElementById("nav-feature-text-element");
  textPTag.innerHTML = text;
  navHomeToggle(event);
};

const navigateHome = (event) => {
  const textPTag = document.getElementById("nav-feature-text-element");
  textPTag.innerHTML = "";
  navHomeToggle(event);
};

const navHomeToggle = (event) => {
  clearMSA();
  clearButtons();
  closeSpecialties();
  closeArrow();
  showShaverHomePage();
  if (featureNavDiv.style.display === "none") {
    featureNavDiv.style.display = "flex";
    navDiv.style.display = "none";
    featureBodyDiv.style.display = "flex";
    cardDiv.style.display = "none";
    toggleFeature(event);
  } else {
    featureNavDiv.style.display = "none";
    navDiv.style.display = "flex";
    featureBodyDiv.style.display = "none";
    cardDiv.style.display = "flex";
  }
};

const clearMSA = () => {
  if (state.camera.name !== "") {
    state.camera.name = "";
    state.camera.clicked = false;
    state.display.name = "";
    state.display.clicked = false;
    toggleDisplays();
    closeSettingsWindow();
  }
};

const clearButtons = () => {
  const buttonsColored = document.getElementsByClassName(
    "display-div-button-color"
  );
  if (typeof buttonsColored !== "undefined") {
    arrayForm = Array.from(buttonsColored);
    arrayForm.map((element) => {
      element.className = "display-div";
    });
  }
};

const toggleFeature = (event) => {
  const camerasDiv = document.getElementById("msa-feature-div");
  const currentFeature = event.currentTarget.childNodes[0].dataset.feature;
  if (currentFeature === "msa") {
    camerasDiv.style.display = "flex";
    camerasDiv.style.flexDirection = "column";
  } else {
    camerasDiv.style.display = "none";
  }
};

const addingCameraEventListener = () => {
  cameraDiv = document.getElementsByClassName("camera-div");
  arrayForm = Array.from(cameraDiv);
  arrayForm.map((camera) => {
    camera.addEventListener("click", () => {
      setCameraState(event);
    });
  });
};

const addingDisplayEventListener = () => {
  displayDiv = document.getElementsByClassName("display-div");
  arrayForm = Array.from(displayDiv);
  arrayForm.map((display) => {
    display.addEventListener("click", () => {
      setDisplayState(event);
    });
  });
};

const addinSpecialtyEventListener = () => {
  specialtyDiv = document.getElementsByClassName("specialty-div");
  arrayForm = Array.from(specialtyDiv);
  arrayForm.map((specialty) => {
    specialty.addEventListener("click", () => {
      setSpecialtyState(event);
    });
  });
};

const setCameraState = (event) => {
  const camera = event.currentTarget.dataset.camera;
  if (state.camera.name === "") {
    state.camera.name = camera;
    state.camera.clicked = true;
    toggleDisplays(event);
    rotateArrow(event);
  } else if (camera === state.camera.name) {
    state.camera.name = "";
    state.camera.clicked = false;
    clearButtons();
    toggleDisplays(event);
    closeSpecialties();
    rotateArrow(event);
    clearSpecialtyButton();
    closeSettingsWindow();
    resetState();
  } else {
    state.camera.name = "";
    state.camera.name = camera;
    toggleDisplays(event);
    closeSpecialties(event);
    showSpecialties(event);
    rotateArrow(event);
    clearSpecialtyButton();
    closeSettingsWindow();
  }
  console.log(state.camera, state.display);
};

const resetState = () => {
  state.camera.name = "";
  state.camera.clicked = false;
  state.display.name = "";
  state.display.clicked = false;
  state.specialty.name = "";
  state.specialty.clicked = false;
};

// Rotate arrow
const rotateArrow = (event) => {
  // first close all arrows
  const arrowDivOpen = document.getElementsByClassName("arrow-icon-div open");
  arrowDivOpenArray = Array.from(arrowDivOpen);
  arrowDivOpenArray.map((div) => {
    div.className = "arrow-icon-div";
  });

  // then open the appropriate arrow
  const cameraData = event.currentTarget.dataset.camera;
  const arrowDiv = document.getElementById(cameraData + " arrow");
  // console.log(arrowDiv);
  if (state.camera.clicked) {
    arrowDiv.className = arrowDiv.className + " open";
  }
  // console.log(event.currentTarget.dataset.camera, state.camera);
};

const closeArrow = () => {
  const arrowDivOpen = document.getElementsByClassName("arrow-icon-div open");
  arrowDivOpenArray = Array.from(arrowDivOpen);
  arrowDivOpenArray.map((div) => {
    div.className = "arrow-icon-div";
  });
};

const toggleDisplays = () => {
  console.log(state.camera, state.display, state.specialty);
  const camera = state.camera.name;
  const display = state.display.name;
  if (camera !== "") {
    // reseting displays-show back to displays-div
    const displays = document.getElementsByClassName("displays-show");
    if (camera === "1688" && display === "HDTV Wise") {
      // Close the CCU div
      const displays = document.getElementsByClassName("displays-show");
      if (displays.length !== 0) {
        displays[0].className = "displays-div";
      }
      // Show the 1688 display div
      const displaysShow = document.getElementById(camera);
      displaysShow.className = "displays-show";
      // Reset display state
      (state.display.name = ""), (state.display.clicked = false);
      // Deselect the HDTV Wise button
      const buttons = document.getElementsByClassName(
        "display-div-button-color"
      );
      deselectDisplay(buttons);
      closeSpecialties();
    } else if (displays.length !== 0) {
      displays[0].className = "displays-div";
    }
    const displaysShow = document.getElementById(camera);
    displaysShow.className = "displays-show";
  } else {
    const displays = document.getElementsByClassName("displays-show");
    if (displays.length !== 0) {
      displays[0].className = "displays-div";
      state.display.name = "";
      state.display.clicked = false;
    }
  }
};

const setDisplayState = (event) => {
  const currentDisplay = event.currentTarget.children[0].innerText;

  if (state.display.name === "") {
    state.display.name = currentDisplay;
    state.display.clicked = true;
  } else if (currentDisplay === state.display.name) {
    state.display.name = "";
    state.display.clicked = false;
  } else {
    state.display.name = "";
    state.display.clicked = false;
    state.display.name = currentDisplay;
    state.display.clicked = true;
  }
  displayButtonColor(event);
};

// I'm not going to need specialtyButtoncolor
const setSpecialtyState = (event) => {
  state.specialty.name = event.currentTarget.innerText;
  state.specialty.clicked = true;
  specialtyButtonColor(event);
  showParametersSettings();
};

const showParametersSettings = () => {
  closeDisplaySpecialties();
  openSettingsWindow();
  cameraDisplayTitle();
  showParameters();
};

const settingsDiv = document.createElement("div");
settingsDiv.setAttribute("class", "settings-parameters-div");

const showParameters = () => {
  const camera = state.camera.name;
  const settingsShowDiv = document.getElementById("settings" + " " + camera);

  const itemsDiv = document.createElement("div");
  itemsDiv.setAttribute("class", "parameters-div");
  const unorderedList = document.createElement("ul");

  settings.ccu.forEach((item) => {
    for (let [key, value] of Object.entries(item)) {
      const listItem = document.createElement("li");
      const parameterDiv = document.createElement("div");
      parameterDiv.setAttribute("class", "parameter-div");
      listItem.innerText = key;
      parameterDiv.appendChild(listItem);
      unorderedList.appendChild(parameterDiv);
      itemsDiv.appendChild(unorderedList);
      settingsDiv.appendChild(itemsDiv);
      settingsShowDiv.appendChild(settingsDiv);
    }
  });
  showSettings();
};

const showSettings = () => {
  const camera = state.camera.name;
  const settingsShowDiv = document.getElementById("settings" + " " + camera);

  const itemsDiv = document.createElement("div");
  itemsDiv.setAttribute("class", "settings-div");
  const unorderedList = document.createElement("ul");

  settings.ccu.forEach((item) => {
    for (let [key, value] of Object.entries(item)) {
      const listItem = document.createElement("li");
      const settingDiv = document.createElement("div");
      settingDiv.setAttribute("class", "setting-div");
      listItem.innerText = value;
      settingDiv.appendChild(listItem);
      unorderedList.appendChild(settingDiv);
      itemsDiv.appendChild(unorderedList);
      settingsDiv.appendChild(itemsDiv);
      settingsShowDiv.appendChild(settingsDiv);
    }
  });
  displaySettingsTitle(settingsShowDiv, camera);
};

const displaySettingsTitle = () => {
  const camera = state.camera.name;
  const settingsShowDiv = document.getElementById("settings" + " " + camera);
  // create divs
  const displaySpecialtyTitleDiv = document.createElement("div");
  displaySpecialtyTitleDiv.setAttribute("class", "display-specialty-title-div");
  // Camera title div
  const displayTitleDiv = document.createElement("div");
  displayTitleDiv.setAttribute("class", "display-title-div");
  // camera title p-tag
  const displayTag = document.createElement("p");
  displayTag.setAttribute("class", "display-tag");
  displayTag.innerHTML = "DISPLAY";
  //camera name p-tag
  const displayNameTag = document.createElement("p");
  displayNameTag.setAttribute("class", "display-name-tag");
  displayNameTag.innerHTML = state.display.name;
  // Put camera p tags in camera-title-div
  displayTitleDiv.appendChild(displayTag);
  displayTitleDiv.appendChild(displayNameTag);
  // put camera title div in cameraSpecialtyTitleDiv
  displaySpecialtyTitleDiv.appendChild(displayTitleDiv);
  // Specialty title div
  const specialtyTitleDiv = document.createElement("div");
  specialtyTitleDiv.setAttribute("class", "specialty-title-div");
  // specialty title p-tag
  const specialtyTag = document.createElement("p");
  specialtyTag.setAttribute("class", "specialty-tag");
  specialtyTag.innerHTML = "SPECIALTY";
  // Specialty name p-tag
  const specialtyNameTag = document.createElement("p");
  specialtyNameTag.setAttribute("class", "specialty-name-tag");
  specialtyNameTag.innerHTML = state.specialty.name;
  // put specialty p tags in specialty title div
  specialtyTitleDiv.appendChild(specialtyTag);
  specialtyTitleDiv.appendChild(specialtyNameTag);
  // put specialty titlediv in camera specialty title div
  displaySpecialtyTitleDiv.appendChild(specialtyTitleDiv);
  // put cameraSpecialtyTitleDiv in settings-show div
  settingsShowDiv.appendChild(displaySpecialtyTitleDiv);
  showDisplayParameters();
};

const displaySettingsDiv = document.createElement("div");
displaySettingsDiv.setAttribute("class", "display-settings-parameters-div");

const showDisplayParameters = () => {
  const camera = state.camera.name;
  const settingsShowDiv = document.getElementById("settings" + " " + camera);

  const itemsDiv = document.createElement("div");
  itemsDiv.setAttribute("class", "parameters-div");
  const unorderedList = document.createElement("ul");

  settings.monitor.forEach((item) => {
    for (let [key, value] of Object.entries(item)) {
      const listItem = document.createElement("li");
      const parameterDiv = document.createElement("div");
      parameterDiv.setAttribute("class", "parameter-div");
      listItem.innerText = key;
      parameterDiv.appendChild(listItem);
      unorderedList.appendChild(parameterDiv);
      displaySettingsDiv.appendChild(unorderedList);
      settingsShowDiv.appendChild(displaySettingsDiv);
    }
  });
  showDisplaySettings();
};

const showDisplaySettings = () => {
  const camera = state.camera.name;
  const settingsShowDiv = document.getElementById("settings" + " " + camera);

  const itemsDiv = document.createElement("div");
  itemsDiv.setAttribute("class", "settings-div");
  const unorderedList = document.createElement("ul");

  settings.monitor.forEach((item) => {
    for (let [key, value] of Object.entries(item)) {
      const listItem = document.createElement("li");
      const settingDiv = document.createElement("div");
      settingDiv.setAttribute("class", "setting-div");
      listItem.innerText = value;
      settingDiv.appendChild(listItem);
      unorderedList.appendChild(settingDiv);
      displaySettingsDiv.appendChild(unorderedList);
      settingsShowDiv.appendChild(displaySettingsDiv);
    }
  });
};

const openSettingsWindow = () => {
  const camera = state.camera.name;
  const settingsDiv = document.getElementById("settings" + " " + camera);
  settingsDiv.className = "settings-show";
};

const closeSettingsWindow = () => {
  const displaySettingsParametersDiv = document.getElementsByClassName(
    "display-settings-parameters-div"
  )[0];
  if (displaySettingsParametersDiv) {
    displaySettingsParametersDiv.innerHTML = "";
  }

  const cameraDiv = document.getElementsByClassName("camera-div-settings");
  if (cameraDiv.length !== 0) {
    cameraDiv[0].className = "camera-div";
  }

  const closeSettingsShowDiv = document.getElementsByClassName("settings-show");
  const settingsParametersDiv = document.getElementsByClassName(
    "settings-parameters-div"
  );
  if (closeSettingsShowDiv.length !== 0 && settingsParametersDiv.length !== 0) {
    settingsParametersDiv[0].innerHTML = "";
    closeSettingsShowDiv[0].innerHTML = "";
    closeSettingsShowDiv[0].className = "";
  }
};

const cameraDisplayTitle = () => {
  const camera = state.camera.name;
  // grab camera-name-div id
  const cameraIdDiv = document.getElementById("camera-div-" + camera);
  cameraIdDiv.className = "camera-div-settings";
  const settingsShowTopDiv = document.getElementById("settings" + " " + camera);
  // camera-display-title div
  const cameraSpecialtyTitleDiv = document.createElement("div");
  cameraSpecialtyTitleDiv.setAttribute("class", "camera-specialty-title-div");
  // Camera title div
  const cameraTitleDiv = document.createElement("div");
  cameraTitleDiv.setAttribute("class", "camera-title-div");
  // camera title p-tag
  const cameraTag = document.createElement("p");
  cameraTag.setAttribute("class", "camera-tag");
  cameraTag.innerHTML = "CCU";
  //camera name p-tag
  const cameraNameTag = document.createElement("p");
  cameraNameTag.setAttribute("class", "camera-name-tag");
  cameraNameTag.innerHTML = state.camera.name;
  // Put camera p tags in camera-title-div
  cameraTitleDiv.appendChild(cameraTag);
  cameraTitleDiv.appendChild(cameraNameTag);
  // put camera title div in cameraSpecialtyTitleDiv
  cameraSpecialtyTitleDiv.appendChild(cameraTitleDiv);
  // Specialty title div
  const specialtyTitleDiv = document.createElement("div");
  specialtyTitleDiv.setAttribute("class", "specialty-title-div");
  // specialty title p-tag
  const specialtyTag = document.createElement("p");
  specialtyTag.setAttribute("class", "specialty-tag");
  specialtyTag.innerHTML = "SPECIALTY";
  // Specialty name p-tag
  const specialtyNameTag = document.createElement("p");
  specialtyNameTag.setAttribute("class", "specialty-name-tag");
  specialtyNameTag.innerHTML = state.specialty.name;
  // put specialty p tags in specialty title div
  specialtyTitleDiv.appendChild(specialtyTag);
  specialtyTitleDiv.appendChild(specialtyNameTag);
  // put specialty titlediv in camera specialty title div
  cameraSpecialtyTitleDiv.appendChild(specialtyTitleDiv);
  // put cameraSpecialtyTitleDiv in settings-show div
  settingsShowTopDiv.appendChild(cameraSpecialtyTitleDiv);
};

const closeDisplaySpecialties = (event) => {
  const camera = state.camera.name;
  const cameraDisplay = state.camera.name + " " + state.display.name;
  console.log(cameraDisplay);
  const displayDiv = document.getElementById(camera);
  const specialtiesDiv = document.getElementById(cameraDisplay);
  displayDiv.className = "displays-div";
  specialtiesDiv.className = "specialties-div";
  console.log(state.camera, state.display, state.specialty);
};

const displayButtonColor = (event) => {
  // Get the selected display
  const selectedDisplay = event.currentTarget.innerText;
  // Check if the button is already clicked
  const buttons = document.getElementsByClassName("display-div-button-color");

  // Check and see if there are display-div-button-color
  if (buttons.length !== 0) {
    arrayButtons = Array.from(buttons);
    arrayButtons.map((button) => {
      if (button.dataset.display === selectedDisplay) {
        deselectDisplay(buttons);
        closeSpecialties(event);
      } else {
        selectDifferentDisplay(buttons);
        closeSpecialties(event);
        showSpecialties(event);
      }
    });
  } else {
    setButtonsColor(event);
    showSpecialties(event);
  }
};

const setButtonsColor = (event) => {
  const currentSelection = event.currentTarget.innerText;
  const findDisplayDivs = document.getElementsByClassName("display-div");
  // This allows the user to change ccu, but keep the display choice
  displayDivsArray = Array.from(findDisplayDivs);
  displayDivsArray.map((displayDiv) => {
    if (displayDiv.dataset.display === currentSelection) {
      displayDiv.className = "display-div-button-color";
    }
  });
};

const deselectDisplay = (buttons) => {
  buttonsArray = Array.from(buttons);
  buttonsArray.map((button) => {
    button.className = "display-div";
    closeSpecialties(buttons);
  });
};

const selectDifferentDisplay = (buttons) => {
  buttonsArray = Array.from(buttons);
  buttonsArray.map((button) => {
    button.className = "display-div";
  });
  setButtonsColor(event);
};

const showSpecialties = (event) => {
  const specialtyDivsShow = document.getElementsByClassName("specialties-show");
  const currentCameraDisplay = state.camera.name + " " + state.display.name;
  const specialtyDivs = document.getElementById(currentCameraDisplay);
  if (state.camera.name !== "" && state.display.name === "") {
    closeSpecialties();
  } else if (specialtyDivsShow.length === 0) {
    closeSpecialties;
    specialtyDivs.className = "specialties-show";
  }
};

// const closeSpecialties = (event) => {
//   console.log("close specialites");
// };

const specialtyButtonColor = (event) => {
  console.log(state.camera, state.display, state.specialty);
  clearSpecialtyButton();
  const specialtyButtonDiv = event.currentTarget;
  specialtyButtonDiv.className = "specialty-div-button-color";
};

const clearSpecialtyButton = (event) => {
  // Change specialty button colors back
  const specialtyButtonsClicked = document.getElementsByClassName(
    "specialty-div-button-color"
  );
  if (specialtyButtonsClicked) {
    formArray = Array.from(specialtyButtonsClicked);
    formArray.map((div) => {
      div.className = "specialty-div";
    });
  }
};

const closeSpecialties = (buttons) => {
  const specialtyDivs = document.getElementsByClassName("specialties-show");
  arraySpecialtiesDiv = Array.from(specialtyDivs);
  arraySpecialtiesDiv.map((specialty) => {
    specialty.className = "specialties-div";
  });
  specialtyDivs.className = "specialties-div";
};
