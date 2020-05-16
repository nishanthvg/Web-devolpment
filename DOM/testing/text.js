var button = document.getElementById("Enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputValueLength() {
    return input.value.length;
}
function createListElement () {
    var btn = document.createElement("button");
	btn.innerHTML = "Delete";
    btn.onclick = removeParent;
    
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.inerHTML = li.innerHTML + " ";
    li.appendChild(btn);
    ul.appendChild(li);
    input.value = ""; //to clear previous input value 
}
function addListAfterClick () {
    if(inputValueLength() > 0) createListElement () ;
}

function addListAfterEnter (event) {
    if(inputValueLength() > 0 && event.keyCode == 13) createListElement ();
}

button.addEventListener("click" , addListAfterClick  );

input.addEventListener("keypress" , addListAfterEnter );

//list item - check
var item = document.getElementsByClassName("links");
item.onclick = function(event){ // can use addEventListner also
	var position  = event.target; // Get the tagname of the place where the event happened 
	position.classList.toggle("done");
}

function Delete () {
    var list = document.getElementById("myList");
    list.removeChild();           // Remove <ul>'s first child node (index 0)
}



//delete button
var deleteBtns = document.getElementsByClassName("delete");
//add event listener to first 6 btns in HTML file
for(var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}


//from StackOverflow:
function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}

//add event listener to first 6 btns in HTML file
for(var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}


//from StackOverflow:
function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}
