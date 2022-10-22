import { reset } from './src/js/reset.js'

const resultArea = document.getElementById("result-request");

document.getElementById("btn-exec").addEventListener("click", () => {
    const contactId = document.querySelector("#contact-id").value.length;
    const botKey = document.querySelector("#key-select").value.length;
  
    if (contactId === 0 || botKey === 0) {
      resultArea.innerHTML = "Informe a Key do bot e ID do usuário";
    } else {
      reset();
    }
  });