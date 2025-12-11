document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('h1');
    const text = title.textContent;
    title.innerHTML = '';
    text.split('').forEach(letter => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.classList.add('letter');
        
        // Añade la letra envuelta al h1
        title.appendChild(span);
    });
});
// 1. Aviso de que el archivo JS se ha cargado
console.log("El archivo JavaScript se ha cargado correctamente.");

document.addEventListener('DOMContentLoaded', function() {
    // 2. Aviso de que el HTML ya está listo
    console.log("El HTML ha cargado.");

    const imagen = document.querySelector('#sobreMi img');

    if (imagen) {
        // 3. ¡Éxito! Encontró la imagen
        console.log("Todo debería funcionar.");
        
        imagen.addEventListener('mouseenter', function() {
            console.log("Has pasado el ratón.");
            this.classList.add('visto');
        });
    } else {
        // 4. Error: No encuentra la imagen
        console.error("ERROR: No encuentro '#sobreMi img'. Revisa tu HTML.");
        console.log("Esto es lo que encuentro en el body:", document.body.innerHTML);
    }
});