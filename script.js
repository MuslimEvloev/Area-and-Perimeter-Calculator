const button = document.querySelector(".button");

button.addEventListener("click", function () {
  const a = parseFloat(document.getElementById("input").value);
  if (isNaN(a) || a <= 0) {
    alert("Введите корректное число");
    return;
  }

  const square = a * a;
  const perimeter = 4 * a;
  document.getElementById("square").textContent = `
    Площадь: ${square}`;
  document.getElementById("perimeter").textContent = `
    Периметер: ${perimeter}`;
});
