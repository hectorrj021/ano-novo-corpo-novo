/* scripts.js */
function copyLink() {
  const url = window.location.href.replace(/index\.html$/, '');
  navigator.clipboard.writeText(url).then(()=>{
    showToast('Link copiado! Agora é só colar onde quiser.');
  }).catch(()=>{
    showToast('Não foi possível copiar. Selecione e copie manualmente.');
  });
}

function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.display = 'block';
  setTimeout(()=> t.style.display = 'none', 2400);
}

// simple: ensure links to root work when hosted as subpath
document.addEventListener('DOMContentLoaded', ()=>{
  const shareBtns = document.querySelectorAll('[data-copy]');
  shareBtns.forEach(b=> b.addEventListener('click', copyLink));
});
