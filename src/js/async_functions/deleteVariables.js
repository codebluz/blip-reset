import { showSuccess, reloadPage } from '../auxiliar_functions.js'

const resultArea = document.getElementById("result-request");
let responseText = "";

export default async function deleteVariables(key, identity, variables) {
    let auxCont = 0;
    let response = false;
    resultArea.innerHTML = "Processando!!!";
    const id = setInterval(async () => {
      const body = {
        id: "{{$guid}}",
        to: "postmaster@msging.net",
        method: "delete",
        uri: `/contexts/${identity.replace("@", "%40")}/${
          variables.allContextVariables[auxCont]
        }`,
      };
      const actionDelete = await executeDelete(key, body);
      if (!actionDelete) {
        console.log(
          "Falha ao deletar " +
            variables.allContextVariables[auxCont] +
            " ...tentando novamente"
        );
        const actionDelete = await executeDelete(key, body);
      } else {
        responseText = `
        variável  ${variables.allContextVariables[auxCont]}  deletada com sucesso`;
        let textForProcessing = resultArea.value;
        textForProcessing += responseText;
        resultArea.innerHTML = textForProcessing;
        console.log(
          "variável " +
            variables.allContextVariables[auxCont] +
            " deletada com sucesso"
        );
        auxCont++;
        if (auxCont == variables.limit) {
          clearInterval(id);
          console.log("Todas as variáveis foram excluídas");
          textForProcessing = resultArea.value;
          textForProcessing += `
          Variáveis excluídas com sucesso`;
          resultArea.innerHTML = textForProcessing;
          showSuccess();
          reloadPage();
        }
      }
    }, 300);
  }
  
  async function executeDelete(key, body) {
    const req = await fetch("https://http.msging.net/commands", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: key,
      },
      body: JSON.stringify(body),
    });
    const status = await req.status;
    const res = await req.json();
    if (status != 200) {
      return false;
    } else {
      return true;
    }
  }

 
