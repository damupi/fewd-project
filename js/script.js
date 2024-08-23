const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const modeLabel = document.getElementById('mode-label');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('color-mode', 'dark');
        localStorage.setItem("color-mode", "dark");
        modeLabel.textContent = "Dark Mode";
    } else {
        document.documentElement.setAttribute('color-mode', 'light');
        localStorage.setItem("color-mode", "light");
        modeLabel.textContent = "Light Mode";
    }
}

// Event listener for toggle switch
toggleSwitch.addEventListener('change', switchTheme, false);

// Persist theme on page reload with logic to show opposite state on toggle
if (
    localStorage.getItem('color-mode') === 'dark' ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches &&
     !localStorage.getItem('color-mode'))
) {
    document.documentElement.setAttribute('color-mode', 'dark');
    toggleSwitch.checked = true;
    modeLabel.textContent = "Dark Mode";
} else {
    document.documentElement.setAttribute('color-mode', 'light');
    toggleSwitch.checked = false;
    modeLabel.textContent = "Light Mode";
}



let mobileMenu = document.getElementById('mobile-menu');
let popupMenu = document.getElementById('popup-menu');
let popMenuOpts = document.querySelectorAll('#popup-menu ul li a')
let desktopMenuOpts = document.querySelectorAll('#desktop-menu ul li a')


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

popMenuOpts.forEach(
    (item) => item.addEventListener('click', hidePopupMenu )
    )

mobileMenu.addEventListener('click', showPopupMenu);

// popMenuOpts.addEventListener('click', hidePopupMenu);



// List menu items
// Get all li elements within the .desktop-menu div
const menuItems = document.querySelectorAll('.desktop-menu ul li');

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

