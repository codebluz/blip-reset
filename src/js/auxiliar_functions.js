const resultArea = document.getElementById("result-request");

function showError(status) {
    document.querySelector(".status-result").innerText = `Erro ${status}`;
    document.querySelector(".status-result").classList.toggle("bg-info");
    document.querySelector(".status-result").classList.toggle("bg-danger");
  
    setTimeout(() => {
      document.querySelector(".status-result").innerText = `Status`;
      document.querySelector(".status-result").classList.toggle("bg-info");
      document.querySelector(".status-result").classList.toggle("bg-danger");
      resultArea.innerHTML = "Tente novamente";
    }, 3000);
  }
  
  function showSuccess() {
    document.querySelector(".status-result").innerText = `Sucesso`;
    document.querySelector(".status-result").classList.toggle("bg-info");
    document.querySelector(".status-result").classList.toggle("bg-success");
    setTimeout(() => {
      document.querySelector(".status-result").innerText = `Status`;
      document.querySelector(".status-result").classList.toggle("bg-info");
      document.querySelector(".status-result").classList.toggle("bg-success");
    }, 3000);
  }
  
  function reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  }

  export { showError, showSuccess, reloadPage }
