document.addEventListener("DOMContentLoaded", function () {
  iconButtons();
  addingDisplayEventListener();
  addingCameraEventListener();
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
  specialty: "",
};
const iconData = [
  {
    data: "msa",
    src: "/img/msa2.png",
    name: "Money Settings",
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
  {
    data: "ipad",
    src: "/img/ipad.png",
    name: "iPad Assistance",
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

const setCameraState = (event) => {
  const camera = event.currentTarget.dataset.camera;
  if (state.camera.name === "") {
    state.camera.name = camera;
    state.camera.clicked = true;
    toggleDisplays(event);
  } else if (camera === state.camera.name) {
    state.camera.name = "";
    state.camera.clicked = false;
    clearButtons();
    toggleDisplays(event);
    closeSpecialties();
  } else {
    state.camera.name = "";
    state.camera.name = camera;
    toggleDisplays(event);
    closeSpecialties(event);
    showSpecialties(event);
  }
};

const toggleDisplays = () => {
  const camera = state.camera.name;
  const display = state.display.name;
  if (camera !== "") {
    // reseting displays-show back to displays-div
    const displays = document.getElementsByClassName("displays-show");
    if (camera === "1688" && display === "HDTV Wise") {
      // Close the CCU div
      const displays = document.getElementsByClassName("displays-show");
      displays[0].className = "displays-div";
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
    displays[0].className = "displays-div";
    state.display.name = "";
    state.display.clicked = false;
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
    closeSpecialties();
    specialtyDivs.className = "specialties-show";
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
