function CountOccurenceWord(text, wordToSearch, isCaseSensitive) {
    isCaseSensitive = isCaseSensitive || false;
    var countSearchedWord = 0;

    if (isCaseSensitive === false) {
        var strArr = text.split(wordToSearch); //split is case-insensitive

        for (var str in strArr) {
            countSearchedWord++;
        }
        console.log("The count of word '" + wordToSearch + "' (case-insensitive search)  is: " + countSearchedWord)
    }
    else {
        var index = text.indexOf(wordToSearch);//indexOf is case-sensitive

        while (index >= 0) {
            countSearchedWord++;
            index = text.indexOf(wordToSearch, index + 1);
        }
        console.log("The count of word '" + wordToSearch + "' (case-sensitive search)  is: " + countSearchedWord);
    }
}

var text = "We are living in an yellow submarine. In the sky there are no clouds. So we are drinking all the day. We will move out of it in 5 days.";
var wordToSearch = " in ";
var isCaseSensitive = false;

console.log(CountOccurenceWord(text, wordToSearch));
console.log(CountOccurenceWord(text, wordToSearch, true));