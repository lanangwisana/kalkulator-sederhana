function hitung() {
  const angka1 = document.getElementById("angka1").value;
  const angka2 = document.getElementById("angka2").value;
  const operator = document.getElementById("operator").value;

  let hasil;

  switch (operator) {
    case "+":
      hasil = parseInt(angka1) + parseInt(angka2);
      break;
    case "-":
      hasil = parseInt(angka1) - parseInt(angka2);
      break;
    case "*":
      hasil = parseInt(angka1) * parseInt(angka2);
      break;
  }

  document.getElementById("hasil").innerHTML = hasil;
}
