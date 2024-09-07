const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const modeLabel = document.getElementById('mode-label');
const burguerMenuEl = document.getElementById('burguer-menu');

// const imgGdc = document.querySelector('[data-company_img="gdc"]');
const imgEmail = document.querySelector('[data-social_img="email"]');
const imgTelegram = document.querySelector('[data-social_img="telegram"]');
const imgTwitter = document.querySelector('[data-social_img="twitter"]');
// const ImgSrcs = [imgGdc, imgEmail, imgTelegram, imgTwitter];
const ImgSrcs = [imgEmail, imgTelegram, imgTwitter];

// toggle theme mode function
const switchTheme = (e) => {
    // console.log('toggling theme');
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
};


const changeSocialImgs = (theme) =>  {
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

// Event listener for toggle switch
toggleSwitch.addEventListener('change', switchTheme, false);


// Event listener BuguerMenu styling
burguerMenuEl.addEventListener('click', toggleburguerMenu);


/* Theme Toggle */

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

/* FLIP CARDS */
document.querySelectorAll(".flip-card").forEach(card => {
  card.addEventListener("click", () => {
    card.querySelector(".flip-card-inner").style.transform = 
      card.querySelector(".flip-card-inner").style.transform === "rotateY(180deg)" 
        ? "rotateY(0deg)" 
        : "rotateY(180deg)";
  });
});

/* END OF FLIP CARDS */