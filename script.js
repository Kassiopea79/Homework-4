// task 1

let i = 0;
while (i < 2) {
    console.log("Привет");
    i++;
}

// task 2

let i = 1;
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// task 3

let i = 7;
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

// task 4 

const obj  = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};

for (let userName in obj) {
    console.log(`${userName} — зарплата ${obj[userName]} долларов.`)
}; 

// task 5

let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    num++;
}
console.log(n)
console.log(num);
    

// task 6

let firstFriday = 5;
for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day} число. Необходимо подготовить отчет.`);
};








