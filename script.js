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
/*
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
/*
header.after(message);

//Delete elements
document
  .querySelector(`.btn--close--cookie`)
  .addEventListener(`click`, function () {
    message.remove();
  });
  /*
/*
//Styles
/*
message.style.backgroundColor = `#0F6635`;
message.style.width = `120%`;

console.log(message.style.height);
console.log(message.style.width);

console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + `px`;

document.documentElement.style.setProperty(`--color-primary`, `orange`);

//Atributes
const navLogo = document.querySelector(`.nav__logo`);
console.log(navLogo.alt);
console.log(navLogo.src);
console.log(navLogo.className);

//non-standard
console.log(navLogo.designer);
console.log(navLogo.getAttribute(`designer`));

navLogo.alt = `alternative-text`;
navLogo.setAttribute(`company`, `new attribute`);
console.log(navLogo.getAttribute(`src`));
console.log(navLogo.src);

const link = document.querySelector(`.nav__link--btn`);

console.log(link.href);
console.log(link.getAttribute(`href`));

//Data attributes
console.log(logo.dataset.versionNumber);

//Class
logo.classList.add(`new`, `j`);
logo.classList.remove(`new`, `j`);
logo.classList.toggle(`new`, `j`);
logo.classList.contains(`new`, `j`);

//Bad practice
logo.classList = `Klas`;
*/

const scrollButton = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);

scrollButton.addEventListener(`click`, function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());
  console.log(`Current scroll (X/Y): `, window.scrollX, window.scrollY);
  console.log(
    `viewport height/width: `,
    document.documentElement.clientHeight,
    document.documentElement.clientWidth,
  );

  //Scrolling
  /*
  window.scrollTo(
    s1coords.left + window.scrollX,
    s1coords.top + window.scrollY,
  );
  */
  /*
  window.scrollTo({
    left: s1coords.left + window.scrollX,
    top: s1coords.top + window.scrollY,
    behavior: `smooth`,
  });
  */

  section1.scrollIntoView({ behavior: `smooth` });
});
