const bananaInput = document.querySelector(".section-inputbox");
const translateButton = document.querySelector(".translate-button");
let tranlatedTextArea = document.querySelector(".translated-textarea");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

var urlEdit = (text) => {
  return `${serverUrl}?text=${text}`;
};

var errorHandler = (error) => {
  console.log(`${error}, something went wrong...! please try again later`);
};

var getFetchedData = () => {
  var inputText = bananaInput.value;
  if (inputText === "") {
    tranlatedTextArea.value = "Please type something..! to Translate";
  } else if (inputText !== "") {
    return fetch(urlEdit(inputText))
      .then((response) => response.json())
      .then((json) => (tranlatedTextArea.value = json.contents.translated))
      .catch((error) => alert(errorHandler()));
  }
};

translateButton.addEventListener("click", getFetchedData);
