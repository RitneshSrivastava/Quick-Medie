
// ✅ 1. Auto-fill WhatsApp Message
document.querySelectorAll('.book-btn').forEach(button => {
  button.addEventListener('click', function (e) {
    const message = encodeURIComponent("Hi, I need first aid at my location.");
    this.href = `https://wa.me/+919555325031?text=${message}`;
  });
});

// ✅ 2. Scroll Animation (Fade-in)
window.addEventListener('scroll', () => {
  document.querySelectorAll('.feature, .card, .step, .why-choose-us li').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('show-on-scroll');
    }
  });
});

// ✅ 3. Accordion for FAQ (use .faq-question and .faq-answer in HTML)
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    question.classList.toggle('active');
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// ✅ 4. Basic Testimonial/Service Carousel (add .testimonial class in HTML)
let index = 0;
const testimonials = document.querySelectorAll('.testimonial');
if (testimonials.length) {
  setInterval(() => {
    testimonials.forEach((t, i) => t.style.display = i === index ? 'block' : 'none');
    index = (index + 1) % testimonials.length;
  }, 3000);
}

// ✅ 5. Alert Chat-Like Popup
setTimeout(() => {
  alert("👋 Need help booking? Tap the WhatsApp button to connect instantly!");
}, 8000);

