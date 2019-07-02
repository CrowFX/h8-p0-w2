console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("1. Menyusun Barisan Bintang");
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log();

var rows1;
var stars = '*';
rows1 = 5;

for (var i = 0; i < rows1; i++) {
    console.log(stars);
}

console.log();
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("2. Menyusun Barisan Bintang Dengan Nested Looping");
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log();

var rows2 = 5;
for (var i = 0; i < rows2; i++) {
    var ll = '';
    for (var j = 0; j < rows2; j++) {
        ll += '*';
    }
    console.log(ll);
}

console.log();
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("3. Menyusun Barisan Tangga Bintang Dengan Nested Looping");
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log();

var rows3 = 5;
for (var i = 0; i < rows3; i++) {
    var kk = '';
    for (var j = 0; j <= i; j++) {
        kk += '*';
    }
    console.log(kk);
}