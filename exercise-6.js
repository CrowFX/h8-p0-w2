console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("1. Melakukan Looping Menggunakan While");
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log();
console.log("----------------------------");
console.log("Looping Pertama");
console.log("----------------------------");

var firstWhileLoop = 2;
while (firstWhileLoop <= 20) {
    console.log(firstWhileLoop + ' - I love coding');
    firstWhileLoop += 2;
}
console.log();
console.log("----------------------------");
console.log("Looping Kedua");
console.log("----------------------------");
console.log();


var secondWhileLoop = 20;
while (secondWhileLoop >= 2) {
    console.log(secondWhileLoop + ' - I will become fullstack developer');
    secondWhileLoop -= 2;
}

console.log();
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("2. Melakukan Looping Menggunakan \"For\"");
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log();

console.log("----------------------------");
console.log("Looping Pertama");
console.log("----------------------------");

var firstForLoop;
for (firstForLoop = 1; firstForLoop <= 20; firstForLoop++) {
    console.log(firstForLoop + ' - I love coding');
}

console.log();
console.log("----------------------------");
console.log("Looping Kedua");
console.log("----------------------------");
console.log();

var secondForLoop;
for (secondForLoop = 20; secondForLoop >= 1; secondForLoop--) {
    console.log(secondForLoop + ' - I will become fullstack developer');
}

console.log();
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("3. Angka Ganjil dan Genap");
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log();

console.log("----------------------------");
console.log("Counter Ganjil & Genap");
console.log("----------------------------");
console.log();

var counterOne;

for (counterOne = 1; counterOne <= 100; counterOne++) {
    if (counterOne % 2 == 0) {
        console.log(counterOne + ' - Genap');
    } else {
        console.log(counterOne + ' - Ganjil');
    }
}

console.log();
console.log("----------------------------");
console.log("Counter Kelipatan 3");
console.log("----------------------------");
console.log();

var counterThree;

for (counterThree = 1; counterThree <= 100; counterThree += 2) {
    if (counterThree % 3 == 0) {
        console.log(counterThree + ' - Kelipatan 3');
    }
}

console.log();
console.log("----------------------------");
console.log("Counter Kelipatan 6");
console.log("----------------------------");
console.log();

var counterSix;

for (counterSix = 1; counterSix <= 100; counterSix += 5) {
    if (counterSix % 6 == 0) {
        console.log(counterSix + ' - Kelipatan 6');
    }
}

console.log();
console.log("----------------------------");
console.log("Counter Kelipatan 10");
console.log("----------------------------");
console.log();

var counterTen;

for (counterTen = 1; counterTen <= 100; counterTen += 9) {
    if (counterTen % 10 == 0) {
        console.log(counterTen + ' - Kelipatan 10');
    }
}