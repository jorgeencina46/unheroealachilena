document.addEventListener('DOMContentLoaded', () => {
    const elementoNumero = document.getElementById('numero-visitas');

    // Usamos un servicio alternativo más estable (Tallywire)
    fetch('https://tallywire.cronpulse.workers.dev/hit/unheroealachilena/visitas')
        .then(response => response.json())
        .then(data => {
            // Este servicio devuelve el valor en la propiedad "value"
            elementoNumero.textContent = data.value;
        })
        .catch(error => {
            console.error('Error al cargar el contador:', error);
            // Si falla, mostramos un guion en vez de "???"
            elementoNumero.textContent = "---"; 
        });
});