let navbar = document.querySelector(".header__menu");
let hamburgerLogo = document.querySelector(".header__hamburger ");

hamburgerLogo.addEventListener('click', function() {
    navbar.classList.toggle('open');

    
    
    if (navbar.classList.contains('open')) {
        hamburgerLogo.innerHTML = '<img src="./icons/hamburger__close.png" alt="close">';
      } else {
        hamburgerLogo.innerHTML = '<img src="./icons/hamburger__button.png" alt="hamburger_icon">';
      }
      
});

