import { showError, reloadPage } from '../auxiliar_functions.js'

const resultArea = document.getElementById("result-request");

export default async function verifyIdentity(key, reqBody) {
    const req = await fetch("https://http.msging.net/commands", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: key,
      },
      body: JSON.stringify(reqBody),
    });
    const status = await req.status;
    const res = await req.json();
    console.log(status);
    console.log(res);
    if (res.status == "failure" && status == 200) {
      showError("400");
      resultArea.innerHTML =
        "O usuário não foi encontrado, por favor informe um usuário válido";
        reloadPage();
        console.error(res)
      return false;
    } else if (status != 200) {
      showError(status);
      if (status == 401) {
        resultArea.innerHTML =
          "A chave digitada é inválidada, por favor informe uma chave válida";
          console.error(res)
      }
      return false;
    } else {
      return true;
    }
  }