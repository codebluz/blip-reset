const bodyToVerify = {
  id: "{{$guid}}",
  to: "postmaster@crm.msging.net",
  method: "get",
  uri: "/contacts/",
};

const bodyGetContext = {
  id: "{{$guid}}",
  to: "postmaster@msging.net",
  method: "get",
  uri: "/contexts/",
};

const bodyDeleteVar = {
  id: "{{$guid}}",
  to: "postmaster@msging.net",
  method: "delete",
  uri: "/contexts/",
};

export { bodyToVerify, bodyGetContext, bodyDeleteVar };
