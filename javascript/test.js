//var first_name = "monica"; two forward slashes mean a single line comment
//var last_name = "katzer";

/* BLOCK COMMENT */

var greeting = "hello!";

var first_name = "monica";

var last_name = "katzer";

var message1 = "don't forget to pick up these items";

var message2 = "also, make sure to gather wood, for dooms day prepping";

var favorite_quote = "\"Four Score...\"";
var my_image = "<img src = \"images/myImage.png\"/>";

//use single quotes if you have a lot of illegal characters
//var my_image = '<img src = \"images/myImage.png\"/>';

var goodbye = "see you later";

//BAD variable names (errors!!!!)
/* var first name = "";

var 2first_name = "";

var time = "";

var string = ""; */

//operators
// "=" assigns values
// "+=" (concatenation assignment operator, with strings) adds to whatever the variable currently //has

//output variables to the console!!

/* console.log(greeting);
console.log(first_name);
console.log(last_name);
console.log(message1);
console.log(message2);
console.log(favorite_quote);
console.log(goodbye); */

//console.log(greeting + " " + first_name + " "+ last_name + " " + message1 + " " + message2 + " " //+ favorite_quote + " " + goodbye);

var static_words1 = "Let's get down to";
var static_words2 = "to";
var static_words3 = "the";
var static_words4 = "Did they send me";
var static_words5 = "when I asked for";
var static_huh = "(huh!)";
var button = document.getElementById("submit");
button.addEventListener("click", onClick, false);

function onClick(evt) {
  evt.preventDefault(evt);
  var phraseDiv = document.getElementById("phrase");
  //Forms
  var element1 = document.getElementById("form1").elements.item(0).value;
  var element2 = document.getElementById("form1").elements.item(1).value;
  var element3 = document.getElementById("form1").elements.item(2).value;
  var element4 = document.getElementById("form1").elements.item(3).value;
  var element5 = document.getElementById("form1").elements.item(4).value;
  var phrase = ('<p>'+ static_words1 + " " + element1 + ", " + static_words2 + " " + element2 + " " + static_words3 + " " + element3 + "." + " " + static_huh + '</p>' + '<p>' + " " + static_words4 + " " + element4 + ", " + static_words5 + " " + element5 + "?" + '</p>');
  phraseDiv.innerHTML = phrase;
}