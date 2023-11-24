import CollectData from "./collect_data.js";
import {
  buildVerifyId,
  buildGetContextVariables
} from "./build_request.js";
import verifyIdentity from './async_functions/verifyIdentity.js'
import getContextVariables from './async_functions/getVariables.js'
import deleteVariables from "./async_functions/deleteVariables.js";
import { showSuccess, reloadPage } from './auxiliar_functions.js'


const resultArea = document.getElementById("result-request");

async function reset() {
  const idUser = CollectData.idUser();
  const key = CollectData.botKey();
  const reqBody = buildVerifyId(idUser);
  console.log(idUser);
  console.log(key);
  console.log(reqBody);
  const isUser = await verifyIdentity(key, reqBody);
  if (isUser) {
    const reqBodyVarContext = buildGetContextVariables(idUser);
    const contextVariables = await getContextVariables(key, reqBodyVarContext);
    if (!contextVariables) {
      showSuccess();
      reloadPage();
    } else {
      const returnDelete = await deleteVariables(key, idUser, contextVariables);
    }
  }
}

export { reset }
