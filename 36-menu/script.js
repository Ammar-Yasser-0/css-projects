document.addEventListener('DOMContentLoaded',() => {
   const menuIcon = document.querySelector('.menu-icon');

   if (menuIcon) {
      menuIcon.addEventListener('click', () => {
         menuIcon.classList.toggle('active');
         const lines = menuIcon.querySelectorAll('div');
         lines.forEach(line => line.classList.remove('no-animation'));
      });
   }
});