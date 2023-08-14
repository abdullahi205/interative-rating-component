const card = document.querySelector('.card');
const result = document.querySelector('.result');
const submitbtn = document.querySelector('.submit-btn');
const rating = document.getElementById('rating');
const buttons = document.querySelectorAll('.numbers')


submitbtn.addEventListener('click', () =>{
  result.classList.remove('hidden');
  card.style.display = 'none'
})

buttons.forEach(button =>{
  button.addEventListener('click', ()=>{
    rating.innerHTML = button.innerHTML
  })
})