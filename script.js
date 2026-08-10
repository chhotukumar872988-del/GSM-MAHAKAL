const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const data = gsmData();
document.title = `${data.brand} | Mobile Service`;
document.querySelector('.brand').textContent = `• ${data.brand}`;
document.getElementById('hero-eyebrow').textContent = data.eyebrow;
document.getElementById('hero-title').textContent = data.brand;
document.getElementById('hero-copy').textContent = data.hero;
document.getElementById('footer-brand').textContent = data.brand;
document.getElementById('footer-copy').textContent = data.footer;
document.getElementById('service-label').textContent = data.serviceLabel;
document.getElementById('service-title').textContent = data.serviceTitle;
document.getElementById('service-copy').textContent = data.serviceCopy;
[['whatsapp-link',data.whatsapp],['telegram-link',data.telegram],['youtube-link',data.youtube],['service-link',data.whatsapp],['floating-whatsapp',data.whatsapp]].forEach(([id,url])=>document.getElementById(id).href=url);
document.getElementById('tool-list').innerHTML=data.tools.map((tool)=>`<article class="tool-card"><div class="tool-icon ${tool.tone}">${tool.icon}</div><h3>${tool.name}</h3><p>${tool.description}</p><a href="${tool.url}" class="download">Download <b>↓</b></a></article>`).join('');
document.getElementById('driver-list').innerHTML=data.drivers.map((driver)=>`<article class="driver-card"><div><span class="driver-mark">${driver.mark}</span><h3>${driver.name}</h3><p>${driver.description}</p></div><a href="${driver.url}" aria-label="Download ${driver.name}">↓</a></article>`).join('');
