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

function setSkill(el, title, desc, project) {
  document.querySelectorAll('.skill-card').forEach(card => {
    card.classList.remove('active');
  });

  el.classList.add('active');

  // update isi (biar feel "pindah ke atas")
  el.querySelector('.skill-title').innerText = title;
  el.querySelector('.skill-desc').innerText = desc;
  el.querySelector('.skill-project').innerText = project;
}
