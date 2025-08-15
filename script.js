// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form handler (demo only)
function handleSubmit(e){
  e.preventDefault();
  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const message = e.target.message.value.trim();
  if(!name || !email || !message){
    alert('Please fill out all fields.');
    return false;
  }
  alert(`Thanks, ${name}! Your message is ready to be sent. Replace this with a real email service.`);
  e.target.reset();
  return false;
}
