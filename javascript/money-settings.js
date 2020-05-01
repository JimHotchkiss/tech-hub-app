document.addEventListener("DOMContentLoaded", function () {
  iconButtons();
});

// Constants
const navDiv = document.getElementById("nav");
const featureDiv = document.getElementById("feature-nav-div");
const featureBodyDiv = document.getElementById("feature-body-div");
const cardDiv = document.getElementById("card-div");
const msaFeatureDiv = document.getElementsByClassName("msa-feature-div");

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
  },
  {
    data: "1588",
    name: "1588",
  },
  {
    data: "1488",
    name: "1488",
  },
  {
    data: "Precision AC",
    name: "Precision AC",
  },
  {
    data: "1288",
    name: "1288",
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
  if (featureDiv.style.display === "none") {
    featureDiv.style.display = "flex";
    navDiv.style.display = "none";
    featureBodyDiv.style.display = "flex";
    cardDiv.style.display = "none";
    identifyFeature(event);
  } else {
    featureDiv.style.display = "none";
    navDiv.style.display = "flex";
    featureBodyDiv.style.display = "none";
    cardDiv.style.display = "flex";
  }
};

const identifyFeature = (event) => {
  const currentFeature = event.currentTarget.childNodes[0].dataset.feature;
  if (currentFeature === "msa") {
    showCurrentFeature(event);
  } else {
    const msa = document.getElementsByClassName("msa-feature-div");
    msa[0].style.display = "none";
  }
};

showCurrentFeature = (event) => {
  if (msaFeatureDiv.length === 0) {
    const camerasDiv = document.createElement("div");
    const cameraUList = document.createElement("ul");
    cameraUList.setAttribute("class", "camera-ul");
    camerasDiv.setAttribute("class", "msa-feature-div");
    camerasDiv.style.display = "block";
    // Map through cameras
    cameras.map((camera) => {
      const cameraDiv = document.createElement("div");
      cameraDiv.setAttribute("class", "camera-div");
      cameraDiv.addEventListener("click", (event) => {
        showDisplays(event);
      });
      const cameraLiTag = document.createElement("li");
      cameraLiTag.setAttribute("class", "camera-li");
      const cameraPTag = document.createElement("p");
      cameraPTag.setAttribute("class", "camera-p-tag");
      cameraPTag.setAttribute("data-camera", camera.data);
      cameraPTag.innerHTML = `${camera.name}`;
      cameraDiv.appendChild(cameraPTag);
      cameraLiTag.appendChild(cameraDiv);
      cameraUList.appendChild(cameraLiTag);
      camerasDiv.appendChild(cameraUList);
      featureBodyDiv.appendChild(camerasDiv);
    });
  } else {
    const msa = document.getElementsByClassName("msa-feature-div");
    msa[0].style.display = "block";
  }
};

const showDisplays = (event) => {
  console.log("show camera");
};
