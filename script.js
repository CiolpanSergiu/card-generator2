const fillBtn = document.getElementById("fill-btn");
const captureBtn = document.getElementById("screenshot-btn");
const nameField = document.getElementById("name-field");
const functionField = document.getElementById("function-field");
const profilePic = document.getElementById("profile-pic-field");
const newcomeTagField = document.getElementById("newcomer-tag");
// this is for manual color picking variant
// const textColorField = document.getElementById("text-color-field");
const colorPicker = document.getElementById("color-picker");

const card = document.getElementsByClassName("card-container")[0];

const reader = new FileReader();

const employeeName = document.getElementsByClassName("employee-name")[0];
const employeeFunction = document.getElementsByClassName("function")[0];
const employeePicture = document.getElementsByClassName("profile-img")[0];
const newcomerText = document.getElementsByClassName("newcomer-label")[0];

const colorChangingText = document.getElementsByClassName("colored-text");

const fillCard = () => {
  const nameValue = nameField.value;
  const functionValue = functionField.value;

  employeeName.innerText = `- ${nameValue} -`;
  employeeFunction.innerText = `- ${functionValue} -`;

  // this is for manual color picking variant

  // for (let i = 0; i < colorChangingText.length; i++) {
  //   CSS.supports("color", textColorField.value)
  //     ? (colorChangingText[i].style.color = textColorField.value)
  //     : (colorChangingText[i].style.color = "black");
  // }

  for (let i = 0; i < colorChangingText.length; i++) {
    colorChangingText[i].style.color = colorPicker.value;
  }

  newcomeTagField.checked
    ? newcomerText.classList.add("visible-text")
    : newcomerText.classList.remove("visible-text");

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
  fillCard();
});

captureBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // this require many trials and errors because
  // html2canvas take screenshots that are different depending on the window scale
  // everytime a space is created between an element, the second parameter need some tweeks
  // in order for screenshot to capture the whole element, without white space;
  window.scrollTo(0, 30);
  screenshotCard();
});
