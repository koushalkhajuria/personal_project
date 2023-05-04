const hr = document.querySelectorAll('hr');
const body = document.querySelector('body');
const nav_class = document.querySelectorAll('.nav')
const nav = document.querySelector('nav')
const nav_top = document.querySelector('.nav_top')
const nav_middle = document.querySelector('#nav_middle')
const nav_end_profile = document.querySelector('#nav_end_profile')
const nav_search_card = document.querySelectorAll('.nav_search_card')
const nav_search_card_filter = document.querySelectorAll('#nav_quick_search_filter')
const section_card_img_arrow = document.querySelector('#section_card_img_arrow')
const footer = document.querySelector('footer')
const footer_container_1 = document.querySelector('.footer_container_1')

const dark = document.querySelector('#toggle')

let isDark = true;
dark.onclick = () => {
  hr.forEach((item) => {
    item.classList.toggle('hr-dark')
  })
  body.classList.toggle('body-dark')
  nav_class.forEach((item) => {
    item.classList.toggle('nav-class-dark')
  })
  nav.classList.toggle('nav-dark')
  nav_top.classList.toggle('dark')
  nav_middle.classList.toggle('nav_middle-dark')
  nav_end_profile.classList.toggle('nav_end_profile-dark')
  nav_search_card.forEach((item)=> {
    item.classList.toggle('nav_search_card-dark')
  })
  footer.classList.toggle('footer-dark')
  footer_container_1.classList.toggle('dark')
  nav_search_card_filter.classList.toggle('nav_quick_search_filter-dark')
  isDark=!isDark;
}


const coupon = document.querySelector('.coupon')
const closeCoupon = document.querySelector('#close_coupon')
function loadCoupon(){
  document.getElementById('coupon').style.display = 'block';
}
window.onload = loadCoupon()


closeCoupon.onclick = () =>{
  document.getElementById('coupon').style.display = 'none';
}

