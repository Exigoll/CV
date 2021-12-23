// Navigation bar effecs on scroll
window.addEventListener('scroll', function() {
  const header = this.document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 0)
})

// Services section - Modal window
const serviceModals = document.querySelectorAll('.service-modal')
const learnmoreBtns = document.querySelectorAll('.learn-more-btn')
const modalCloseBtns = document.querySelectorAll('.modal-close-btn')

const modal = (modalClick) => {
  serviceModals[modalClick].classList.add('active')
}

learnmoreBtns.forEach((learmoreBtn, i) => {
  learmoreBtn.addEventListener('click', () => {
    modal(i)
  })
})

modalCloseBtns.forEach((modalCloseBtn) => {
  modalCloseBtn.addEventListener('click', () => {
    serviceModals.forEach((modalView) => {
      modalView.classList.remove('active')
    })
  })
})


// Portfolio section - MModal window
const portfolioModals = document.querySelectorAll('.portfolio-model')
const imgCards = document.querySelectorAll('.img-card')
const portfolioCloseBtns = document.querySelectorAll('.portfolio-close-btn')

const portfolioModal = (modalClick) => {
  portfolioModals[modalClick].classList.add('active')
}

imgCards.forEach((imgCard, i) => {
  imgCard.addEventListener('click', () => {
    portfolioModal(i)
  })
})

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
  portfolioCloseBtn.addEventListener('click', () => {
    portfolioModals.forEach((portfolioModalView) => {
      portfolioModalView.classList.remove('active')
    })
  })
})


// our client - Swiper
var swiper = new Swiper(".client-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});