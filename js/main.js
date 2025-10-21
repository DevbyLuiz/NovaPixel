// MENU MOBILE
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if(navToggle){
  navToggle.addEventListener('click', () => navLinks.classList.toggle('show'));
}

// SCROLL SUAVE E HIGHLIGHT
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(link=>{
  link.addEventListener('click', e=>{
    const href = link.getAttribute('href');
    if(href.startsWith("#")){
      e.preventDefault();
      const target = document.querySelector(href);
      if(target){
        window.scrollTo({ top: target.offsetTop - 70, behavior:'smooth' });
      }
      if(navLinks.classList.contains('show')) navLinks.classList.remove('show');
    }
  });
});

window.addEventListener('scroll', ()=>{
  const scrollPos = window.scrollY + 80;
  navItems.forEach(link=>{
    const section = document.querySelector(link.getAttribute('href'));
    if(section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight){
      navItems.forEach(i=>i.classList.remove('active'));
      link.classList.add('active');
    }
  });

  const backTop = document.getElementById('back-to-top');
  if(scrollPos > 500) backTop.style.display = 'block';
  else backTop.style.display = 'none';
});

document.getElementById('back-to-top').addEventListener('click', ()=>{
  window.scrollTo({top:0, behavior:'smooth'});
});

// FADE-IN SEQUENCIAL
const fadeElems = document.querySelectorAll('.fade');
fadeElems.forEach((el, index) => {
  setTimeout(()=>{
    el.style.transition = "all 0.6s ease";
    el.style.opacity = 1;
    el.style.transform = "translateY(0)";
  }, 200 * index);
});

// Hover extra
fadeElems.forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.style.transform = "translateY(-8px)";
    el.style.boxShadow = "0 12px 20px rgba(0,0,0,0.25)";
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = "translateY(0)";
    el.style.boxShadow = "0 4px 6px rgba(0,0,0,0.05)";
  });
});

// FORMULÁRIO COM MODAL
const form = document.getElementById('contact-form');
const modal = document.getElementById('success-modal');
const closeModal = document.getElementById('close-modal');

if(form){
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if(name && email && message){
      modal.classList.add('show');
      form.reset();
    }else{
      alert('Por favor, preencha todos os campos.');
    }
  });
}

if(closeModal){
  closeModal.addEventListener('click', ()=> modal.classList.remove('show'));
}