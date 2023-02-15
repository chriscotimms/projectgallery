const note = document.querySelectorAll('.initial');
let btnSel = 'rifts';


//button function, x = Div id ("first", "second", "third")
const showImage = (x) => {

//if new function input is not the same as previous input
if (x !== btnSel) {

  note.forEach ((element) => { //access each article  
    element.classList.remove('initialenlarge'); //remove any 'initialenlarge' class  
    element.classList.add('initialshrink'); //and shrink with 'initialshrink' class
  })

  const vis = document.querySelectorAll('.visible'); //access inner div class
  vis.forEach ((element) => { //for each div with visible class
    element.classList.remove('visible'); //remove visible class
    element.classList.add('hidden'); //add hidden class
  })

  btnSel = x; //update btnSel as current selection

//or if new function id input is not the same as previous input
} else {

  const intShr = document.querySelectorAll('.initialshrink'); //access all <article>s with shrink class
  intShr.forEach ((element) => { //for each:
    element.classList.remove('initialshrink'); //remove shrink class
    element.classList.add('initial'); //reset to inital class (medium sizing) for easier browsing
  })

  btnSel = 'rifts'; //update btnSel to force next function iteration to trigger condition (!==) of if statement above

}

  document.getElementById(x).classList.toggle('hidden');
  document.getElementById(x).classList.toggle('visible');
  document.getElementById(x).parentElement.classList.add('initial');
  document.getElementById(x).parentElement.classList.remove('initialshrink');
  document.getElementById(x).parentElement.classList.toggle('initialenlarge');
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

