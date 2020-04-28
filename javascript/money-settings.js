document.addEventListener("DOMContentLoaded", function () {
  selectFeature();
});

const selectFeature = () => {
  addEventListener();
};

const addEventListener = () => {
  const featureIcon = document.getElementById("msa-icon");
  featureIcon.addEventListener("click", showClick);
};

const showClick = () => {
  alert(" I'm still here");
};
