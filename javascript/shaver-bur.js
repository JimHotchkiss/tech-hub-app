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
const shaverContainerDiv = document.getElementById("shaver-container-div");

const showShaverHomePage = () => {
  console.log(shaverContainerDiv);
  if (shaverContainerDiv.style.display === "none") {
    console.log(shaverContainerDiv.style.display);
    shaverContainerDiv.style.display = "block";
  } else {
    console.log("else", shaverContainerDiv.style.display);
    shaverContainerDiv.style.display = "none";
  }

  showShaverImagesAndData();
};

const clearShaveDom = () => {
  shaverContainerDiv.style.display = "none";
  if (shaverContainerDiv.firstChild) {
    while (shaverContainerDiv.firstChild) {
      console.log(shaverContainerDiv.firstChild);
      shaverContainerDiv.removeChild(shaverContainerDiv.firstChild);
    }
  }
};

const showShaverImagesAndData = () => {
  console.log("show shaver images and data");
  shaverBurs.map((shaverBur) => {
    // first main div
    const shaverImageDataDiv = document.createElement("div");
    shaverImageDataDiv.setAttribute("class", "shaver-image-data-div");
    // data div
    const shaverDataDiv = document.createElement("div");
    shaverDataDiv.setAttribute("class", "shaver-data-div"); // Shaver data
    shaverBurs.map((shaverData, index) => {
      // Shaver data p tags
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
