// Задание* (Не сделано)

// let result = '';
// let col = 1;
// for (var i=1; i<=100; i++){
//     if (i %5 == 0) {
//         if (col=4){
//     console.log(i)
    
//         }else{
            
//         }
//     }
// }

// console.log(result)

// ЗАДАНИЕ 1

let userNum = +prompt('Введите число'); //от 1 до 10
for (let i = 0; i< 10; i++) {
if (userNum >=0 && userNum <=10){
    console.log(userNum*i);
}else{
    alert('Введите данные от 0 до 10');
}
}