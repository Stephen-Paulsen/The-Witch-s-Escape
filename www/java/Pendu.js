var Words = ["banana","watermelon","apple","orange","grapes","pear","coco","melon","pomegranate","skelton"];  //this is the list of words for the game! :D
var ChoosenLetter = 0;
var ScorePoints = 0;
var Lives = 6;  
var UserNameDefault = null;

function Random_Word(){  //random number generator to choose a random word 
	Lives = 6;             //i placed the live variable here because this function always gets executed when doing a new game
	var min = 0;
    var max = Math.floor(Words.length);
    Random = Math.floor((Math.random() * (max - min)) + min);
	Cutted = Words[Random].split(""); //converts string into array
	Array_Hidder();
	setInterval(Timer, 100); //timer to constantly update stuff
}


function User_Namer(){						//this code ask your user name and then stars the random word function for the mystery word
	while(ChoosenLetter == 0){
		UserName = prompt("Please enter your name");
		
		if (UserName === ""){
			UserName = prompt("Please enter your name"); //verifies if prompt is empty or null or you hit cancel
		} 

		else if(UserName != UserNameDefault){
			break;
		} 	
		
		else{
			UserName = prompt("Please enter your name");
		}
	}	
	Random_Word(); // mystery word function here
}

function Timer(){
	Le_Pendu();  //code for the images and loosing
	if (Cutted.toString() != Blanked.toString()){  //if you get all the letters corrently this condition is false and else gets executed
		
		document.querySelector('#HiddenWord').innerHTML = BlankedProper;
		document.querySelector('#ScoreCounter').innerHTML = "Score: " + ScorePoints;
		document.querySelector('#LivesCounter').innerHTML = "Lives: " + Lives;
		document.querySelector('#UserName').innerHTML = UserName;
	}
	
	else{
		var WinnerSquare = document.querySelector("#EndGameBlock");
		WinnerSquare.classList.remove("sneaky");
		var WinnerAnnouncement = document.querySelector("#WinningAnnouncement"); //removes the sneaky class to show hidden stuff like the winning screen
		WinnerAnnouncement.classList.remove("sneaky");
		var Continue = document.querySelector("#Continue");
		Continue.classList.remove("sneaky");
		var EndGame = document.querySelector("#EndGame");
		EndGame.classList.remove("sneaky");
		var ScoreBoard = document.querySelector("#ScoreBoard");
		ScoreBoard.classList.remove("sneaky");
		
		document.querySelector('#HiddenWord').innerHTML = BlankedProper;
		document.querySelector('#ScoreCounter').innerHTML = "Score: " + ScorePoints; //this updates the variables shown one last time
		document.querySelector('#LivesCounter').innerHTML = "Lives: " + Lives;
		document.querySelector('#ScoreBoard').innerHTML = UserName + " your score is: " + ScorePoints;
		
	}
}

function Pause_Menu(){
	var WinnerSquare = document.querySelector("#EndGameBlock");
		WinnerSquare.classList.remove("sneaky");
	var Unpauser =	document.querySelector("#UnPause");			//This code just shows the end game black screen with two buttons
		Unpauser.classList.remove("sneaky");					//for going back to the menu or "resuming" the game 
	var EndGame = document.querySelector("#EndGame");
		EndGame.classList.remove("sneaky");	
	
}

function UnPause_Menu(){
	var WinnerSquare = document.querySelector("#EndGameBlock");
		WinnerSquare.classList.add("sneaky");
	var Unpauser =	document.querySelector("#UnPause");         //it only hides again the buttons and the semi transparent black wall
		Unpauser.classList.add("sneaky");
	var EndGame = document.querySelector("#EndGame");
		EndGame.classList.add("sneaky");	
}

function Array_Hidder(){
	Blanked = Cutted.slice(0); //this clones the array
	var i = 0;
	while (i < Cutted.length){
		Blanked[i] = "_";		//this remplaces all the letters of blanked by _ 
		++i;
	}
	BlankedProper = Blanked.join(" "); //this gets rid of the commas you get when you show an array by turning it into a string
}

function Comparer_Tool(){ //pretty self explanatory
	Condition = false;
	var i = 0;
	while (i < Cutted.length){
		if (ChoosenLetter == Cutted[i]){  //this replaces a _ with a correct letter checking all the letters in the array
			Blanked[i] = ChoosenLetter;
			Condition = true;
			++i;
			++ScorePoints; //when you guess a good letter you get a point! 
		}
		
		else if ((i+1) == Cutted.length && Condition == false){  //if the function reaches the end and hasnt encountered any correct words, you lose a life
			--Lives;
			++i;
		}	
		
		else{     // this may not be  necessary but i wanted to use the else if condition
			++i;
		}
	}
	BlankedProper = Blanked.join(" ");  //this updates the _ _ _ _ _ word after each comparison
}

function Continue() {
	var WinnerSquare = document.querySelector("#EndGameBlock");
		WinnerSquare.classList.add("sneaky");
	var WinnerAnnouncement = document.querySelector("#WinningAnnouncement");  //this is part 1 of continue where i reset the hidden variables to be hidden again 
		WinnerAnnouncement.classList.add("sneaky");	
	var LooserSquare = document.querySelector("#EndGameBlock");
		LooserSquare.classList.add("sneaky");
	var Continue = document.querySelector("#Continue");
		Continue.classList.add("sneaky");
	var EndGameer = document.querySelector("#EndGame");
		EndGameer.classList.add("sneaky");
	var ScoreBoard = document.querySelector("#ScoreBoard");
		ScoreBoard.classList.add("sneaky");

		
	var ReArm = document.querySelector("#Continue");
		ReArm.disabled = false;
	var ReKey = document.querySelectorAll(".letters");   //this is to enable disabled buttons
	for (var i = 0; i < ReKey.length; i++){
		ReKey.item(i).disabled = false;					//this is to enable disabled keyboard letters
		ReKey.item(i).classList.remove("sneaky");
	}
	
	var Image2 = document.querySelector("#Image2");
		Image2.classList.add("sneaky");
	var Image3 = document.querySelector("#Image3");			
		Image3.classList.add("sneaky");
	var Image4 = document.querySelector("#Image4");
		Image4.classList.add("sneaky");   				//this hides the images for the next game
	var Image5 = document.querySelector("#Image5");
		Image5.classList.add("sneaky");
	var Image6 = document.querySelector("#Image6");
		Image6.classList.add("sneaky");	
	var Image7 = document.querySelector("#Image7");
		Image7.classList.add("sneaky");
			
	Continue2();
}

function Continue2(){
	while(Cutted.toString() == Blanked.toString()){   //this is my sad attempt at making the words not repeat themselves
		Random_Word()								//for the time being im just gonna relie on the quantity of words, but in the future i plan to fix this
	}
}

function Le_Pendu(){
	switch(Lives) {											
		case 5:
			var Image2 = document.querySelector("#Image2");
			Image2.classList.remove("sneaky");
			break;
		case 4:
			var Image3 = document.querySelector("#Image3");
			Image3.classList.remove("sneaky");
			break;												//this function displays the images depending on how many lives you have		
		case 3:
			var Image4 = document.querySelector("#Image4");
			Image4.classList.remove("sneaky");
			break;
		case 2:
			var Image5 = document.querySelector("#Image5");
			Image5.classList.remove("sneaky");
			break;
		case 1:
			var Image6 = document.querySelector("#Image6");
			Image6.classList.remove("sneaky");
			break;
		case 0:
			var Image7 = document.querySelector("#Image7");
			Image7.classList.remove("sneaky");
			var LooserSquare = document.querySelector("#EndGameBlock");    //this is the code for the loosing screen
			LooserSquare.classList.remove("sneaky");
			var LooserAnnouncement = document.querySelector("#LoosingAnnouncement");
			LooserAnnouncement.classList.remove("sneaky");
			var EndGame = document.querySelector("#EndGame");
			EndGame.classList.remove("sneaky");
			var ScoreBoard = document.querySelector("#ScoreBoard");
			ScoreBoard.classList.remove("sneaky");
	
			document.querySelector('#HiddenWord').innerHTML = BlankedProper;
			document.querySelector('#ScoreCounter').innerHTML = "Score: " + ScorePoints; //once again a last refresh for the variables
			document.querySelector('#LivesCounter').innerHTML = "Lives: " + Lives;
			document.querySelector('#ScoreBoard').innerHTML = UserName + " your score is: " + ScorePoints;
			break;	
		
		default:
			break;
	}	
}



function a() {
	var ReKey = document.querySelector("#a"); //this is the code for all the buttons, im 100% certain there is a more simple and compact way 
	ReKey.classList.add("sneaky");			// to do this but i just cant find it even with the help of the internet
    ChoosenLetter = "a";
    Comparer_Tool();
	return "A";
}

function b() {
	var ReKey = document.querySelector("#b");
	ReKey.classList.add("sneaky");              //this makes the letters dissaper after you press them
    ChoosenLetter = "b";						//this lets you choose the letter to compare with the word
    Comparer_Tool();							// each time you press a button the comparer tool compares :O
	return "B";							//lastly this is so that the button doesnt enlarge with the words undefined
}										// i realise now that i could have just used the value property in the html side -_-

function c() {
	var ReKey = document.querySelector("#c");   //oh, i also couldnt make all of the letters start their animation at different times
	ReKey.classList.add("sneaky");				// but if you mouse over the letters a bit or after a few games
    ChoosenLetter = "c";						//the letters get desynchronised and give the look i wanted
    Comparer_Tool();
	return "C";
}

function d() {
	var ReKey = document.querySelector("#d");
	ReKey.classList.add("sneaky");
	ChoosenLetter = "d";
    Comparer_Tool();
	return "D";
}

function e() {
	var ReKey = document.querySelector("#e");
	ReKey.classList.add("sneaky");
	ChoosenLetter = "e";
    Comparer_Tool();
	return "E";
}

function f() {
	var ReKey = document.querySelector("#f");
	ReKey.classList.add("sneaky");
	ChoosenLetter = "f";
    Comparer_Tool();
	return "F";
}

function g() {
	var ReKey = document.querySelector("#g");
	ReKey.classList.add("sneaky");
	ChoosenLetter = "g";
    Comparer_Tool();
	return "G";
}

function h() {
	var ReKey = document.querySelector("#h");
	ReKey.classList.add("sneaky");
	ChoosenLetter = "h";
    Comparer_Tool();
	return "H";
}

function i() {
	var ReKey = document.querySelector("#i");
	ReKey.classList.add("sneaky");
	ChoosenLetter = "i";
    Comparer_Tool();
	return "I";
}

function j() {
	var ReKey = document.querySelector("#j");
	ReKey.classList.add("sneaky");
	ChoosenLetter = "j";
    Comparer_Tool();
	return "J";
}

function k() {
	var ReKey = document.querySelector("#k");
	ReKey.classList.add("sneaky");
	ChoosenLetter = "k";
    Comparer_Tool();
	return "K";
}

function l() {
	var ReKey = document.querySelector("#l");
	ReKey.classList.add("sneaky");
	ChoosenLetter = "l";
    Comparer_Tool();
	return "L";
}

function m() {
	var ReKey = document.querySelector("#m");
	ReKey.classList.add("sneaky");
	ChoosenLetter = "m";
    Comparer_Tool();
	return "M";
}

function n() {
	var ReKey = document.querySelector("#n");
	ReKey.classList.add("sneaky");
	ChoosenLetter = "n";
    Comparer_Tool();
	return "N";
}

function o() {
	var ReKey = document.querySelector("#o");
	ReKey.classList.add("sneaky");
	ChoosenLetter = "o";
    Comparer_Tool();
	return "O";
}

function p() {
	var ReKey = document.querySelector("#p");
	ReKey.classList.add("sneaky");
	ChoosenLetter = "p";
    Comparer_Tool();
	return "P";
}

function q() {
	var ReKey = document.querySelector("#q");
	ReKey.classList.add("sneaky");
	ChoosenLetter = "q";
    Comparer_Tool();
	return "Q";
}

function r() {
	var ReKey = document.querySelector("#r");
	ReKey.classList.add("sneaky");
	ChoosenLetter = "r";
    Comparer_Tool();
	return "R";
}

function s() {
	var ReKey = document.querySelector("#s");
	ReKey.classList.add("sneaky");
	ChoosenLetter = "s";
    Comparer_Tool();
	return "S";
}

function t() {
	var ReKey = document.querySelector("#t");
	ReKey.classList.add("sneaky");
	ChoosenLetter = "t";
    Comparer_Tool();
	return "T";
}

function u() {
	var ReKey = document.querySelector("#u");
	ReKey.classList.add("sneaky");
	ChoosenLetter = "u";
    Comparer_Tool();
	return "U";
}

function v() {
	var ReKey = document.querySelector("#v");
	ReKey.classList.add("sneaky");
	ChoosenLetter = "v";
    Comparer_Tool();
	return "V";
}

function w() {
	var ReKey = document.querySelector("#w");
	ReKey.classList.add("sneaky");
	ChoosenLetter = "w";
    Comparer_Tool();
	return "W";
}

function x() {
	var ReKey = document.querySelector("#x");
	ReKey.classList.add("sneaky");
	ChoosenLetter = "x";
    Comparer_Tool();
	return "X";
}

function y() {
	var ReKey = document.querySelector("#y");
	ReKey.classList.add("sneaky");
	ChoosenLetter = "y";
    Comparer_Tool();
	return "Y";
}

function z() {
	var ReKey = document.querySelector("#z");
	ReKey.classList.add("sneaky");
	ChoosenLetter = "z";
    Comparer_Tool();
	return "Z";
}

