const fillBtn = document.getElementById("fill-btn");
const captureBtn = document.getElementById("screenshot-btn");
const nameField = document.getElementById("name-field");
const functionField = document.getElementById("function-field");
const profilePic = document.getElementById("profile-pic-field");

const card = document.getElementsByClassName("card-container")[0];

const reader = new FileReader();

const employeeName = document.getElementsByClassName("name")[0];
const employeeFunction = document.getElementsByClassName("function")[0];
const employeePicture = document.getElementsByClassName("profile-img")[0];

const fillCard = () => {
  const nameValue = nameField.value;
  const functionValue = functionField.value;

  employeeName.innerText = `- ${nameValue} -`;
  employeeFunction.innerText = `- ${functionValue} -`;
  reader.onload = function (e) {
    employeePicture.src = e.target.result;
  };
  reader.readAsDataURL(profilePic.files[0]);
};

const screenshotCard = () => {
  html2canvas(card).then(function (canvas) {
    document.getElementById("output").appendChild(canvas);
  });
};

fillBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
  fillCard();
});

captureBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(0, 55);
  screenshotCard();
});
