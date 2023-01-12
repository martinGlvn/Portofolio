let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  navbar.classList.toggle("open-menu")
  menu.classList.toggle("move")
}
window.onscroll = ()=>{
  navbar.classList.remove("open-menu")
  menu.classList.remove("move")
}

// Review Swiper
var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});
// Emailjs
function validate(){
  let name = document.querySelector('.name')
  let email = document.querySelector('.email')
  let msg = document.querySelector('.message')
  let sendBtn = document.querySelector('.send-btn')

  sendBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    if(name.value == "" || email.value == "" || msg == ""){
      emptyerror();
    }else{
      sendmail(name.value, email.value, msg.value);
      success;
    }
  })
}
validate();

// Header
let header = document.querySelector('header')
window.addEventListener('scroll', ()=>{
  header.class.List.toggle("header-active", window.scrollY > 0);
})

// Scroll Top
let scrollTop = document.querySelector('scroll-top')
window.addEventListener('scroll', ()=>{
  scrollTop.class.List.toggle("scroll-active", window.scrollY >= 400);
})


