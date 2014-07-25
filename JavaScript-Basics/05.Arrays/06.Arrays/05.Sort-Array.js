function Sort(args) {
    //sort array
    var arr = args[0].split(', ');
    arr.sort((function (a, b) { return a - b }));
    console.log(arr);
}
var args = ['4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3']
console.log(Sort(args));