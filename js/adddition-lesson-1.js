
//task-1
// let name='Генератор защитного поля';
// let price= 2000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов.`);

/*Data types:
string 
number
boolean
undefined
null
symbol
bigInt
object
разница между null and undefined
undefined - тип данных!!! который возвращает нам комп, то что он не знает = все андефайнд
let total;
console.log(typeof total) - undefined;
null - присваиваю я, тогда когда мне надо пустая переменная
let total = null;
console.log(typeof total);
*/

//task-2
//Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество
// товаров на складе) и ordered (единиц товара в заказе). Сравни эти значения и по
// результатам выведи: Если в заказе указано число, превышающее количество товаров на
// складе, то выведи сообщение "На складе недостаточно твоаров!". В другом случае выводи 
//сообщение "Заказ оформлен, с вами свяжется менеджер". Проверь работоспособность кода с
// разными значениями переменной ordered, например 20, 80 и 130.
//const total = 100; const ordered = 50;

// const total=100;
// let ordered = 150;
// if (ordered>total){
//     console.log(`На складе недостаточно твоаров!`)
//     } else{`Заказ оформлен, с вами свяжется менеджер`};
  
   //ternary operator - это ?
   //(boolean) ? true : false;
//    let total = 100;
//    let ordered = 30;
//    let message= "";
//    message = (ordered>total) ?`На складе недостаточно твоаров!`: `Заказ оформлен, с вами свяжется менеджер`;

//разница в "равно"
   //= присваивания
   //boolean true/false
    //== равно без приведения типов
   //=== равно с приведением типов

   //разница в кавычках
   //`` - прочитает переменную
  // '' - не прочитает переменную
 //  "" - не прочитает переменную

//task-банкомат
//    let amount = 10000;
//    let sum = 500;
//    let username=`Vera`;
//    let pin = 1911;

// if (`Vera`=== username && 1111===pin){
// console.log(`Hello Vera!`)
//    if (amount >= sum){
//        console.log(`ОТримайте грошу у сумі ${sum}`);
//        amount-=sum;
//    }else {
//        console.log(`транзакція неможлива`)
//    }
//    console.log (`на рахунку залишилось ${amount}`)
// } else {
//     console.log('User is incorrect')}

    //task3
    //Напиши скрипт имитирующий авторизацию администратора в панели управления.
//Есть переменная message в которую будет записано сообщение о результате. При 
//загрузке страницы у посетителя запрашивается пароль через
 //prompt: Если нажали Cancel, записать в message строку
  //Отменено пользователем!' В протовном случае, если введен
   //пароль который совпадает со значением константы ADMIN_PASSWORD, 
   //записать в message строку 'Добро пожаловать!' В противном случае, то есть 
   //если ни одно из предыдущих условий не выполнилось, записать в message строку
   // 'Доступ запрещен, неверный пароль!' После всех проверок вывести в alert
   // значение переменной message. const ADMIN_PASSWORD = 'adminpass'; let message;

//    let message = ''
//    let ADMIN_PASSWORD='1111'
// // let userInput = Number(prompt ('Enter password'))
// let userInput = prompt ('Enter password')
// //с паролями string предпочтительней так как в пароле могут быть и цифыры и буквы
// //   console.log( userInput)
//   if (null===userInput){
//       message = 'Cancelled by user'
//   }
//  else if(userInput===ADMIN_PASSWORD){
//       message = 'YOu\'re in your account'}
//      else{
//         message = 'Access id denied'
//       }
//   console.log(message);

  //switch way
//   let message = ''
//   let ADMIN_PASSWORD='1111'
//   let userInput = prompt ('Enter password')
// switch(userInput){
//     case null:
//         message = 'Cancelled by user'
// break
// case  ADMIN_PASSWORD:
//     message = 'YOu\'re in your account'
//     break
//         default :
//             message = 'Access id denied'
//         }
// console.log(message)

//task additional
//5,10,20
// let input= prompt ("Enter the number");
// let total=0;
// for (let i=0; input !== null; i+=1){
//     if (isNaN(input)){
//         console.log('Not a number entered')
//         input = prompt('Enter the number')
//     } else {
//         total += Number(input);
//         input = prompt('Enter the number')
//     }
// console.log (`General sum is ${total}`)
// }


// const input = prompt ("Enter the number");;
// let total = 0;
// let i=0
// while(input!==null){
//     i+=1
//     console.log('Not a number entered')
//         input = prompt('Enter the number')}
// - 10 не меньше 10 (фолс) поэтому все остальное не выполнится



// console.log(Number.parseInt('5.90')); // 5 - приводит к целому числу
// console.log(Number.parseFloat('12.74')); // 12 - приводит к дробному числу
//task 4
//На счету пользователя есть 35500 кредитов, значение хранится в переменной credits
// (создай и присвой). Пользователь решает купить ремонтных дроидов, которые стоят
// по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid
// (создай и присвой). При посещении страницы, используя prompt, необходимо спросить 
//количество дроидов которые пользователь хочет купить и сохранить в переменную.
//Напиши скрипт который: Если в prompt была нажата кнопка Cancel, выводит в консоль
// сообщение 'Отменено пользователем!'. В противном случае, рассчитывает общую цену 
//заказа и сохраняет в переменной totalPrice. Проверяет сможет ли пользователь оплатить
// заказ: если сумма к оплате превышает количество кредитов на счету, выводи в консоль 
//сообщение 'Недостаточно средств на счету!'. в противном случае необходимо посчитать
// остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.
// let credits = 35500;
// let pricePerDroid = 3000;
// let droidAmount = Number(prompt('Enter the amount of droids you are going to buy'));
// let totalPrice=pricePerDroid*droidAmount
//   let message = ''
//  switch(droidAmount){
// case null:
//     message = 'Cancelled by user'
// break
// case totalPrice<=credits:
//         message = 'YOu\'re in your account'
//     break
//         default :
//             message = 'Access id denied'
//         }
// console.log(message)

//Задание 4
//На счету пользователя есть 35500 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой). При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.
//Напиши скрипт который: Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'. В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice. Проверяет сможет ли пользователь оплатить заказ: если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'. в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

//Задание 5
//Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.
//Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'. Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.
//Ниже приведен список стран и стоимость доставки.
//Китай - 150 кредитов Чили - 250 кредитов Австралия - 165 кредитов Индия - 90 кредитов Ямайка - 130 кредитов

//адание 6
//Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.
//При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total. Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt. После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'. bell Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.
