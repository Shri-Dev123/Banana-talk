const bananaInput = document.querySelector(".section-inputbox");
const translateButton = document.querySelector(".translate-button");
let tranlatedTextArea = document.querySelector(".translated-textarea");

const serverUrl = "https://api.funtranslations.com/translate/minion.json";

var urlEdit = function (serverUrl, text) {
  return `${serverUrl}?text=${text}`;
};

var getFetchedData = function () {
  var inputText = bananaInput.value;
  if (inputText === "") {
    tranlatedTextArea.value =
      "Please type something in the above input box, To translate";
  } else {
    fetch(urlEdit(serverUrl, inputText))
      .then(function (response) {
        response
          .json()
          .then(function (json) {
            if (json?.contents?.translated) {
              tranlatedTextArea.value = json.contents.translated;
            } else {
              alert(json.error.message);
            }
          })
          .catch(function (error) {
            alert(error.message);
          });
      })
      .catch(function (error) {
        alert("something went wrong, please try later");
      });
  }
};

translateButton.addEventListener("click", getFetchedData);
