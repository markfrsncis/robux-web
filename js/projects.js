(function () {
  const grid = document.getElementById('all-projects');
  const filters = document.querySelectorAll('.filter-btn');
  if (!grid) return;

  const allProjects = window.PORTFOLIO_DATA.projects;

  function render(category) {
    const visible = category === 'All' ? allProjects : allProjects.filter((item) => item.category === category);
    grid.innerHTML = visible.map(createProjectCard).join('');
  }

  filters.forEach((btn) => {
    btn.addEventListener('click', function () {
      filters.forEach((f) => f.classList.remove('active'));
      this.classList.add('active');
      render(this.dataset.filter);
    });
  });

  render('All');
})();
