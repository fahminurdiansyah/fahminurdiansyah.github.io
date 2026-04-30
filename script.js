const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const container = entry.target.querySelector('.container');

    if (entry.isIntersecting) {
      container.classList.add('show');
    } else {
      container.classList.remove('show');
    }
  });
}, {
  threshold: 0.3
});

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

function setSkill(el) {
  document.querySelectorAll('.skill-card').forEach(c => {
    c.classList.remove('active');
  });

  el.classList.add('active');
}
