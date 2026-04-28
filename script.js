'use strict';
//SELECTIONS

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const scrollButton = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);
const nav = document.querySelector(`.nav`);
//Tabbed component
const tabs = document.querySelectorAll(`.operations__tab`);
const tabContainer = document.querySelector(`.operations__tab-container`);
const tabsContent = document.querySelectorAll(`.operations__content`);

///////////////////////////////////////
// Modal window

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

//SCROLLING IMPLEMENTATION
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

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
  section1.scrollIntoView({ behavior: `smooth` });
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
});

//PAGE NAVIGATION
///////////////////////////////////////////

/*
document.querySelectorAll(`.nav__link`).forEach(el => {
  el.addEventListener(`click`, function (e) {
    e.preventDefault();
    const id = el.getAttribute(`href`);
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
  });
});
*/

document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  e.preventDefault();

  if (e.target.classList.contains(`nav__link`)) {
    const id = e.target.getAttribute(`href`);
    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
  }
});

tabContainer.addEventListener(`click`, function (e) {
  const clicked = e.target.closest(`.operations__tab`);
  //console.log(clicked);

  //Guard clause
  if (!clicked) return;

  //REMOVE ACTIVE CLASS
  tabs.forEach(t => t.classList.remove(`operations__tab--active`));
  tabsContent.forEach(tc => tc.classList.remove(`operations__content--active`));
  //Active tab
  clicked.classList.add(`operations__tab--active`);
  //Active text area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Implementing nav links fade animation
/*
const handleHover = function (e, opacity) {
  if (e.target.classList.contains(`nav__link`)) {
    const link = e.target;
    const siblings = link.closest(`.nav`).querySelectorAll(`.nav__link`);
    const logo = link.closest(`.nav`).querySelector(`img`);
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = opacity;
      }
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener(`mouseover`, function (e) {
  handleHover(e, 0.5);
});

nav.addEventListener(`mouseout`, function (e) {
  handleHover(e, 1);
});
*/
const handleHover = function (e) {
  if (e.target.classList.contains(`nav__link`)) {
    const link = e.target;
    const siblings = link.closest(`.nav`).querySelectorAll(`.nav__link`);
    const logo = link.closest(`.nav`).querySelector(`img`);
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener(`mouseover`, handleHover.bind(0.5));

nav.addEventListener(`mouseout`, handleHover.bind(1));

//Implementing sticky nav bar(SCROLL EVENT - BAD PERFORMANCE)

const initialPosition = section1.getBoundingClientRect().top;
window.addEventListener(`scroll`, function () {
  console.log(window.scrollY);
  if (window.scrollY >= initialPosition) {
    nav.classList.add(`sticky`);
  } else {
    nav.classList.remove(`sticky`);
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

//Types of Events

/*const h1 = document.querySelector(`h1`);

h1.addEventListener(`mouseenter`, function (e) {
  alert(`This is an important message :D`);
});
*/
/*
h1.onmouseenter = function (e) {
  alert(`This is even more important XD`);
};


const h1Alert = function (e) {
  alert(`Some text`);
};

h1.addEventListener(`click`, h1Alert);

setTimeout(() => {
  h1.removeEventListener(`click`, h1Alert);
}, 3000);
*/

//Event Propagation in Practice
/*
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

console.log(randomColor());

document.querySelector(`.nav__link`).addEventListener(`click`, function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`LINK`, e.target, e.currentTarget);
  //console.log(e.currentTarget === this);

  //STOP PROPAGATION
  //e.stopPropagation();
});

document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`CONTAINER`, e.target, e.currentTarget);
});

document.querySelector(`.nav`).addEventListener(
  `click`,
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log(`NAV BAR`, e.target, e.currentTarget);
  },
  true,
);
*/

//DOM Traversing
/*
const h1 = document.querySelector(`h1`);

//Going downwards (Children)
console.log(h1.querySelectorAll(`.highlight`));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = `white`;
h1.lastElementChild.style.color = `orange`;

//Going upwards (Parents)

console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(`.header`).style.background = `var(--color-tertiary)`;

h1.closest(`h1`).style.background = `var(--color-secondary-opacity)`;

//Going sideways (Siblings)
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    el.style.transform = `scale(0.5)`;
  }
});
*/
