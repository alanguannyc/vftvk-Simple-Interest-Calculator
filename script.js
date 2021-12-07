function compute() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var amount = (principal * years * rate) / 100;
  var year = new Date().getFullYear() + parseInt(years);

  document.getElementById("result").innerHTML =
    "If you deposit " +
    principal +
    ",<br>at an interest rate of " +
    rate +
    "%<br>You will receive an amount of " +
    amount +
    ",<br>in the year " +
    year +
    "<br>";
}
function validateInput() {
  var principal = document.getElementById("principal");
  if (principal.value <= 0) {
    alert("Please enter a valid number");
    principal.focus();
    return;
  }
  compute();
}
function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval + "%";
}

(function (window, document, undefined) {
  window.onload = init;

  function init() {
    var html = "";
    var years = document.getElementById("years");
    for (var i = 1; i <= 10; i++) {
      html = html + `<option value=${i}>${i}</option>`;
    }

    years.innerHTML = html;
  }
})(window, document, undefined);
