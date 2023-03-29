const email = document.querySelector('#email');
const main = document.querySelector('#main');
const btn = document.querySelector('#submit');

// capture changes in input value
email.addEventListener('input', () => {  
  if(email.value === '') {
    label.classList.remove('isActive');
  } else {
    label.classList.add('isActive');
  }
});

// click out of input
main.addEventListener('click', function(e) {
  if(e.target === email || e.target === btn && email.value !== '') { 
    label.classList.add('isActive');
  } else if(e.target !== email && email.value === '') {
    label.classList.remove('isActive');
  }
});

// reset input value on form submission and throw error if no value submitted
document.querySelector('form').addEventListener('submit', (e) => {
  // check if email input has no value
  if( email.value === '' ) {
    e.preventDefault();
    document.querySelector('.sub__foot').innerText = 'This field is required';
    document.querySelector('.sub__foot').style.color = 'red';
    email.classList.add('invalid-border');
  } 

   email.value = '';

});