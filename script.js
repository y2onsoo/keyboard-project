/////////키보드 press
window.addEventListener("keydown", e => {
  const key = document.getElementById(e.key);
  if (key) key.classList.add('pressed');
});


window.addEventListener("keyup", e => {
  const key = document.getElementById(e.key);
  if (key) key.classList.remove('pressed');
});




//input박스 입력
function printName()  {
  const name = document.getElementById('name').value;
  document.getElementById("result").innerText = name;
}


document.addEventListener('keypress', (event) => {
  console.log(event);
});