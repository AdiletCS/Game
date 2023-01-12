var you = 0;
var computer = 0;
var result = 0;
var resColor = "black";

// Это функция рандомно возвращает камень,бумагу,ножницы
function getRandomChoice() {
  var randomNum = Math.floor(Math.random() * 3);
  if(randomNum == 0){
     return "Камень"
  }
  if(randomNum == 1){
    return "Бумага"
  }
  if(randomNum == 2){
    return "Ножницы"
  }
}
// Это функция выевляет победителя
function winner() {
  if ((you == 'Ножницы' && computer == 'Бумага')||(you == 'Бумага' && computer == 'Камень')||(you == 'Камень' && computer == 'Ножницы')){
    resColor = "green";
    return "Вы выиграли"
  }
  else if ((computer == 'Ножницы' && you == 'Бумага')||(computer == 'Бумага' && you == 'Камень')||(computer == 'Камень' && you == 'Ножницы')) {
    resColor = "red";
    return "Вы проиграли"
  }
  else if (computer == you) {
    resColor = "blue";
    return "Ничья";
  }
}
// Этот кусок кода срабатывает когда пользователь нажемает на кнопку камень
document.getElementById('Rock').addEventListener('click',rock);
function rock() {
  you = "Камень";
  computer = getRandomChoice();
  result = winner();
  document.getElementById('You').innerHTML = "Твой выбор: " + you;
  document.getElementById('Computer').innerHTML = "Выбор компьютера:" + computer;
  document.getElementById('Output').innerHTML = result;
  document.getElementById('Output').style.color = resColor;
}
// Этот кусок кода срабатывает когда пользователь нажемает на кнопку ножницы
document.getElementById('Scissors').addEventListener('click',scissors);
function scissors() {
  you = "Ножницы";
  computer = getRandomChoice();
  result = winner();
  document.getElementById('You').innerHTML = "Твой выбор: " + you;
  document.getElementById('Computer').innerHTML = "Выбор компьютера:" + computer;
  document.getElementById('Output').innerHTML = result;
  document.getElementById('Output').style.color = resColor;
}
// Этот кусок кода срабатывает когда пользователь нажемает на кнопку бумага
document.getElementById('Paper').addEventListener('click',paper);
function paper() {
  you = "Бумага";
  computer = getRandomChoice();
  result = winner();
  document.getElementById('You').innerHTML = "Твой выбор: " + you;
  document.getElementById('Computer').innerHTML = "Выбор компьютера:" + computer;
  document.getElementById('Output').innerHTML = result;
  document.getElementById('Output').style.color = resColor;
}
