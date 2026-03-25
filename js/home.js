setActiveNav('index.html');

const featured = document.getElementById('featured');
if (featured) {
  featured.innerHTML = DATA.projects.slice(0, 3).map(cardTemplate).join('');
}
