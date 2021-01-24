import './scss/main.scss'

import App from '../src/app/app'
import { chartOne } from './app/components/chart'

// $(document).ready(function () {
//   console.log('loader stop doc ready');
//
//   // $('#menu').on('click', (e) => {
//   //   e.preventDefault();
//   //   $('#links').slideToggle(300);
//   //   $('#links').toggleClass('d-none');
//   // });
//   App();
//   const menu = document.getElementById('menu');
//   const links = document.getElementById('links');
//
//   menu.addEventListener('click', () => {
//     links.classList.toggle('d-none')
//     // links.classList.toggle('slideAnim')
//   })
// });

document.addEventListener("DOMContentLoaded", function() {
  App();
  const menu = document.getElementById('menu');
  const links = document.getElementById('links');

  menu.addEventListener('click', () => {
    links.classList.toggle('d-none')
    // links.classList.toggle('slideAnim')
  })
});
