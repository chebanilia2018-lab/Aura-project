// burger
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (burgerBtn && mobileMenu) {
  burgerBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('mobile--open');
    burgerBtn.setAttribute('aria-expanded', String(isOpen));
  });
}

// demo timer (не обязателен, но пусть работает)
const tH = document.getElementById('tH');
const tM = document.getElementById('tM');
const tS = document.getElementById('tS');

if (tH && tM && tS) {
  let total = (parseInt(tH.textContent, 10) || 0) * 3600 +
              (parseInt(tM.textContent, 10) || 0) * 60 +
              (parseInt(tS.textContent, 10) || 0);

  setInterval(() => {
    if (total <= 0) return;
    total--;

    const hh = String(Math.floor(total / 3600)).padStart(2, '0');
    const mm = String(Math.floor((total % 3600) / 60)).padStart(2, '0');
    const ss = String(total % 60).padStart(2, '0');

    tH.textContent = hh;
    tM.textContent = mm;
    tS.textContent = ss;
  }, 1000);
}
