function copyURLToClipboard() {
    var url = "https://encr.pw/PorUmBemMAIOR";
    var input = document.createElement("input");
    input.value = url;
    document.body.appendChild(input);
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(input);
  
    Swal.fire({
      title: "URL copiada para a área de transferência!",
      icon: "success",
      showConfirmButton: false,
      timer: 2000
    });
  }
  
  var copyButton = document.getElementById("copy-button");
  copyButton.addEventListener("click", copyURLToClipboard);
  