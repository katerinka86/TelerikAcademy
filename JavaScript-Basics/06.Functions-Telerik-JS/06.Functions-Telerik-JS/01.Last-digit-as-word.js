function lastDigit(args) {
    args = args % 10;
    switch (args) {
        case 1: args = 'one'; break;
        case 2: args = 'two'; break;
        case 3: args = 'three'; break;
        case 4: args = 'four'; break;
        case 5: args = 'five'; break;
        case 6: args = 'six'; break;
        case 7: args = 'seven'; break;
        case 8: args = 'eight'; break;
        case 9: args = 'nice'; break;
        case 0: args = 'zero'; break;
    }
    return args;
}
args = 1237;
console.log(lastDigit(args));