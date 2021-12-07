function compute() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var amount = (principal * years * rate) / 100;
  var year = new Date().getFullYear() + parseInt(years);

  document.getElementById("result").innerHTML =
    "If you deposit <span class='number'>" +
    principal +
    "</span>,<br>at an interest rate of <span class='number'>" +
    rate +
    "%</span><br>You will receive an amount of <span class='number'>" +
    amount +
    "</span>,<br>in the year <span class='number'>" +
    year +
    "</span><br>";
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
  if (rateval == 0) {
    document.getElementById("rate_val").innerText = "1%";
  }
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
