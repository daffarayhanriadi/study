const submitAction = document.getElementById("formDataDiri");

// Event onSubmit
submitAction.addEventListener("submit", function (event) {
  const inputNama = document.getElementById("inputNama").value;
  const inputDomisili = document.getElementById("inputDomisili").value;
  const hiddenMessage = `Halo, ${inputNama}. Bagaimana cuacanya di ${inputDomisili}`;

  document.getElementById("messageAfterSubmit").innerText = hiddenMessage;
  event.preventDefault(); // mencegah proses refresh ketika melakukan proses submit pada form
});
