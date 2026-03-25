setActiveNav('projects.html');

const root = document.getElementById('projects-grid');
const buttons = document.querySelectorAll('.filter-btn');

function render(filter = 'All') {
  const shown = filter === 'All' ? DATA.projects : DATA.projects.filter((p) => p.category === filter);
  root.innerHTML = shown.map(cardTemplate).join('');
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((b) => b.classList.remove('active'));
    button.classList.add('active');
    render(button.dataset.filter);
  });
});

render();
