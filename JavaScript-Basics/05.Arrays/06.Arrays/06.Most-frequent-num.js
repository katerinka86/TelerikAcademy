function Sort(args) {
    //Most frequent number
    var count = 1;
    var maxCount = 1;
    var number = 0;
    var arr = args[0].split(', ');
    arr.sort((function (a, b) { return a - b }));
    for (var i = 1; i < arr.length; i++) {
        if (arr[i-1] === arr[i]) {
            count++
        }
        else {
            count = 1;
        }
        if (count > maxCount) {
            maxCount = count;
            number = arr[i];
        }
    }
    var result = number + ' (' + maxCount + ' times)'
    return result;
}
var args = ['4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3']
console.log(Sort(args));