document.getElementById("knap").addEventListener("click", displayDate);

function displayDate() {
  let a = +document.getElementById("a").value;
  let b = +document.getElementById("b").value;
  document.getElementById("resultat").value = a + b;
}
