'use strict';

const leftPanel = document.querySelector('.left-panel');
const navIconContainer = document.querySelector('.navbar-icon-container');
const mainContent = document.querySelector('.main-content');

function collapse() {
  //   leftPanel.classList.toggle('collapse');
  leftPanel.classList.toggle('collapsed-panel');
  mainContent.classList.toggle('collapse-main');
}

function collapseNavBar() {
  leftPanel.classList.toggle('collapsed-panel');
}
function collapseMain() {
  mainContent.classList.toggle('collapse-main');
}

navIconContainer.addEventListener('click', collapse);
// navIconContainer.addEventListener('click', if);
// var matchMedia = window.matchMedia('(max-width: 600px)');
// var x = window.matchMedia('(max-width: 1920px)');
// var matchMedia = [
//   window.matchMedia('(max-width: 600px)'),
//   window.matchMedia('(max-width: 900px)'),
//   window.matchMedia('(max-width: 1200px)'),
// ];
const x = window.matchMedia('(max-width: 600px)');
const y = window.matchMedia('(max-width: 900px)');
const z = window.matchMedia('(max-width: 1200px)');

if (x.matches || y.matches || z.matches) {
  collapse();
}
// if (x.matches) {
//   collapse();
// }

// function mediaCheck() {
//   for (let i = 0; i < 3; i++) {
//     if (matchMedia[i].matches) collapse();
//   }
// }
// if (x.matches) {
//   mediaCheck();
// }
