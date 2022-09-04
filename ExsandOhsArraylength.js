// This function returns true if your string has the same number of "x"s and "o"s, and false if different
function XO(str) {
    var a = str.replace(/x/gi, ''),
        b = str.replace(/o/gi, '');
    return a.length === b.length;
}