console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("Tugas 1");
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log();
function shoutOut() {
    return shoutOut = 'Halo Function!';
};

console.log(shoutOut()) // Menampilkan "Halo Function!" di console

console.log();
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("Tugas 2");
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log();

function calculateMultiply(i, j) {
    return i * j;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

console.log();
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("Tugas 3");
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log();

function processSentence(f, g, h, i) {
    return '"Nama saya ' + f + ', umur saya ' + g + ' tahun, alamat saya di ' + h + ', dan saya punya hobby yaitu ' + i + '!"'
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"