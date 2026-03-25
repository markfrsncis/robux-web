(function () {
  const skillsEl = document.getElementById('skills-list');
  const timelineEl = document.getElementById('timeline-list');
  if (skillsEl) {
    skillsEl.innerHTML = window.PORTFOLIO_DATA.skills
      .map((skill) => `<li class="card-content" style="border:1px solid #e2e8f0;border-radius:8px;background:#fff;">${skill.name} — ${skill.value}%</li>`)
      .join('');
  }

  if (timelineEl) {
    timelineEl.innerHTML = window.PORTFOLIO_DATA.timeline
      .map(
        (item) => `
      <li class="card-content" style="border:1px solid #e2e8f0;border-radius:8px;background:#fff;margin-bottom:8px;">
        <p class="small muted" style="margin:0 0 6px;">${item.year}</p>
        <p style="margin:0 0 4px;font-weight:600;">${item.title}</p>
        <p class="small" style="margin:0;">${item.detail}</p>
      </li>
    `
      )
      .join('');
  }
})();
