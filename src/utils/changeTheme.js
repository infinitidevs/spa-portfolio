const changeText = () => {
  const themeBtn = document.querySelector('#themeBtn');
  if (themeBtn.innerText === '☀') {
    themeBtn.innerText = '☾';
  } else {
    themeBtn.innerText = '☀';
  }
};

const changeElements = () => {
  const btnList = document.querySelectorAll(".ah-img-btn");
  for (let i = 0; i < btnList.length; i++) {
    btnList[i].classList.toggle("ah-btn__light");
  }

  const iconList = document.querySelectorAll(".ah-icon");
  for (let i = 0; i < iconList.length; i++) {
    iconList[i].classList.toggle("ah-icon__light");
  }
  
  const cardList = document.querySelectorAll(".ah-project-card");
  for (let i = 0; i < cardList.length; i++) {
    cardList[i].classList.toggle("ah-card__light");
  }

  const careerList = document.querySelectorAll(".ah-career-card");
  for (let i = 0; i < careerList.length; i++) {
    careerList[i].classList.toggle("ah-career__light");
  }

  document.querySelector("header").classList.toggle("ah-hdr__light");
  document.querySelector(".ah-menu-button").classList.toggle("ah-menu-btn__light");
  document.querySelector(".ah-hero__title").classList.toggle("ah-title__light");
};

export const changeTheme = () => {
  const themeBtn = document.querySelector('#themeBtn');
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('ah-light');
    changeElements()  
    changeText();
  });
};