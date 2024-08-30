const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const modeLabel = document.getElementById('mode-label');
let mobileMenu = document.getElementById('mobile-menu');
let popupMenu = document.getElementById('popup-menu');
const popMenuOpts = document.querySelectorAll('#popup-menu ul li a')
const desktopMenuOpts = document.querySelectorAll('#desktop-menu ul li a')
// List menu items
// Desktop items
const menuItems = document.querySelectorAll('.desktop-menu ul li');

// let imgGdc = document.querySelector('[data-company_img="gdc"]');
let imgEmail = document.querySelector('[data-social_img="email"]');
let imgTelegram = document.querySelector('[data-social_img="telegram"]');
let imgTwitter = document.querySelector('[data-social_img="twitter"]');
// let ImgSrcs = [imgGdc, imgEmail, imgTelegram, imgTwitter];
let ImgSrcs = [imgEmail, imgTelegram, imgTwitter];

// toggle theme mode function
function switchTheme(e) {
    console.log('toggling theme');
    if (e.target.checked) {
        document.documentElement.setAttribute('color-mode', 'dark');
        localStorage.setItem("color-mode", "dark");
        modeLabel.textContent = "Dark Mode";
        changeSocialImgs("dark");
      } else {
        document.documentElement.setAttribute('color-mode', 'light');
        localStorage.setItem("color-mode", "light");
        modeLabel.textContent = "Light Mode";
        changeSocialImgs("light");
    }
}

// mobile menu functions

let hidePopupMenu = () => {
  popupMenu.style.display =  'none';
  popupMenu.style.overflow =  'hidden';
  popupMenu.classList.toggle('hidden');
}

let showPopupMenu = () =>  {
  popupMenu.style.display = 'block';
  popupMenu.style.overflow =  'visible';
  popupMenu.classList.toggle('hidden');
}


let changeSocialImgs = (theme) =>  {
  // console.log('the theme is:', theme)
  if (theme === 'light') { 
    ImgSrcs.forEach( (item) => {
      // console.log(`the precious src was: ${item.src}`);
      item.src = item.src.replace('dark', 'light');
      // console.log(`the src has changed to: ${item.src}`);
    })
  } else {
    ImgSrcs.forEach( (item) => {
      // console.log(`the precious src was: ${item.src}`);
      item.src = item.src.replace( 'light', 'dark');
      // console.log(`the src has changed to: ${item.src}`);

    })
  }
  return
}

/* Theme Toggle */

// Event listener for toggle switch
toggleSwitch.addEventListener('change', switchTheme, false);

// Event listener for options of the hidden menu
popMenuOpts.forEach(
  (item) => item.addEventListener('click', hidePopupMenu )
);

// Event listener for clicking the hamburger menu
mobileMenu.addEventListener('click', showPopupMenu);



// Persist theme on page reload with logic to show opposite state on toggle
if (
  localStorage.getItem('color-mode') === 'dark' ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches &&
  !localStorage.getItem('color-mode'))
) {
  document.documentElement.setAttribute('color-mode', 'dark');
  toggleSwitch.checked = true;
  modeLabel.textContent = "Dark Mode";
  changeSocialImgs("dark")
} else {
  document.documentElement.setAttribute('color-mode', 'light');
  toggleSwitch.checked = false;
  modeLabel.textContent = "Light Mode";
  changeSocialImgs("light")
}

/* END OF Theme Toggle */

/* FADE IN ELEMENTS */

const scrollOffset = 100;
const scrollElement = document.querySelector(".js-scroll");
const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};
const displayScrollElement = () => {
  scrollElement.classList.add('scrolled');
}
const hideScrollElement = () => {
  scrollElement.classList.remove('scrolled');
}
const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
      displayScrollElement();
  } else {
    hideScrollElement();
  }
}
window.addEventListener('scroll', () => {
  handleScrollAnimation();
})

/* END OF FADE IN ELEMENTS */













// Add event listeners to each li
menuItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    // Remove animation from all other li elements within the same ul
    menuItems.forEach(li => {
      if (li !== item) {
        li.classList.add('hover-inactive');
        li.style.animation = 'none';
      }
    });
    // Add the hover-active class to the hovered item
    item.classList.add('hover-active');
  });

  item.addEventListener('mouseleave', () => {
    // Re-enable animation on all li elements within the same ul
    menuItems.forEach(li => {
      li.classList.remove('hover-inactive');
      li.style.animation = '';
    });
    // Remove the hover-active class when hover ends
    item.classList.remove('hover-active');
  });
});

// Remove the modal-related code and add this:

document.querySelectorAll(".flip-card").forEach(card => {
  card.addEventListener("click", () => {
    card.querySelector(".flip-card-inner").style.transform = 
      card.querySelector(".flip-card-inner").style.transform === "rotateY(180deg)" 
        ? "rotateY(0deg)" 
        : "rotateY(180deg)";
  });
});

// You can remove the openModal, closeModal, and getCompanyDescription functions
// as they are no longer needed.

// Rest of the existing code...


