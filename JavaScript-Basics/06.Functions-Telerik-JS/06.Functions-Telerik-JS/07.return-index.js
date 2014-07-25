function findBigger(arr) {
    var arr = arr[0].split(', ').map(Number);
    console.log(arr.length);
    var indexFound = false;
    for (var i = 1; i < arr.length-1; i++) {
        if (arr[i] > (arr[i-1] + arr[i+1])) {
            indexFound = true;
            return i;
            break;
        }
    }
    if (indexFound = false) {
        return -1;
    }
}
var arr = ['1, 4, 5, 0, 3, 4, 5, 7, 8, 4, 2, 1, 2, 3, 4'];
console.log(findBigger(arr));