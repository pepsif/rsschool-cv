//   --RANDOM-CARDS-IN-SLIDER--GENERATOR----
const slickButtonPrev = document.querySelector('.gallery-block');






const cardsBlock = document.querySelector('.cards-block');
const cards = document.querySelectorAll('.card');
const arrCards = Array.from(cardsBlock.children);
const randomOrder = arrCards.forEach( elem => {
  elem.style.order = getRandomInt(1,7)
        // console.log(elem)
})

// console.log( getRandomInt(1,7))

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }


//   ------------------------------------
