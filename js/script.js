window.addEventListener('scroll', () => {
    const menu = document.querySelector('.menu__wrap');
    if (window.scrollY > 0) { // Adjust the value as needed
      menu.style.opacity = 1;
      menu.style.visibility = 'visible';
    }
  });
  