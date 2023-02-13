'use strict';

/*
1. Задача про обчислення різниці часу

Напишіть функцію яка буде буде приймати 3 параметри - початкову дату (string)- кінцеву дату (string)- розмірність ('days', 'hours', 'minutes', seconds)

Функція повертатиме часовий період між цими датами згідно розмірності.
Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.

Приклади:durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds') // поверне '86400 seconds'
durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days') // поверне '362 days'
*/

function durationBetweenDates (firstDate = '01.01.2001', secondDate = '12.02.2023', measure = 'minutes') {

    firstDate =  new Date(firstDate);
    secondDate =  new Date(secondDate);
    
    let duration;
    
    if (firstDate === 'invalid date' || secondDate === 'invalid date') {
      return 'invalid date';
    } else if (secondDate > firstDate) {
      duration = secondDate - firstDate;
    } else if (secondDate < firstDate) {
      duration = firstDate - secondDate;
    } else {
      return 0;
    }
      switch (measure) {
        case "days"   : return Math.floor(duration / (1000 * 60 * 60 * 24)) + ' days'; 
        case "hours"  : return Math.floor(duration / (1000 * 60 * 60)) + ' hours'; 
        case "minutes": return Math.floor(duration / (1000 * 60)) + ' minutes';
        case "seconds": return Math.floor(duration / 1000) + ' seconds';
        default: return `choose correct measure ('days', 'hours', 'minutes', 'seconds')`;
      }
     }
    
    console.log (durationBetweenDates());
    

/*
2. Задача про перетворення об'єкту
Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одинм словом), а значення - його ціна.
Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.
*/

const priceData = {
Apples: '23.4',
BANANAS: '48',
oRAngGEs: '48.7584',
 };
function optimizer(data) {
// тут ваш код
return Object.fromEntries (
  Object.entries(data).map(([key, value]) => {
    return [key.toLowerCase(), (Math.round(value * 100) / 100).toFixed(2)];
  }),
);
};
let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData);  // {apples: '23.40', bananas: '48.00', oranges: '48.76'}



/*
3. Задача про рекурсію та ітерацію
Напишіть: - функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.
*/
// Приклад:

function recursiveOddSumTo(number) {
// тут ваш код

if (number <= 0){
  return 0;  
}

else {
   if(number % 2 !== 1){
    return recursiveOddSumTo(number - 1);   
   }

   else {
    return number + recursiveOddSumTo(number - 1);   
   }
}
};

console.log(recursiveOddSumTo(1)); // 1
console.log(recursiveOddSumTo(10)); // 25

// - функцію яка ітеративно (в циклі) буде знаходити суму
//  всіх непарних додатніх чисел до якогось числа.

// Приклад:

 function iterativeOddSumTo(number) {
   // тут ваш код

   let someNumber = 0;
   for (let i = 0; i < number; i++) {

       if(i % 2 === 0){
        someNumber += i + 1;
       }
   }

   return someNumber;

  };
  
  console.log(iterativeOddSumTo(1)); // 1
  console.log(iterativeOddSumTo(10)); // 25








