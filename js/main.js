function createProjectCard(project) {
  return `
    <article class="card">
      <img src="${project.image}" alt="${project.title}" loading="lazy" />
      <div class="card-content">
        <h3>${project.title}</h3>
        <p class="small">${project.description}</p>
        <p class="small muted">${project.tech.join(', ')}</p>
      </div>
    </article>
  `;
}
