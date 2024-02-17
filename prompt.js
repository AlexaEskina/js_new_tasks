let correct = false

do {
    let num = prompt ("Скільки тобі років?");
    console.log(typeof num)
    if (!isNaN(num) && !(num <= 0)) {
        correct = true;
        let x = num % 10;
        let y = num % 100;

        if (y >= 10 && y <= 20) {
            console.log(num + " років");
          } else if (x === 1) {
            console.log(num + " рік");
          } else if (x >= 2 && x <= 4){
            console.log(num + " роки");
          } else {
            console.log(num + " років");
        }
    }
} while (!correct)