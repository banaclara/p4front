let clockBr = document.getElementById('clock-br');
let clockUk = document.getElementById('clock-uk');
let clockJp = document.getElementById('clock-jp');

function updateTime(id, timezone) {
  const time = new Date().toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: timezone,
  });

  id.innerText = `${time}`;
}

function updateClocks() {
  updateTime(clockBr, 'America/Sao_Paulo');
  updateTime(clockUk, 'Europe/London');
  updateTime(clockJp, 'Asia/Tokyo');
}

updateClocks();
setInterval(updateClocks, 1000);
