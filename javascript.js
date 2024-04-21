const jours = document.getElementById('jours');
const heures = document.getElementById('heures');
const minutes = document.getElementById('minutes');
const secondes = document.getElementById('secondes');
const boy = document.getElementById('boy');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`decembre 01 ${2024 + 1} 00:00:00`);


function updateBoy() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const j = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  
  jours.innerHTML = j;
  heures.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  secondes.innerHTML = s < 10 ? '0' + s : s;
}


setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

setInterval(updateBoy, 1000);
