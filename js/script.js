const userName = prompt("Как вас зовут?", "Игрок");
alert(`Привет, ${userName}! Давай посмотрим на твою игровую статистику за неделю.`);
console.log(`Пользователь: ${userName}`);

const gameHours = [12, 3, 8, 15, 2, 6, 1];
const gameNames = ["RPG", "Roguelike", "Шутер", "RTS", "Головоломка", "Платформер", "Карточная игра"];

console.log("Игровая статистика за неделю:", gameHours);

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function filterByCondition(arr, condition) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (condition(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}


// сумма часов
const totalHours = sumArray(gameHours);

// игры > 10 часов
const popularGames = filterByCondition(gameHours, (hours) => hours > 10);
const popularHours = sumArray(popularGames);

// максимум часов
const maxHours = findMax(gameHours);

// подсчёт лёгких
let lightGamesCount = 0;

for (let i = 0; i < gameHours.length; i++) {
  if (gameHours[i] <= 3) {
    lightGamesCount++;
  }
}

const lightGamesShare = (lightGamesCount / gameHours.length) * 100;

// вывод результатов

if (popularGames.length > 0) {
  alert(`Вы провели ${totalHours} часов в играх, из них ${popularHours} часов – в самых популярных.`);
} else {
  alert(`Вы провели ${totalHours} часов в играх. Игр с временем более 10 часов на этой неделе не было.`);
}

console.log(`Доля коротких игровых сессий (≤ 3 часов): ${lightGamesShare.toFixed(1)}%`);
console.log(`Количество коротких игровых сессий: ${lightGamesCount}`);
console.log(`Максимальное время в одной игре: ${maxHours} часов`);
console.log(`Самые популярные игры (> 10 часов):`, popularGames);

// условие по общей сумме
if (totalHours > 25) {
  console.log("Возможно, стоит сбалансировать время между играми и учёбой");
}