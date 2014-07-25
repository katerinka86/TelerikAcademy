function findBigger(arr) {
    var position = Number(arr[0]);
    var arr = arr[1].split(', ').map(Number);
    for (var i = 0; i < arr.length; i++) {
        if (arr[position] > (arr[position-1] + arr[position+1])) {
            return "yes, it is bigger";
        }
        else {
            return 'no, its not bigger';
        }
    }
}
var arr = ['2','1, 4, 5, 0, 3, 4, 5, 7, 8, 4, 2, 1, 2, 3, 4'];
console.log(findBigger(arr));