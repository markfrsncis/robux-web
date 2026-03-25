function cardTemplate(project) {
  return `
  <article class="glass card fade-in">
    <img src="${project.image}" alt="${project.title}" loading="lazy">
    <div class="content">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p class="tag">${project.tech.join(' • ')}</p>
    </div>
  </article>`;
}

function setActiveNav(path) {
  document.querySelectorAll('.nav-links a').forEach((a) => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
}
