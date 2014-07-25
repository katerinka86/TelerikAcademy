function countDivs(text) {
    text = text.split('div');
    var count = 0;
    for (var word in text) {
        count++;
    }
    return count-1;
}
var text = '<head><div>Wordpress Theme</div><link rel="stylesheet" href="styles.css" type="text/css" /></head><body><section><div></div></div></body></html>';
console.log(countDivs(text));