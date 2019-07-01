console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("1. Menyusun Barisan Bintang");
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log();

var rows1;
var stars = '*';
rows1 = 5;

for (var verticalStars = 0; verticalStars < rows1; verticalStars++) {
    console.log(stars);
}

console.log();
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("Menyusun Barisan Bintang Dengan Nested Looping");
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log();

var rows2;
rows1 == 5;
rows2 == 5;
var i = 0;
var j = 0;
while (i < rows1) {
    while (j < i) {
        console.log(...stars);
        j++
    }
    console.log();
    i++;
}