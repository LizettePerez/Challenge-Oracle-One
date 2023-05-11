const userText = document.querySelector(".userText");
const textAlert = document.querySelector(".textAlert");
const errorAlert = document.querySelector(".errorAlert");
const asideContainer = document.querySelector(".asideContainer");
const encryptedText = document.querySelector(".encryptedText");
const copyButton = document.getElementById("copy");

const copyFunc = () => {
  let copyText = encryptedText;
  copyText.select();
  document.execCommand("copy");
}

const encrypt = document.getElementById("encrypt");
encrypt.addEventListener("click", (e) => {

  e.preventDefault();
  const userTextValue = userText.value.toLowerCase();

  if (userTextValue === "") {
    errorAlert.style.display = "block"
    textAlert.style.display = "none"
    userText.value = "Ingrese el texto aqui";
    asideContainer.style.display = "block";
    encryptedText.style.display = "none";
    copy.style.display = "none";
  } else {
    errorAlert.style.display = "none"
    textAlert.style.display = "block"

    const newText = userTextValue
      .replace(/[e]/g, "enter")
      .replace(/[i]/g, "imes")
      .replace(/[a]/g, "ai")
      .replace(/[o]/g, "ober")
      .replace(/[u]/g, "ufat");

    asideContainer.style.display = "none";
    encryptedText.style.display = "block";
    encryptedText.value = newText;
    copy.style.display = "block";
  }
})

const decrypt = document.getElementById("decrypt");
decrypt.addEventListener("click", (e) => {

  e.preventDefault();
  const userTextValue = userText.value.toLowerCase();

  if (userTextValue === "") {
    errorAlert.style.display = "block"
    textAlert.style.display = "none"
    userText.value = "Ingrese el texto aqui";
    asideContainer.style.display = "block";
    encryptedText.style.display = "none";
    copy.style.display = "none";
  } else {
    errorAlert.style.display = "none"
    textAlert.style.display = "block"

    const newText = userTextValue
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    asideContainer.style.display = "none";
    encryptedText.style.display = "block";
    encryptedText.value = newText;
    copy.style.display = "block";
  }
})

copyButton.addEventListener("click", () => {
  copyFunc();
});

  


