window.addEventListener("load", function(){
  'use strict';

  /* =======================
  // Menu
  ======================= */
  var body = document.querySelector("body"),
  contactBox = document.querySelector(".contact-modal"),
  contactOpenButton = document.querySelector(".cta-button"),
  // contactOpenButton = document.querySelector(".cta-button"),
  contactCloseButton = document.querySelector(".contact-close"),
  menuOpenIcon = document.querySelector(".nav__icon-menu"),
  menuCloseIcon = document.querySelector(".nav__icon-close"),
  menuList = document.querySelector(".main-nav");

  menuOpenIcon.addEventListener("click", () => {
    menuOpen();
  });

  menuCloseIcon.addEventListener("click", () => {
    menuClose();
  });

  if (contactOpenButton) {
    contactOpenButton.addEventListener("click", (e) => {
      const href = contactOpenButton.getAttribute("href");
  
      // If it's a full URL, just let the browser handle it (i.e. open link)
      if (href && href.startsWith("http")) {
        return;
      }
  
      // Otherwise, prevent default and show modal
      e.preventDefault();
      contactOpen();
    });
  }

  // contactOpenButton.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   contactOpen();
  // });

  contactCloseButton.addEventListener("click", (e) => {
    contactClose();
  });

  function menuOpen() {
    menuList.classList.add("is-open");
  }

  function menuClose() {
    menuList.classList.remove("is-open");
  }

  function contactOpen() {
    contactBox.classList.add("is-visible");
    menuList.classList.remove("is-open");
  }

  function contactClose() {
    contactBox.classList.remove("is-visible");
  }


  /* =======================
  // Animation Load Page
  ======================= */
  setTimeout(function(){
    body.classList.add("is-in");
  },150)


  /* ======================================
  // Stop Animations During Window Resizing
  ====================================== */
  let resizeTimer;
  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 300);
  });


  /* =======================
  // Responsive Videos
  ======================= */
  reframe(".post__content iframe:not(.reframe-off), .page__content iframe:not(.reframe-off), .project-content iframe:not(.reframe-off)");


  /* =======================
  // Zoom Image
  ======================= */
  const lightense = document.querySelector(".page img, .post img, .project-content img"),
  imageLink = document.querySelectorAll(".page a img, .post a img, .project-content a img");

  if (imageLink) {
    for (var i = 0; i < imageLink.length; i++) imageLink[i].parentNode.classList.add("image-link");
    for (var i = 0; i < imageLink.length; i++) imageLink[i].classList.add("no-lightense");
  }

  if (lightense) {
    Lightense(".page img:not(.no-lightense), .post img:not(.no-lightense), .project-content img:not(.no-lightense)", {
    padding: 60,
    offset: 30
    });
  }


  /* =======================
  // LazyLoad Images
  ======================= */
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
  })


  /* ============================
  // Smooth scrolling to section
  ============================ */
  // document.querySelectorAll(".author__btn").forEach(anchor => {
  //   anchor.addEventListener("click", function (e) {
  //     e.preventDefault();

  //     document.querySelector(this.getAttribute("href")).scrollIntoView({
  //       behavior: "smooth"
  //     });
  //   });
  // });
  
  document.querySelectorAll(".author__btn").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
  
      // Only intercept links that are in-page anchors (start with #)
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth"
          });
        }
      }
      // Else, let normal link behavior happen (e.g., open file or external page)
    });
  });


  

  /* ============================
  // Testimonials Slider
  ============================ */
  if (document.querySelector(".my-slider")) {
    var slider = tns({
      container: ".my-slider",
      items: 3,
      slideBy: 1,
      gutter: 32,
      nav: false,
      mouseDrag: true,
      autoplay: false,
      controlsContainer: "#customize-controls",
      responsive: {
        1024: {
          items: 3,
        },
        768: {
          items: 2,
        },
        0: {
          items: 1,
        }
      }
    });
  }


  /* ============================
  // iTyped
  ============================ */
  if (document.querySelector(".subscribe")) {
    var options = {
      strings: itype_text,
      typeSpeed: 100,
      backSpeed: 50,
      startDelay: 200,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      onFinished: function(){}
    }

    ityped.init('#ityped', options);
  }


  /* ============================
  // Scroll to top
  ============================ */
  const btnScrollToTop = document.querySelector(".top");

  window.addEventListener("scroll", function () {
    window.scrollY > window.innerHeight ? btnScrollToTop.classList.add("is-active") : btnScrollToTop.classList.remove("is-active");
  });

  btnScrollToTop.addEventListener("click", function () {
    if (window.scrollY != 0) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
    }
  });

});
