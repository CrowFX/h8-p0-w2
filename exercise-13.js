function xo(str) {
    var countX = 0;
    var countO = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'x') {
            countX++;
        }
        if (str.charAt(i) == 'o') {
            countO++;
        }
    }
    if (countX == countO) {
        return true
    } else {
        return false
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true