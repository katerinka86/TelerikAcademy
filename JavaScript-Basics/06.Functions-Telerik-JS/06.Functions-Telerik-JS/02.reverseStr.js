function reverse(args) {
    args = args + '';
    return args.split("").reverse().join("");
}
var args = 123;
console.log(reverse(args));