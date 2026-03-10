// THEME TOGGLE
document.getElementById("themeToggle").onclick = () => document.body.classList.toggle("dark");

// FADE-IN ON SCROLL
const fades = document.querySelectorAll(".fade");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add("show"); });
});
fades.forEach(fade => observer.observe(fade));

// PLASTIC COUNTER (HOMEPAGE)
const counter = document.getElementById("plasticCounter");
if(counter){
  let saved = 0;
  setInterval(() => {
    saved += Math.floor(Math.random()*5)+1;
    counter.textContent = saved + "g Plastic Saved!";
  }, 2000);
}

// FAQ COLLAPSIBLE
const faqs = document.querySelectorAll(".faq-question");
faqs.forEach(q => {
  q.onclick = () => q.nextElementSibling.classList.toggle("show");
});

// REVIEW CAROUSEL AUTO ROTATE
const carousel = document.querySelector(".review-carousel");
if(carousel){
  let scrollAmount = 0;
  setInterval(() => {
    scrollAmount += 260; // width+gap
    if(scrollAmount >= carousel.scrollWidth - carousel.clientWidth) scrollAmount = 0;
    carousel.scrollTo({ left: scrollAmount, behavior:'smooth' });
  }, 4000);
}
// THEME TOGGLE
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// FAQ TOGGLE
document.querySelectorAll(".faq-question").forEach(q => {
  q.onclick = () => q.nextElementSibling.classList.toggle("show");
});
