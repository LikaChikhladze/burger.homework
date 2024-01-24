
let burger = document.querySelector('.burger');
let wraper = document.querySelector('.burger-wraper');
let burgerNav = document.querySelector('.burger-nav');
let spanX = document.querySelector('.spanX');
let spanX2 = document.querySelector('.spanX2');
let favFood2 = document.querySelector('.fav-food');

burger.addEventListener('click', function() {
  document.body.classList.toggle('newBody');
  burgerNav.classList.toggle('toggle');
  spanX.classList.toggle('spanX2');
  burger.classList.toggle('burger2');
  favFood2.classList.toggle('fav-food2')
})
document.querySelector('.spanS').addEventListener('click', function(){
  document.body.classList.remove('newBody');
  spanX.classList.remove('spanX2');
  burgerNav.classList.remove('toggle');
  burger.classList.remove('burger2');
  favFood2.classList.remove('fav-food2')

})

let input = document.getElementById('food');
let button = document.querySelector('.click');
let foodUl = document.querySelector('.food-Ul');
let form = document.querySelector('.form');
let clearBtn = document.querySelector('.clear');
clearBtn.textContent = 'clear';

// button.addEventListener('click', function(item) {
//   item.preventDefault();
//   let value = input.value;
//   if (value != '') {
//     let Li = document.createElement('li', 'Ul-li');
//     Li.textContent = value;
//     let dltBtn = document.createElement('button', 'dlt');
//     dltBtn.textContent = 'delete';
//     dltBtn.classList = 'delete'

//     dltBtn.addEventListener('click', function() {
//       Li.remove();
//     })


//     foodUl.appendChild(Li);
//     Li.appendChild(dltBtn);
//     input.value = '';
//   }

//   clearBtn.addEventListener('click', function() {
//     foodUl.innerHTML = '';
//   })
// })

button.addEventListener('click', function(item2) {
  item2.preventDefault();
  let value = input.value;

  if (value != '') {
    let newLi = document.createElement('li');
    newLi.classList = 'newLi';
    newLi.textContent = value;
    let spanDiv = document.createElement ('div');
    spanDiv.classList = 'spanDiv';

    let spanDlt = document.createElement ('span');
    let spanDlt2 = document.createElement ('span');
    spanDlt.classList = 'Dltspan'
    spanDlt2.classList = 'Dltspan2'
    // spanDlt.textContent = 'X';
    spanDiv.appendChild(spanDlt);
    spanDiv.appendChild(spanDlt2);
    newLi.appendChild(spanDiv);
    // newLi.appendChild(spanDlt);
    // newLi.appendChild(spanDlt2);

    // spanDlt.addEventListener('click', function() {
    //   newLi.remove();
    // })
    // spanDlt2.addEventListener('click', function() {
    //   newLi.remove();
    // })
    spanDiv.addEventListener('click', function() {
        newLi.remove();
      })

    foodUl.appendChild(newLi);
    input.value = '';
  }

  clearBtn.addEventListener('click',function() {
    foodUl.innerHTML = '' ;
  }
  )

})