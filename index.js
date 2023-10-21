// Задача: Создайте функцию, которая проверяет, является ли 
// заданное число четным, и возвращает Promise с результатом 
// проверки. Если переданное значение не является числом, 
// Promise будет отклонен с сообщением об ошибке.

function checkEvenNumber(number) {
    return new Promise((resolve, reject) => {
      if (typeof number === 'number' && !isNaN(number))  { // проверка являеться ли значение числом
        if (number % 2 === 0) { // проверка являеться ли число четным
          resolve(`${number} является четным числом.`); // вывод промиса с четным числом
        } else {
          resolve(`${number} не является четным числом.`); // вывод промиса с нечетным числом
        }
      } else {
        reject('Ошибка: Введенное значение не является числом.'); // отклонение промиса если значение не являеться числом
      }
    });
  }
  
  // Примеры использования:
  checkEvenNumber(4)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });
  
  checkEvenNumber('не число')
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });