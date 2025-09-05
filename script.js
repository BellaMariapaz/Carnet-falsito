function actualizarReloj() {
    const reloj = document.getElementById('reloj');
    const ahora = new Date();
    const hora = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    reloj.textContent = `${hora}:${minutos}:${segundos}`;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();
