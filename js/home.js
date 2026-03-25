(function () {
  const grid = document.getElementById('featured-projects');
  if (!grid) return;
  const projects = window.PORTFOLIO_DATA.projects.slice(0, 3);
  grid.innerHTML = projects.map(createProjectCard).join('');
})();
