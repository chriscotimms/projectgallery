const initial = document.querySelectorAll('.initial');
const image = document.querySelectorAll('img');
const btnbtn = document.querySelectorAll('.btn');

const focusEvent = (e) => {
  let temp = e.target.querySelector('.description');
  temp.classList.toggle('hidden');
}

const unfocusEvent = (e) => {
  let temp = e.target.querySelector('.description');
  temp.classList.add('hidden');
}

const revealText = (e) => {
  let pp = e.target.parentNode.querySelector('.pp');
  pp.classList.toggle('hidden');
  pp.classList.toggle('adclass');
}

function addListen() {
initial.forEach((item) => {
  item.addEventListener('focusin', focusEvent);
  item.addEventListener('mouseenter', focusEvent);
  item.addEventListener('focusout' , unfocusEvent);
  item.addEventListener('mouseleave' , unfocusEvent);
});
};

btnbtn.forEach((item) => {
  item.addEventListener('click', revealText);
})



document.addEventListener('DOMContentLoaded', addListen, false);
  





/*


//////previous code


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












*/