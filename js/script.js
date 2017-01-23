

/*
      1. User input address
      2. on submit get url
      3. load html from website into element genOut
      4. Generate random CSS style
*/

//var address = document.getElementById('url');

/* function getURL () {
  // on click generate button
  // add event listener to button
  // get inner text of input element
  // return
} */

var address;

function getValue (id) {
	var v = document.getElementById(id).value;
  address = v;
  return address;
}


function listen(foo, bar) {
  document.getElementById(foo).addEventListener("click", function(){
    getValue(bar);
    $("#genOut").load(address);
  })
}

listen('btn', 'url');

//$(document).ready(

//$("#genOut").load("partials/head.html")
//);
