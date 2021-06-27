const vowelUpper = ["A","E","I","O","U"];
var vowelCount = 0;

var checkBtn = document.getElementById("checkBtn");

checkBtn.addEventListener("click", checkVowel);

function checkVowel() {
    const vowelLower = vowelUpper.map(vowel => vowel.toLowerCase());

    const vowelArray = vowelUpper.concat(vowelLower);

    var textInput = document.getElementById("textInput").value;

    var inputLength = textInput.length;


    for(i=0; i<inputLength; i++){
        for(x=0; x<vowelArray.length; x++)
        {
            if(textInput.charAt(i) == vowelArray[x]){
                vowelCount = vowelCount + 1;
            }
        }
    }

    alert("There are " + vowelCount + " vowels");

    document.getElementById("textInput").value = "";

    vowelCount = 0;
}

