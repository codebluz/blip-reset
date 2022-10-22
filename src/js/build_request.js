import { bodyToVerify, bodyGetContext} from "./request_body.js";

function buildVerifyId(id) {
  bodyToVerify.uri += id;
  return bodyToVerify;
}

function buildGetContextVariables(phone) {
  bodyGetContext.uri += phone;
  return bodyGetContext;
}



export { buildVerifyId, buildGetContextVariables };
