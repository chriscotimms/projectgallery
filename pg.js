const note = document.querySelectorAll('.initial');
console.log(note);


/*
const showImage = () => 
{
  document.getElementById("first").classList.toggle('hidden');
}
*/

const showImage = (x) => 
{
  document.getElementById(x).classList.toggle('hidden');
  console.dir(document.getElementById(x));
  console.dir(x);
}

















/*

let value = document.getElementsByTagName("article");
console.log(value);

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

*/

