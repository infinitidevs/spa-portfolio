const changeText = () => {
  const themeBtn = document.querySelector('#themeBtn');
  if (themeBtn.innerText === '☀') {
    themeBtn.innerText = '☾';
  } else {
    themeBtn.innerText = '☀';
  }
};

export const changeLab = () => {
  if (document.body.classList.contains("ah-light")) {

      const iconList = document.querySelectorAll(".ah-icon");
      for (let i = 0; i < iconList.length; i++) {
        iconList[i].classList.toggle("ah-icon__light");
      }
      
      const cardList = document.querySelectorAll(".ah-project-card");
      for (let i = 0; i < cardList.length; i++) {
        cardList[i].classList.toggle("ah-card__light");
      }

  } else {

    const iconList = document.querySelectorAll(".ah-icon");
    for (let i = 0; i < iconList.length; i++) {
      iconList[i].classList.remove("ah-icon__light");
    }
    
    const cardList = document.querySelectorAll(".ah-project-card");
    for (let i = 0; i < cardList.length; i++) {
      cardList[i].classList.remove("ah-card__light");
    }
  }
};

export const changeCareer = () => {
  if (document.body.classList.contains("ah-light")) {

      const iconList = document.querySelectorAll(".ah-icon");
      for (let i = 0; i < iconList.length; i++) {
        iconList[i].classList.toggle("ah-icon__light");
      }

      const careerList = document.querySelectorAll(".ah-career-card");
      for (let i = 0; i < careerList.length; i++) {
        careerList[i].classList.toggle("ah-career__light");
      }
    
  } else {

    const iconList = document.querySelectorAll(".ah-icon");
    for (let i = 0; i < iconList.length; i++) {
      iconList[i].classList.remove("ah-icon__light");
    }

    const careerList = document.querySelectorAll(".ah-career-card");
    for (let i = 0; i < careerList.length; i++) {
      careerList[i].classList.remove("ah-career__light");
    }

  }
};

export const changeSandbox = () => {
  if (document.body.classList.contains("ah-light")) {
    document.querySelector(".ah-hero__title").classList.toggle("ah-title__light");
    
  } else {
    document.querySelector(".ah-hero__title").classList.remove("ah-title__light");
  }
};

export const changeHeader = () => {
  if (document.body.classList.contains("ah-light")) {
    document.querySelector("header").classList.toggle("ah-hdr__light");
    document.querySelector(".ah-menu-button").classList.toggle("ah-menu-btn__light");
    
  } else {
    document.querySelector("header").classList.remove("ah-hdr__light");
    document.querySelector(".ah-menu-button").classList.remove("ah-menu-btn__light");
  }
};

export const changeFooter = () => {
  if (document.body.classList.contains("ah-light")) {
      const btnList = document.querySelectorAll(".ah-img-btn");
      for (let i = 0; i < btnList.length; i++) {
        btnList[i].classList.toggle("ah-btn__light");
      }  
  } else {
    const btnList = document.querySelectorAll(".ah-img-btn");
    for (let i = 0; i < btnList.length; i++) {
      btnList[i].classList.remove("ah-btn__light");
    }
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

      document.querySelector("header").classList.remove("ah-hdr__light");
      document.querySelector(".ah-menu-button").classList.remove("ah-menu-btn__light");
      document.querySelector("#ah-hero__title").classList.remove("ah-title__light");
};

export const changeTheme = () => {
  const themeBtn = document.querySelector('#themeBtn');
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('ah-light');
    changeText();
    changeElements();
    changeHeader();
  });
};