'use strict';

const leftPanel = document.querySelector('.left-panel');
const navIconContainer = document.querySelector('.navbar-icon-container');
const mainContent = document.querySelector('.main-content');

function collapse() {
  //   leftPanel.classList.toggle('collapse');
  leftPanel.classList.toggle('collapsed-panel');
  mainContent.classList.toggle('collapse-main');
}

navIconContainer.addEventListener('click', collapse);
