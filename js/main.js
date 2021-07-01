//Напишите программу на JavaScript для вычисления суммы двух заданных целых чисел. Если два значения одинаковы, то возвращается тройная их сумма.


// function sum (a,b){
//     if( a == b){
//         return 3*(a + b);
//     }else{
//         return a + b
//     }
// }

// console.log(sum(2,2))


// Дан массив arrStudents с данными, нужно создать функцию checkStudent(x) 
// которая будет выводить является ли введеный человек учащимся или нет


// let arrStudents = [
//     {
//         name: "Бексултан",
//         isStudent: true,
//     },
//     {
//         name: "Тилек",
//         isStudent: false,
//     },
//     {
//         name: "Айгерим",
//         isStudent: true,
//     },
//     {
//         name: "Бегимай",
//         isStudent: false,
//     },
//     {
//         name: "Баатыр",
//         isStudent: true,
//     },
//     {
//         name: "Санжар",
//         isStudent: true,
//     },
//     {
//         name: "Эрлан",
//         isStudent: true,
//     },
//     {
//         name: "Бера",
//         isStudent: false,
//     },
// ];

// function checkStudent(a){
//     for(let i = 0; i < arrStudents.length; i++){
//         if(arrStudents[i].name == a){
//             if(arrStudents[i].isStudent){
//                 console.log(`${arrStudents[i].name} яляется студентом`);
//             }else{
//                 console.log(`${arrStudents[i].name} является ментором`);
//             }
//         }
//     }
// }

// checkStudent('Бера')



// let name1 = 'John';


// function hello (){
//     name1 = 'Steven';
//     console.log(`Hi, ${name1} `)
// }

// hello()

// let name1 = 'John';

// function hello (){
//     let name1 = 'Steven';
//     console.log(`Hi, ${name1} `)
// }


// hello()


// let a = "";    //false
// let b = 9;     //true
// let c = null;  //false

// console.log(( !(!a || !b && !c) ));

// ( !(!a || !b && !c) )




// Задание №3
// Создайте функцию, которая преобразовывает
// многомерный массив arr в одномерный массив.
// При помощи рекурсии!

let arr = [1, [true], [[3], ["hello"]]];
Вывод: [1,true,3,'hello'];
let newArr = []

function someRec (arr, i=0){
    if(i === arr.length) return 
    if(typeof arr[i] == 'object') {
        someRec(arr[i])
    } else{ 
        newArr.push(arr[i])
}
    return someRec(arr, i+1)
}
someRec(arr)    
console.log(newArr);





// Используя замыкание напишите функцию. Родительская функция должна принимать массив, а дочерняя принимает число. 
// Функция должна возвращать true, если в массиве есть заданное число, иначе, возвращать false.
// Например, есть массив [4,5.6]
// func(7) //false
// func(6) //true

// function isCount (arr) {
//     return function(num) {
//         return arr.includes(num)
//     }
// }

// let bigArr = isCount([4, 5, 8, 7, 109, 27, 17, -1])

// console.log(bigArr(1));
// console.log(bigArr(109));











// Задание №8
// Дана строка с целыми числами. Найдите числа, стоящие в кавычках и увеличьте их в два раза.
// Пример:
// input: "2aaa'3'bbb'4'"
// output: "2aaa'6'bbb'8'"
  


// Задание №9
// Дана строка '23 + 35 ='. Числа могут быть любыми. Выведите на экран результат операции.
// Пример:
// input: '23 + 35 ='
// output: '23 + 35 =58'

// let input = '23 + 35 = ';
// let res = input.replace(/(\d+)\s\+\s(\d+)\s=\s/g, function(a, b, c) {

//     let res2 = parseInt(b) + parseInt(c)
//     return a + res2
// })
// console.log(res);


// Лифт. 16 этажей

// let elevator = {
//     currentFloor: 1,
//     minFloor: 1,
//     maxFloor: 16,
//     printFloor(){
//         console.log(this.currentFloor);
//     },
//     upOneFloor(){
//         if(this.currentFloor < this.maxFloor ){
//             this.currentFloor++
//             this.printFloor()
//         }else{
//             alert('максимальный этаж')
//         }
//     },
//     downOneFloor(){
//         if(this.currentFloor > this.minFloor ){
//             this.currentFloor--
//             this.printFloor()
//         }else{
//             alert('минимальный этаж')
//         }
//     },
//     toFloor(getFloor){
//         while(this.currentFloor !== getFloor){
//             if(getFloor >= this.currentFloor && getFloor <= this.maxFloor){
//                 this.upOneFloor()
//             }else if(getFloor <= this.currentFloor && getFloor >= this.minFloor){
//                 this.downOneFloor()
//             }else{
//                 alert('нет такого этажа')
//                 return
//             }
//         }
//     }
// }

// console.log(elevator.printFloor());
// console.log(elevator.upOneFloor());
// console.log(elevator.toFloor(16));
// elevator.printFloor()
// elevator.upOneFloor()
// elevator.downOneFloor()
// elevator.toFloor(2)




// Дан лимит = 1000, напишите функцию, которая будет выводить в консоль удвоенное значение аргумента до тех пор, пока оно не достигнет лимита, и после этого вывести в консоль аргументы в обратном порядке

// Например:

// Ввод: functionLimit(50)
// Вывод:
// 50
// 100
// 200
// 400
// 800
// 800
// 400
// 200
// 100
// 50


// let limit = 1000;


// function funcLimit (n) {
//     if(n <= 0){
//         return
//     }
//     if(n > limit)
//     return

//     console.log(n);
//     funcLimit(2 * n)
//     console.log(n);
// }
// funcLimit(100)



// Задание №6
// Вывести нечетные числа последовательности 0...N
// Дана последовательность натуральных чисел от N до 0. Напишите код, который запрашивает число N и выводит все нечетные числа из этой последовательности, сохраняя их порядок.

// let n = +prompt('Enter your number')
// let nn = [];
// let isOdd = function(n){
//     let even = 0;
//     if(n == even){
//         console.log(nn)
//     }else{
//         if (n % 2 !== 0){
//             nn.unshift(n)
//         }
//         isOdd(n - 1)
//     }
    
// };
// isOdd(n)





// Задание №5
//   Напишите функцию, определяющую
// максимальное количество повторяющихся
//  элементов в массиве.
// Массив для примера:
// let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];
// let maxRepeat = task5.reduce((max, elem) => {
//   let count = 0;
//   task5.forEach((num) => {
//     if (num === elem) count++;
//   });
//   return max > count ? max : count;
// }, 0);
// console.log(maxRepeat);



// let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];
// let obj= {};
// task5.forEach((item) => {
//     if (obj[item]){
//         obj[item]++
//     }else {
//         obj[item] = 1
//     }
// })
// console.log(obj);




// Задание №13


// Дан массив состоящий из чисел, а также больших чисел(bigInt)
// Сумма всех цифр внутри числа, будет равна ASCII номеру определенной буквы.
// Пример:
// Ввод: let arr = [584131398786538461382741, 444521974525439455955, 71415168525426614834414214, 353238892594759181769, 48955328774167683152, 77672648114592331981342373, 5136831421236, 83269359618185726749, 2554892676446686256, 959958531366848121621517, 4275965243664397923577, 616142753591841179359, 121266483532393851149467, 17949678591875681]
//Вывод: в данном массиве зашифрована фраза - secret-message


// Раскодируйте фразу из массива ниже, используя map(), reduce()


// let arr = [
//     436450905757958151n,
//     11258783099996076460563n,
//     4271648547630677847351n,
//     618958267230480336590096n,
//     8758497946868448n,
//     522605576771949556944035n,
//     85066202249185099169760853n,
//     3086832757126n,
//     996521n,
//     927960635227601913n,
//     70078548120507149395588131n,
//     860837n,
//     358019731380917077399530102n,
//     62039800138267504261751603735n,
//     9750891479584997n,
//     918662n,
//     65327012964727042243717157n,
//     232087621279086322105118092n,
//     5211980170217154619622689642n,
//     6124973n,
//     86411816655484980296n,
//     91315560975533164408650219064n,
//     622020778302918273675482n,
//     810589171448852275032504861n,
//     444121583n,
//     33430239609682594751236n,
//     185623925354270032483460275221n,
//     7868767990756882313n,
//     4657463770033462099583n,
//     242033234081n,
//     522740644841373392917114n,
//     406008262691140304161593616100211362n,
//     568510122451787635388154655n,
//     5578397767326623013150481034n,
//     555640745510125078573784n,
//     406901355248415157672497n,
//     88558845201718547978n,
//     68574135720461824293161323n,
//     3676244n,
//     5042122205391979386680691n,
//     73395510612321053412266453664n,
//     24406073369262079776782n,
//     7422295137177317668814n,
//     158882n,
//     372566226366055183434756092n,
//     217801045092586396416854n,
//     387064459629162985218n,
//     27921983810840242015693511824n,
//     1644125056804n,
//     5379171082171129383n,
//     6750612981549243200995103n,
//     32412900856868128268020217613n,
//     479858287n,
//     6096272n,
//     454320294201191419460256n,
//     293398766039677586n,
//     30652983692459763541n,
//     82882672765594704813185n,
//     92583381n,
//     43343754351489585033783532n,
//     1299335n,
//     254078966874894178015532n,
//     129278851477373713752221n,
//     1324382354724457193161741158451n,
//     341401685n,
//     5457110999302082592077217n,
//     95066071456345657725316571n,
//     743409212n,
//     988517320507018868694n,
//     190928581430131876371881026012n,
//     8690621n,
//     9915740590818375796n,
//     13374845638424941804172067n,
//     4729159847810460863472n,
//     4416521647100742520187956283n,
//     29941458499424421700564n,
//     7523244131n,
//     224344126317666108716556700814n,
//     529253721025532996042429751n,
//     867344n,
//     11654415332705915327940693482n,
//     48018003472901929981390383n,
//     2866645196951814499551n,
//     20726910437738542761337334n,
// ];

// let res = arr.map(elem => {
//     elem = elem.toString().split('')
//     return elem.reduce((total, num) => {
//         return total + Number(num)
//     }, 0)
// })
// console.log(res)

// res = res.map(elem => {
//     return String.fromCharCode(elem)
// })
// console.log(res);
// console.log(res.join(''));

// / Задание №14
// Напишите функцию, которая может превратить текст в нумеронимы
// Пример:
// Ввод:
// const input =
// 'Сложный путь у программиста, Только горе - не беда, Если выбрал путь тернистый - То тогда тебе - сюда!';
// Вывод:
// С5й п2ь у п11, Т4о г2е - не б3, Е2и в4л п2ь т7й - То т3а т2е - с3!
// т.е. каждое слово, если оно длинее 4х букв, превращается в нумероним, внутри которого, между крайними буквами - будет число, обозначающее количество букв между крайними буквами

// const createNumeronym = word => 
// word[0] + (word.length -2) + word[word.length -1];

// const some = input
// .split(' ')
// .map(function(word) {
//     if(word.length >= 4){
//         return createNumeronym(word)
//     }
//     return word
// })
// .join('  ')
// console.log(some);





// Задание №6
// Напишите функцию которая возвращает массив из 4 функций;
//   •  первая увеличивает счетчик( переменная i )  на 1
//   •  вторая уменьшает на 1
//   •  третья умножает на 2
//   •  четвёртая делит на 2

//  **сделать задание при помощи замыкания!!
// function ar (a){
//     let arr = [b(),c(),d(),f()]
//     function b (){
//         return a + 1;
//     }
//     function c (){
//         return a -1
//     }
//     function d (){
//         return a * 2
//     }
//     function f(){
//         return a / 2
//     }
//     console.log(arr)
// }
// ar(2)

// Задание №5
// Сделать реверс слова через рекурсию (используйте методы substr() и charat())
// function wordReverse(word, revWord){
//     if (word === '') return revWord;
//     return wordReverse(
//         word.substr(0, word.length -1),
//         revWord + word.charAt(word.length-1) 
//     )
// }
// console.log(wordReverse('HelloWorld', ''));

// Функция (назовём её nick), возвращаемая из внешней функции makePassword, представляет собой замыкание с окружением, содержащим свободную переменную password.
// Мы передаем функции makePassword значение rightly, которое сохраняется в окружении замыкания: var tryNick = makePassword("rightly")
// При вызове tryNick переданное слово ("wrong" или "rightly") сравнивается со значением password в окружении tryNick.

// function makePassword(password) {
//     return function nick(passwordGuess){
//         return password = passwordGuess
//     }
// }
// let tryNick = makePassword('rightly')
// console.log(tryNick('rightly'));
// console.log(tryNick('wrong'))


// Деструктуризация 

// function someFunc (){
//     return Date.now() + '-visit'
// }

// let [firstName, lastName=someFunc()] = ['Sanjar'];
// console.log(firstName);
// console.log(lastName);
// console.log(lastName);

// let obj = {
//     title: 'hello',
//     name1: 'Makers',
//     course: 'JavaScript'
// }

// let {title, ...spread} = obj

// console.log(title);
// console.log(spread);



// let obj1 = {
//     size: {
//         width: 100,
//         height: 50,
//     },
//     items: ['Cake', 'Apple']
// }

// let {title='Книга', size: {width:w, height}, items: [item1, item2]} = obj1
// console.log(title);
// console.log(w);
// console.log(height);
// console.log(item1);
// console.log(item2);


// 1. Скопируйте все элементы arr1 в arr2
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

// let arr2 = [...arr1]
// console.log(arr2);

// 2. С помощью деструктуризации выведете в новые перменные каждый элемент массива(previous, current, next) и напишите функцию высчитывающую среднюю температуру за три дня

// const bish = {
//     yesterday: 32,
//     today: 37,
//     tomorrow: 27
// };

// const {yesterday:previous, today:current, tomorrow:next} = bish;

// function getAvg(a,b,c){
//     return((a + b + c) / 3)
// }

// console.log(getAvg(previous, current, next));

// 4. Вам дан объект с информацией о книге. С помощью деструктуризации выведите
// серийный номер книжки ISBN в консоль

// const courseCatalogMetadata = [
//     {
//       title: 'The Hobbit, or There and Back Again',
//       description: 'The hobbit tells a fantastic story of adventure, danger, friendship, and courage',
//       texts: [ {
//         author: 'J. R. R. Tolkien',
//         price: 120,
//         ISBN: '912-6-44-578441-0'
//       } ]
//     }
//    ];
// const [course] = courseCatalogMetadata;
// const [{texts: books}] = courseCatalogMetadata;
// const [ {texts: [book]}] = courseCatalogMetadata;
// const [ {texts:[{ISBN}]}] = courseCatalogMetadata;

// console.log(course);
// console.log(books);
// console.log(book);
// console.log(ISBN);


// Создайте массив объектов, где хранятся данные о браузерах.
// Поочередно, с интервалом в 2 секунды, отобразите на странице информацию о браузерах.
// Для отображения текста на странице создайте функцию, где нужно деструктуризовать аргументы.
// Пример вывода: Mozilla developed Firefox which holds 8.01% of the Market Share
// 
// Исходные данные
// Firefox - Mozilla - 8.01%
// Chrome - Google - 68.26%
// Edge - Microsoft - 6.67%
// Opera - Opera Software - 1.31%


// const browsers = [
//     {
//         name: "Firefox",
//         company: "Mozilla",
//         marketShare: "8.01%"
//     },
//     {
//         name: "Chrome",
//         company: "Google",
//         marketShare: "68.26%"
//     },
//     {
//         name: "Edge",
//         company: "Microsoft",
//         marketShare: "6.67%"
//     },
//     {
//         name: "Opera",
//         company: "Opera Software",
//         marketShare: "1.31%"
//     }
// ]

// let i = 0;

// function showInfo({name, company, marketShare}){
//     document.write(`<h2>${company} developed ${name} which holds ${marketShare} of the Market Share</h2>`);
//     i++
//     if (i === browsers.length){
//         clearInterval(showInfoInterval)
//     }
// }

// let showInfoInterval = setInterval(() => showInfo(browsers[i]), 2000);


// let obj = {name: "Tom", makers: {title: "simply The best"}}
// let newObj = {...obj}
// console.log(newObj)

// newObj.makers.title = 'ok'
// console.log(obj);


// newObj = JSON.parse(JSON.stringify(obj))
// newObj.makers.title = 'super'
// console.log(obj);
// console.log(newObj);