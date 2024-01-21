
let burger = document.querySelector('.burger');
let wraper = document.querySelector('.burger-wraper');
let burgerNav = document.querySelector('.burger-nav');
let spanX = document.querySelector('.spanX');
let spanX2 = document.querySelector('.spanX2')

burger.addEventListener('click', function() {
  document.body.classList.toggle('newBody');
  burgerNav.classList.toggle('toggle');
  spanX.classList.toggle('spanX2');
  burger.classList.toggle('burger2');
})
document.querySelector('.spanS').addEventListener('click', function(){
  document.body.classList.remove('newBody');
  spanX.classList.remove('spanX2');
  burgerNav.classList.remove('toggle');
  burger.classList.remove('burger2');

})