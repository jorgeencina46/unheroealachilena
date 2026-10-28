document.addEventListener('DOMContentLoaded', () => {
    const elementoNumero = document.getElementById('numero-visitas');

    fetch('https://tallywire.cronpulse.workers.dev/hit/unheroealachilena/visitas')
        .then(response => response.json())
        .then(data => {
            elementoNumero.textContent = data.value;
        })
        .catch(error => {
            console.error('Error al cargar el contador:', error);
            elementoNumero.textContent = "---"; 
        });
});