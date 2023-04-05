const initial = document.querySelectorAll('.initial');
const image = document.querySelectorAll('img');
const btnbtn = document.querySelectorAll('.btn');



function addListen() {

  initial.forEach((item) => {
    item.addEventListener('focusin', (event) => {
      let temp = event.currentTarget.querySelector('.description');
      temp.classList.remove('hidden');
    });
    item.addEventListener('mouseenter', (event) => {
      let temp = event.currentTarget.querySelector('.description');
      temp.classList.remove('hidden');
    });
    item.addEventListener('focusout' , (event) => {
      let temp2 = event.currentTarget.querySelector('.description');
      temp2.classList.add('hidden');
    });
    item.addEventListener('mouseleave' , (event) => {
      let temp2 = event.currentTarget.querySelector('.description');
      temp2.classList.add('hidden');
    }); 
});
};


function addBtn() {
btnbtn.forEach((item) => {
    item.addEventListener('click', (event) => {
    let pp = event.target.parentNode.querySelector('.pp');
    pp.classList.toggle('hidden');
    pp.classList.toggle('adclass');
    event.stopImmediatePropagation();
  }, true);
});
};




document.addEventListener('DOMContentLoaded', addListen);
document.addEventListener('DOMContentLoaded', addBtn);


