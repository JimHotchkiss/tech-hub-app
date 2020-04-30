document.addEventListener("DOMContentLoaded", function () {
  iconButtons();
});

const iconData = [
  {
    data: "msa",
    src: "/img/msa2.png",
    name: "Money Settings",
  },
  {
    data: "networking",
    src: "/img/networking2.png",
    name: "Networking",
  },
  {
    data: "color-adjustments",
    src: "/img/adjustment.png",
    name: "Color Adjustment",
  },
  {
    data: "ipad",
    src: "/img/ipad.png",
    name: "iPad Assistance",
  },
  {
    data: "tech-spec",
    src: "/img/ifu.png",
    name: "Tech Specs",
  },
  {
    data: "reprocessing",
    src: "/img/reprocessing.png",
    name: "Reprocessing",
  },
];

const iconButtons = () => {
  iconData.map((item, index) => {
    console.log(index);
    const topCardDiv = document.getElementById("card-div");
    const cardClassDiv = document.createElement("div");
    cardClassDiv.setAttribute("class", "card-wrapper");
    cardClassDiv.setAttribute("dataset-console", item.data);
    cardClassDiv.addEventListener("click", (event) => {
      showFeature(event);
    });
    const aTagImgDiv = document.createElement("div");
    aTagImgDiv.setAttribute("class", "icon-div");
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", item.src);
    imgElement.setAttribute("class", "img-element");
    imgElement.setAttribute("alt", "icon");
    const cardAnchor = document.createElement("a");
    // cardAnchor.setAttribute("data-console", item.data);
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

const showFeature = (event) => {
  event.path.map((item) => {
    if (item.src !== undefined) {
      const titleDiv = document.getElementById("nav-title");
      console.log(item);
      titleDiv.id = "title-no-show";
      // const titleDiv = document.getElementsByClassName("nav-title");
      // titleDiv.className = "nav-title-feature";
      // const featureIconDiv = document.createElement("div");
      // featureIconDiv.setAttribute("class", "feature-icon-nav");
      // const iconImgElement = document.createElement("img");
      // iconImgElement.setAttribute("src", item.src);
      // featureIconDiv.appendChild(iconImgElement);
      // navBar.prepend(featureIconDiv);
    }
  });
};
