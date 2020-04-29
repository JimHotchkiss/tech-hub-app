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
    // for each iteration, grab the top div
    const topCardDiv = document.getElementById("card-div");
    // create 'card' class div
    const cardClassDiv = document.createElement("div");
    // give class name
    cardClassDiv.setAttribute("class", "card-wrapper");
    // create a tag and img element div
    const aTagImgDiv = document.createElement("div");
    aTagImgDiv.setAttribute("class", "a-tag-img-div");
    // create img element
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", item.src);
    imgElement.setAttribute("alt", "icon");
    // create anchor, and insert data
    const cardAnchor = document.createElement("a");
    cardAnchor.setAttribute("data-console", item.data);
    // put imgElement in anchor tag
    cardAnchor.appendChild(imgElement);
    // put cardAnchor into a tag img div

    cardClassDiv.appendChild(cardAnchor);

    // cardClassDiv.appendChild(aTagImgDiv);
    // aTagImgDiv.appendChild(cardAnchor);

    // put a tag img div into cardclassdiv
    // cardClassDiv.appendChild(aTagImgDiv);
    // put cardClassDiv into topCardDiv
    topCardDiv.appendChild(cardClassDiv);
    // create text p tag
    const pTag = document.createElement("p");
    // add text
    pTag.innerHTML = `${item.name}`;
    // create text  div
    const textContainer = document.createElement("div");
    textContainer.setAttribute("class", "text-container");
    // insert p tag into textContainer
    textContainer.appendChild(pTag);
    // insert textContainer in cardClassDiv

    // cardClassDiv.appendChild(textContainer);

    topCardDiv.appendChild(textContainer);
    // insert cardClassDiv into topCardDiv
    // topCardDiv.appendChild(cardClassDiv);
  });
};
// const cardDiv = document.getElementById('card-div')
