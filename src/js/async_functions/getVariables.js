import { showError } from '../auxiliar_functions.js'

const resultArea = document.getElementById("result-request");

export default async function getContextVariables(key, reqBodyVarContext) {
    const req = await fetch("https://http.msging.net/commands", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: key,
      },
      body: JSON.stringify(reqBodyVarContext),
    });
    const status = await req.status;
    const res = await req.json();
    if (status != 200) {
      showError(status);
      return status;
    } else if (res.status == "failure") {
      resultArea.innerHTML = "Não existem variáveis para deletar";
      return false;
    } else {
      const allContextVariables = res.resource.items;
      const limit = res.resource.items.length;
      return { allContextVariables, limit };
    }
  }