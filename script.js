function changeColor() {
  [...document.getElementsByClassName('output')].forEach(
    item => item.style.backgroundColor = "red"
  );
  document.title = 'Red'
}

function changeColor1() {
  [...document.getElementsByClassName('output')].forEach(
    item => item.style.backgroundColor = "lime"
  );
  document.title = 'Green'
}

function changeColor2() {
  [...document.getElementsByClassName('output')].forEach(
    item => item.style.backgroundColor = "blue"
  );
  document.title = 'Blue'
}