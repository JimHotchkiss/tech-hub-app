document.addEventListener("DOMContentLoaded", function () {
  iconButtons();
  addingEventListener();
});

// Constants
const navDiv = document.getElementById("nav");
const featureNavDiv = document.getElementById("feature-nav-div");
const featureBodyDiv = document.getElementById("feature-body-div");
const cardDiv = document.getElementById("card-div");
const msaFeatureDiv = document.getElementsByClassName("msa-feature-div");
const camerasDiv = document.getElementById("msa-feature-div");

const state = {
  camera: "",
  display: "",
  specialty: "",
  clicked: false,
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

const cameras = [
  {
    data: "1688",
    name: "1688",
    clicked: false,
  },
  {
    data: "1588",
    name: "1588",
    clicked: false,
  },
  {
    data: "1488",
    name: "1488",
    clicked: false,
  },
  {
    data: "Precision AC",
    name: "Precision AC",
    clicked: false,
  },
  {
    data: "1288",
    name: "1288",
    clicked: false,
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

const addingEventListener = () => {
  cameraDiv = document.getElementsByClassName("camera-div");
  arrayForm = Array.from(cameraDiv);
  arrayForm.map((camera) => {
    camera.addEventListener("click", () => {
      setState(event);
    });
  });
};

const setState = (event) => {
  const camera = event.currentTarget.dataset.camera;
  if (state.camera === "") {
    state.camera = camera;
    setClicked();
  } else {
    state.camera = "";
    state.camera = camera;
    setClicked();
  }
};

const setClicked = () => {
  cameras.map((camera) => {
    if (camera.name === state.camera) {
      camera.clicked = !camera.clicked;
    } else {
      camera.clicked = false;
    }
  });
  toggleDisplays();
};

const toggleDisplays = () => {
  cameras.map((camera) => {
    if (camera.clicked) {
      const displays = document.getElementById(camera.name);
      displays.className = "displays-show";
    } else {
      const displays = document.getElementById(camera.name);
      displays.className = "displays-div";
    }
  });
};
