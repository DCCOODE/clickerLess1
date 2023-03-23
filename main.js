let num = 0;
let click = 10;
const active = document.getElementById("buttonDisabled");
const button1 = document.getElementById("button1");
function counterPunten() {
  click = click - 1;
  console.log(click);
  num = num + 1;
  document.getElementById("counter").value = num;
  if (click == 0) {
    active.disabled = false;
    button1.disabled = true;
    click = 10;
  }
}

function counterPunten2() {
  num = num + 2;
  document.getElementById("counter").value = num;
  active.disabled = true;
  button1.disabled = false;
}

function restart() {
  location.reload;
}
