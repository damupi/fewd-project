const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const modeLabel = document.getElementById('mode-label');
let mobileMenu = document.getElementById('mobile-menu');
let popupMenu = document.getElementById('popup-menu');
const popMenuOpts = document.querySelectorAll('#popup-menu ul li a')
const desktopMenuOpts = document.querySelectorAll('#desktop-menu ul li a')
// List menu items
// Desktop items
const menuItems = document.querySelectorAll('.desktop-menu ul li');

let imgEmail = document.querySelector('[data-social_img="email"]');
let imgTelegram = document.querySelector('[data-social_img="telegram"]');
let imgTwitter = document.querySelector('[data-social_img="twitter"]');
let socialImgSrcs = [imgEmail, imgTelegram, imgTwitter];

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
    socialImgSrcs.forEach( (item) => {
      // console.log(`the precious src was: ${item.src}`);
      item.src = item.src.replace('dark', 'light');
      // console.log(`the src has changed to: ${item.src}`);
    })
  } else {
    socialImgSrcs.forEach( (item) => {
      // console.log(`the precious src was: ${item.src}`);
      item.src = item.src.replace( 'light', 'dark');
      // console.log(`the src has changed to: ${item.src}`);

    })
  }
  return
}





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

