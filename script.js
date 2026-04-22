'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////
/////////////////
/////////////////
//Selecting Elements

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(`.header`);
console.log(header);
const AllSections = document.querySelectorAll(`.section`);
console.log(AllSections);

document.getElementById(`section--2`);
const allButtons = document.getElementsByTagName(`button`);
console.log(allButtons);

console.log(document.getElementsByClassName(`btn`));

//creating and inserting elements
const message = document.createElement(`div`);
message.classList.add(`cookie-message`);
//message.textContent = `Message for our customer:D`;
message.innerHTML = `Message for our customer:D <button class = "btn btn--close--cookie"> Got It! </button>`;

/*
header.prepend(message);
header.append(message);
header.append(message.cloneNode(true));
header.before(message.cloneNode(true));
header.after(message.cloneNode(true));
*/

header.after(message);

//Delete elements
document
  .querySelector(`.btn--close--cookie`)
  .addEventListener(`click`, function () {
    message.remove();
  });
