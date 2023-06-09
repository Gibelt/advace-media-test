window.addEventListener('DOMContentLoaded', () => {
  // * ===== Mask input
  //   $('input[type="tel"]').mask('+7 (999) 999-99-99');
  // * ===== Nice Select
  // $('select').niceSelect();

  (function ori() {
    var devWidth, devHeight;
    window.addEventListener('load', function () {
      devWidth = screen.width;
      devHeight = screen.height;
    });
    window.addEventListener(
      'orientationchange',
      function () {
        if (
          devWidth < 768 &&
          (window.orientation === 90 || window.orientation === -90)
        ) {
          document.body.style.overflow = 'hidden';
          document.body.style.width = devWidth + 'px';
          document.body.style.height = devHeight + 'px';
          document.body.style.transform = 'rotate(90deg)';
          document.body.style.transformOrigin =
            '' + devHeight / 2 + 'px ' + devHeight / 2 + 'px';
        } else {
          document.body.removeAttribute('style');
        }
      },
      true
    );
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.promo__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 1,
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.reg-card-slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        slidesPerView: 1,
      });
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.subscriptions__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 1,
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.club-cards__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 2.2,
      spaceBetween: 20,
      initialSlide: 1,
      centeredSlides: true,
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.gallery__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        slidesPerView: 1,
      });
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.news__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        slidesPerView: 1,
      });
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.object-maps__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        spaceBetween: 10,
        slidesPerView: 'auto',
      });
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.settings-cabinet-slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 1,
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.slider-one');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 1,
    });
  })();

  //* Show Filter Btns
  function ShowFiltersBtn() {
    const scrollTopEl = document.querySelector('.filter-btns');
    if (scrollTopEl) {
      if (this.scrollY >= window.innerHeight) {
        scrollTopEl.classList.add('show-scroll');
      } else {
        scrollTopEl.classList.remove('show-scroll');
      }

      scrollTopEl.addEventListener('click', (e) => {
        window.scroll(0, 0);
      });
    }
  }
  window.addEventListener('scroll', ShowFiltersBtn);

  //* Show scroll top
  function scrollTop() {
    const scrollTopEl = document.querySelector('.scroll-top-btn');
    if (scrollTopEl) {
      if (this.scrollY >= window.innerHeight) {
        scrollTopEl.classList.add('show-scroll');
      } else {
        scrollTopEl.classList.remove('show-scroll');
      }

      scrollTopEl.addEventListener('click', (e) => {
        window.scroll(0, 0);
      });
    }
  }
  window.addEventListener('scroll', scrollTop);

  // * ===== Accordion
  const toggleAccordion = (accordionControl, accordionContent, accordion) => {
    const filters = document.querySelectorAll(accordionControl);
    filters.forEach((el) => {
      if (el) {
        el.addEventListener('click', (e) => {
          const target = e.target.closest(accordion);
          const content = target.querySelector(accordionContent);
          target.classList.toggle('active');
          if (target.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
          } else {
            content.style.maxHeight = null;
          }
        });
      }
    });
  };
  toggleAccordion('.accordion-control-btn', '.accordion-content', '.accordion');

  //   // * ===== Fixed Header
  //   (function fixedHeader() {
  //     function scrollHeader() {
  //       const nav = document.querySelector('header');
  //       if (this.scrollY >= 90) {
  //         nav.classList.add('scroll-header');
  //       } else {
  //         nav.classList.remove('scroll-header');
  //       }
  //     }
  //     window.addEventListener('scroll', scrollHeader);
  //     // ! Change
  //     function changeBg() {
  //       const header = document.querySelector('header');
  //       if (window.pageYOffset >= 90) {
  //         header.classList.add('scroll-header');
  //       }
  //     }
  //     changeBg();
  //   })();

  // * =====  Show Bubles
  (function shoBubbles() {
    const menuBtn = document.querySelector('.show-bubbles');
    const items = document.querySelectorAll('.mobile-menu .item');
    console.log(items);

    if (menuBtn) {
      menuBtn.addEventListener('click', (e) => {
        items.forEach((item) => {
          item.classList.toggle('active');
        });
      });
    }
  })();

  // * ===== Show Menu
  (function showSearch() {
    const menuBtn = document.querySelector('.btn-search');
    const menu = document.querySelector('.search-field');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');

    if (menuBtn) {
      menuBtn.addEventListener('click', (e) => {
        menu.classList.toggle('active');
      });
    }
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.btn-menu');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    if (menuBtn) {
      menuBtn.addEventListener('click', (e) => {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
      });
    }
  })();

  //   // * ===== Modal
  //   (function modals() {
  //     function bindModal(openBtn, modal, close) {
  //       const openBtnEl = document.querySelectorAll(openBtn);
  //       const modalEl = document.querySelector(modal);
  //       const closeEl = document.querySelectorAll(close);
  //       const body = document.querySelector('body');
  //       if (modalEl) {
  //         openBtnEl.forEach((el) => {
  //           el.addEventListener('click', (e) => {
  //             if (e.target) {
  //               e.preventDefault();
  //             }
  //             modalEl.classList.add('active');
  //             body.classList.add('no-scroll');
  //           });
  //         });
  //         closeEl.forEach((btn) => {
  //           btn.addEventListener('click', (e) => {
  //             modalEl.classList.remove('active');
  //             body.classList.remove('no-scroll');
  //           });
  //         });
  //         modalEl.addEventListener('click', (e) => {
  //           if (e.target === modalEl) {
  //             modalEl.classList.remove('active');
  //             body.classList.remove('no-scroll');
  //           }
  //         });
  //       }
  //     }
  //     bindModal('.online-booking-btn', '.popup--online-booking', '.popup__close');
  //   })();

  // * ===== Toggle Tabs
  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);
    header.forEach((el) => {
      if (el) {
        hideTabContent();
        showTabContent();
        function hideTabContent() {
          content.forEach((item) => {
            item.classList.remove('active');
          });
          tab.forEach((item) => {
            item.classList.remove(activeClass);
          });
        }
        function showTabContent(i = 0) {
          content[i].classList.add('active');
          tab[i].classList.add(activeClass);
        }
        header.forEach((item) => {
          if (item) {
            item.addEventListener('click', (e) => {
              const target = e.target;
              if (target.classList.contains(tabSelector.replace(/\./, ''))) {
                tab.forEach((item, i) => {
                  if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                  }
                });
              }
            });
          }
        });
      }
    });
  }
  someTabs(
    '.object-tabs',
    '.object-tabs__btn',
    '.object-tabs__content',
    'active'
  );
  someTabs('.n-tabs', '.n-tabs-btn', '.n-tabs-content', 'active');
});
