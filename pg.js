const note = document.querySelectorAll('.initial');
let btnSel = 'rifts';

/*
const showImage = () => 
{
  document.getElementById("first").classList.toggle('hidden');
}
*/




const showImage = (x) => {
  
if (x !== btnSel) {

  note.forEach ((element) => {
    element.classList.remove('initialenlarge');
    element.classList.add('initialshrink');
  })

  const vis = document.querySelectorAll('.visible');
  vis.forEach ((element) => {
    element.classList.remove('visible');
    element.classList.add('hidden');
  })

} else {

  const intShr = document.querySelectorAll('.initialshrink');
  intShr.forEach ((element) => {
    element.classList.remove('initialshrink');
    element.classList.add('initial');
  })

}


  document.getElementById(x).classList.toggle('hidden');
  document.getElementById(x).classList.toggle('visible');
  document.getElementById(x).parentElement.classList.add('initial');
  document.getElementById(x).parentElement.classList.remove('initialshrink');
  document.getElementById(x).parentElement.classList.toggle('initialenlarge');
  
  btnSel = x;
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

