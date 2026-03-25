setActiveNav('about.html');

const skillsRoot = document.getElementById('skills');
const timelineRoot = document.getElementById('timeline');

if (skillsRoot) {
  skillsRoot.innerHTML = DATA.skills
    .map((s) => `<div class="glass timeline-item fade-in"><div style="display:flex;justify-content:space-between;"><strong>${s.name}</strong><span>${s.value}%</span></div><div class="progress"><span style="width:${s.value}%"></span></div></div>`)
    .join('');
}

if (timelineRoot) {
  timelineRoot.innerHTML = DATA.timeline
    .map((t) => `<div class="glass timeline-item fade-in"><small class="tag">${t.year}</small><h3>${t.title}</h3><p>${t.detail}</p></div>`)
    .join('');
}
