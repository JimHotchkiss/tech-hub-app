document.addEventListener("DOMContentLoaded", function () {
  iconButtons();
});

const iconData = [
  {
    data: "msa",
    src: "/img/msa-tile-white.png",
    name: "Money Settings"
  },
  {
    data: "networking",
    src: "/img/networking.png",
    name: "Networking"
  },
  {
    data: "color-adjustments",
    src: "/img/wrench.png",
    name: "Color Adjustment"
  },
  {
    data: "ipad",
    src: "/img/ipad.png",
    name: "iPad Assistance"
  },
  {
    data: "tech-spec",
    src: "/img/ifu.png",
    name: "Tech Specs"
  },
  {
    data: "reprocessing",
    src: "/img/reprocessing.png",
    name: "Reprocessing"
  }
];

const iconButtons = () => {
  iconData.map(item => {
    const topCardDiv = document.getElementById("card-div");
    const cardClassDiv = document.createElement("div");
    cardClassDiv.setAttribute("class", "card-wrapper");
    const aTagImgDiv = document.createElement("div");
    aTagImgDiv.setAttribute("class", "a-tag-img-div");
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", item.src);
    imgElement.setAttribute("alt", "icon");
    const cardAnchor = document.createElement("a");
    cardAnchor.setAttribute("data-console", item.data);
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
