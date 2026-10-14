(() => {
  'use strict';
  const projects = window.PORTFOLIO_PROJECTS;
  const list = document.querySelector('#projects');
  const search = document.querySelector('#search');
  const dialog = document.querySelector('#project-dialog');
  let activeFilter = 'Featured';
  let lastTrigger;
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  const arrowIcon = () => '<svg class="arrow-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 18 18 6M6 6h12v12"/></svg>';

  function render() {
    const query = search.value.trim().toLowerCase();
    const filtered = projects.filter(project => {
      const categoryMatch = activeFilter === 'All' || (activeFilter === 'Featured' ? project.featured : project.category.includes(activeFilter));
      const searchable = [project.title,project.description,project.overview,...project.tech,...project.category].join(' ').toLowerCase();
      return categoryMatch && searchable.includes(query);
    });
    list.innerHTML = filtered.map(project => `
      <article class="project-row">
        <div><h3 class="project-title"><button data-project="${escape(project.id)}" aria-haspopup="dialog">${escape(project.title)}</button></h3><p class="project-desc">${escape(project.description)}</p></div>
        <div class="project-meta"><div class="project-tech">${project.tech.map(escape).join(' / ')}</div><span class="project-state">${escape(project.status)}</span>${project.repo ? `<a class="project-repo" href="${escape(project.repo)}" target="_blank" rel="noopener noreferrer" aria-label="${escape(project.title)} on GitHub">GitHub ${arrowIcon()}</a>` : ''}</div>
        <span class="project-arrow" aria-hidden="true">${arrowIcon()}</span>
      </article>`).join('');
    document.querySelector('#empty').hidden = filtered.length > 0;
    document.querySelector('#result-count').textContent = query ? `${filtered.length ? 'Projects matching' : 'No projects match'} “${search.value.trim()}”` : activeFilter === 'Featured' ? 'Selected projects' : activeFilter === 'All' ? 'Project collection' : `${activeFilter} projects`;
    document.querySelector('#show-all').hidden = activeFilter !== 'Featured';
    document.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.filter === activeFilter)));
  }
  function setFilter(filter) { activeFilter=filter; render(); }
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click',() => setFilter(button.dataset.filter)));
  document.querySelector('#show-all').addEventListener('click',() => {setFilter('All');document.querySelector('[data-filter="All"]').focus();});
  document.querySelector('#reset').addEventListener('click',() => {search.value='';setFilter('All');search.focus();});
  search.addEventListener('input',() => {if(search.value.trim() && activeFilter === 'Featured') activeFilter='All';render();});
  list.addEventListener('click',event => {
    const trigger=event.target.closest('[data-project]');
    if(!trigger) return;
    const project=projects.find(project => project.id === trigger.dataset.project);
    lastTrigger=trigger;
    const sourceLinks=[...(project.repo ? [{label:project.repoLabel || 'View repository',url:project.repo}] : []),...(project.relatedLinks || [])];
    document.querySelector('#dialog-content').innerHTML=`<p class="eyebrow">${escape(project.status)}</p><h2 id="dialog-title">${escape(project.title)}</h2><div class="dialog-tags">${project.tech.map(tech => `<span>${escape(tech)}</span>`).join('')}</div><p>${escape(project.overview)}</p><h3>What’s inside</h3><ul>${project.features.map(feature => `<li>${escape(feature)}</li>`).join('')}</ul><h3>What I’m learning</h3><p>${escape(project.takeaway)}</p><p class="dialog-note">${escape(project.note)}</p>${sourceLinks.length ? `<div class="dialog-links">${sourceLinks.map(link => `<a class="text-link" href="${escape(link.url)}" target="_blank" rel="noopener noreferrer">${escape(link.label)} ${arrowIcon()}</a>`).join('')}</div>` : ''}`;
    dialog.showModal();dialog.scrollTop=0;document.body.classList.add('dialog-open');
    document.querySelector('#close-dialog').focus();
  });
  document.querySelector('#close-dialog').addEventListener('click',() => dialog.close());
  dialog.addEventListener('click',event => {if(event.target === dialog) {const bounds=dialog.getBoundingClientRect();if(event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();}});
  dialog.addEventListener('close',() => {document.body.classList.remove('dialog-open');if(lastTrigger?.isConnected)lastTrigger.focus();});

  const themeButton=document.querySelector('#theme');
  let storedTheme;
  try {storedTheme=localStorage.getItem('portfolio-theme');} catch {}
  function applyTheme(dark) {document.body.classList.toggle('dark',dark);themeButton.setAttribute('aria-label',`Switch to ${dark ? 'light' : 'dark'} theme`);document.querySelector('meta[name="theme-color"]').setAttribute('content',dark ? '#191e1b' : '#f7f7f2');}
  const systemTheme=window.matchMedia('(prefers-color-scheme: dark)');
  applyTheme(storedTheme ? storedTheme === 'dark' : systemTheme.matches);
  themeButton.addEventListener('click',() => {const dark=!document.body.classList.contains('dark');applyTheme(dark);storedTheme=dark ? 'dark' : 'light';try {localStorage.setItem('portfolio-theme',storedTheme);}catch {}});
  systemTheme.addEventListener('change',event => {if(!storedTheme)applyTheme(event.matches);});
  document.querySelector('#copy-email').addEventListener('click',async () => {
    const status=document.querySelector('#copy-status');
    try {await navigator.clipboard.writeText('samgeyser@gmail.com');status.textContent='Copied.';setTimeout(() => status.textContent='',3000);}catch {status.textContent='Email: samgeyser@gmail.com';}
  });
  document.querySelector('#year').textContent=new Date().getFullYear();

  const skills=document.querySelector('.skills');
  const skillsTrack=skills.querySelector('.skills-track');
  const skillsSet=skills.querySelector('.skills-set');
  const skillsClone=skillsSet.cloneNode(true);
  skillsClone.setAttribute('aria-hidden','true');
  skillsClone.inert=true;
  skillsTrack.append(skillsClone);
  skills.classList.add('skills-scrolling');
  // Keep the two identical sets moving at about 28 pixels per second.
  skillsTrack.style.setProperty('--skills-duration',`${(skillsSet.offsetWidth+12)/28}s`);

  const portraitFrame=document.querySelector('.hero-portraits');
  const portraits=Array.from(portraitFrame.querySelectorAll('.portrait-slide'));
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  let portraitIndex=0;
  let portraitTimer;
  let portraitReady=false;
  let remainingPortraitTime=5000;
  let portraitDeadline=0;
  const canRotatePortraits=() => portraitReady && !reducedMotion.matches && !document.hidden && !dialog.open && !portraitFrame.matches(':hover, :focus-within');
  function schedulePortrait() {
    if(portraitTimer || !canRotatePortraits()) return;
    portraitDeadline=performance.now()+remainingPortraitTime;
    portraitTimer=setTimeout(() => {
      portraitTimer=undefined;
      portraits[portraitIndex].classList.remove('is-active');
      portraits[portraitIndex].setAttribute('aria-hidden','true');
      portraitIndex=(portraitIndex+1)%portraits.length;
      portraits[portraitIndex].classList.add('is-active');
      portraits[portraitIndex].setAttribute('aria-hidden','false');
      // Allow the 700ms focus transition, then five seconds fully in focus.
      remainingPortraitTime=5700;
      schedulePortrait();
    },remainingPortraitTime);
  }
  function pausePortrait() {
    if(!portraitTimer) return;
    remainingPortraitTime=Math.max(0,portraitDeadline-performance.now());
    clearTimeout(portraitTimer);portraitTimer=undefined;
  }
  portraitFrame.addEventListener('mouseenter',pausePortrait);
  portraitFrame.addEventListener('mouseleave',schedulePortrait);
  portraitFrame.addEventListener('focusin',pausePortrait);
  portraitFrame.addEventListener('focusout',() => requestAnimationFrame(schedulePortrait));
  document.addEventListener('visibilitychange',() => document.hidden ? pausePortrait() : schedulePortrait());
  reducedMotion.addEventListener('change',() => reducedMotion.matches ? pausePortrait() : schedulePortrait());
  dialog.addEventListener('close',schedulePortrait);
  list.addEventListener('click',() => {if(dialog.open)pausePortrait();});
  Promise.all(portraits.map(slide => slide.querySelector('img').decode().catch(() => {}))).then(() => {
    portraitReady=true;schedulePortrait();
  });
  render();
})();
