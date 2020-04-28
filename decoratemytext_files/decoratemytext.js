/**
 * decoratemytext.js
 */


window.onload = function () {
    "use strict";
    //'Bigger Decorations!" Button OnClick Event Handler
    document.getElementById("btn").onclick = function(){
        //alert("Hello, world!");
        //increaseFontSize();
        setInterval(increaseFontSize, 500);        
    };

    //CheckBox OnChange Event Handler
    document.getElementById("myCheck").onchange = function() {
        //alert("Hello, world!");
        changeStyle();
    };

    //'Igpay-Atinlay' Button OnClick Event Handler
    document.getElementById("pigLatin").onclick = function(){
        pigLatin();      
    };

    //'Malkovitch' Button OnClick Event Handler
    document.getElementById("malKovitch").onclick = function(){
        malKovitch();
    };
};

function increaseFontSize(){
    "use strict";
    /* I've encountered the problem when reading the element's font-size from the CSS.*/
    /* Then I've found out that I need to use window's 'getComputedStyle' to read the element's computed style. */
    const element = document.getElementById("text");
    let style = window.getComputedStyle(element);
    let increasedSize = parseInt(style.fontSize) + 2;
    element.style.fontSize = increasedSize + "px";
}

function changeStyle(){
    "use strict";
    const element = document.getElementById("myCheck");
    const textarea = document.getElementById("text");
    if(element.checked){
        textarea.classList.add("changeStyle");
		document.body.classList.add("changeBg");
    } else{
        textarea.classList.remove("changeStyle");
		document.body.classList.remove("changeBg");
    }
}

function malKovitch() {
    "use strict";
	let newLines=[];
	let allLines = document.getElementById("text").value;
	let lines = allLines.split("\n");
	for (let i=0; i<lines.length; i++) {
		let words = lines[i].split(" ");
		words = words.map(w => w.length>=5? "Malkovic": w);
		newLines.push(words.join(" "));
	}
	document.getElementById("text").value = newLines.join("\n");
}

//This function checks whether the character is vowel or not.
function isVowel(ch){
    "use strict";
    return ["a", "e", "i", "o", "u"].indexOf(ch.toLowerCase()) !== -1;
}
//This function checks word(string) and converts it depending on the first letter of the word.
function convertStr(str){
    "use strict";
    if(isVowel(str.charAt(0))){ //first letter is a vowel
        str += "-ay ";  
    }
    else if(isNaN(str.charAt(0))){ //If the first letter is not a vowel and also not a number, then it means this letter is a consonant.
        let tmp = str.charAt(0);
        str = str.substring(1);
        str = str + tmp + "-ay ";
    }
    return str;
}

function pigLatin() {
    "use strict";
	let newLines=[];
	let allLines = document.getElementById("text").value;
	let lines = allLines.split("\n");
	for (let i=0; i<lines.length; i++) {
		let words = lines[i].split(" ");
		words = words.map(w => convertStr(w));
		newLines.push(words.join(" "));
	}
	document.getElementById("text").value = newLines.join("\n");
}

//Use the function form of 'use strict'
//Strings must use doublequote.