function findRepeating(arr) {
    arr.sort(function (a, b) { return a - b });

    var count = 1;
    var maxCount = 1;
    var num = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i-1] === arr[i]) {
            count++;
        }
        else {
            count = 1;
        }
        if (count>maxCount) {
            maxCount = count;
            num = arr[i]
        }
    }
    return 'number ' + num + ' repeats maxumim times: ' + maxCount;
}
var arr = [1, 4, 5, 7, 3, 4, 5, 7, 8, 4, 2, 1, 2, 3, 4];
console.log(findRepeating(arr));