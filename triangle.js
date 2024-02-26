//2 завдання 
let total = 0
for (let i = 1; i <= 100; i++) {
    if (i % 3 !==0) {
        total += i;
    }
}
console.log( "Не кратні 3м", total);

//3 завдання 
let result = Math.pow(3,5)
console.log (result);

//1 завдання 
function drawTriangle (height, symbol){
    let triangle = '';
    for (let i = 1; i <= height; i++){
        for (let x = 1; x <=i ; x++){
            triangle += symbol;
        }
        triangle += '\n';
    }
    console.log (triangle);
}
drawTriangle(7,'*')
// 1 завдання -2 
function drawTriangle (height, symbol) {
    let triangle = '';
    for (let i = 0; i <= height; i++){
            triangle += symbol.repeat (i + 1) + '\n';
        }
       console.log (triangle);
}
drawTriangle(5,'*');