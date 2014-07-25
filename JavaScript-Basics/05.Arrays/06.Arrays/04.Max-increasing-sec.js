// Write a script that finds the maximal increasing sequence in an array
function maxIncreasing(args) {
    var arr = args[0].split(', ');
    arr = arr.map(Number);
    var count = 1;
    var maxCount = 1;
    var index = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i-1] < arr[i]) {
            count++;
            if (count > maxCount) {
                maxCount = count;
                index = maxCount + 1 - i;
            }
        }
        else {
            count = 1;
        }
    }
    var result = '';
    for (var i = index; i <= maxCount; i++) {
        console.log(arr[i])
    }
}
var args = ['3, 2, 3, 4, 2, 2, 4'];
console.log(maxIncreasing(args));