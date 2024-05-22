const burgerMenu = (selector) => {
   const button = document.querySelector(selector);
   button.addEventListener('click', () => {
      toggleMenu();
      button.classList.toggle('burger-menu_active');
   });
   const toggleMenu = () => {
      const nav = document.querySelector('.header_nav');
      nav.classList.toggle('active');
   }
}

burgerMenu('.burger-menu_button');