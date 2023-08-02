const btnHamburger = document.querySelector(".btn-hamburger");

const overlay = document.querySelector(".overlay");

const body = document.querySelector("body");

const header = document.querySelector(".header");

const fadeEls = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    body.classList.remove("no-scroll");
    fadeEls.forEach((el) => {
      el.classList.remove("fade-in");
      el.classList.add("fade-out");
    });
    // overlay.classList.remove("fade-in");
    // overlay.classList.add("fade-out");
  } else {
    //open hamburger menu
    header.classList.add("open");
    body.classList.add("no-scroll");
    fadeEls.forEach((el) => {
      el.classList.remove("fade-out");
      el.classList.add("fade-in");
    });
  }
});

const slider = () => {
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".dots");

  const slider = document.querySelector(".feedbacks__slider");

  let curSlide = 0;
  const maxSlide = slides.length;

  const createDots = () => {
    slides.forEach((_, i) => {
      dotsContainer.insertAdjacentHTML(
        "beforeend",
        `<button class ="dots__dot" data-slide= ${i}></button>`
      );
    });
  };

  const activateDot = (slide) => {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide ="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = (slide) => {
    const checkviewport = window.matchMedia("(max-width:1023px)");

    const mobileFunc = (x) => {
      if (x.matches) {
        slides.forEach((s, i) => {
          s.style.transform = `translateX(${100 * (i - slide)}%)`;
        });
      }
    };

    mobileFunc(checkviewport);

    checkviewport.addListener(mobileFunc);
  };

  const nextSlide = () => {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = () => {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = () => {
    createDots();
    activateDot(0);
    goToSlide(0);
  };

  init();

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      nextSlide();
      activateDot(curSlide);
    }
    e.key === "ArrowLeft" && prevSlide();
    activateDot(curSlide); //short circuting/ the AND opearator taps out when the first value is false, if not it moves to the second value. if the second value is true too,it executes the second value and that's what happened there.
  });

  dotsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();

const arr1 = [{ name: "kamal", age: 19, isAdult: true }];

console.log([...arr1, { name: "shola", age: 35, isAdult: true }]);

const persons = [
  { name: "kamal", age: 24 },
  { name: "sharafa", age: 26 },
  { name: "tao", age: 23 },
];

const result = persons.filter((person) => person.age === 24);

console.log(result);

// const mobileFunc = (x) => {
//   if (x.matches) {
//     slider();
//   }
// };

// const checkviewport = window.matchMedia("(max-width:1023px)");

// mobileFunc(checkviewport);

// checkviewport.addListener(mobileFunc);

// const checkviewport = () => {
//   if (window.innerWidth <= 1023) {
//     slider();
//   }
// };

// window.onload = checkviewport;

// window.addEventListener("resize", checkviewport);
