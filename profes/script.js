// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Obtener todos los botones que abren el modal
var buttons = document.getElementsByClassName("open-modal");

// Añadir evento de clic a cada botón para abrir el modal
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        var content = this.getAttribute("data-modal-content");
        document.getElementById("modal-text").innerText = content;
        modal.style.display = "block";
    };
}

// Cuando el usuario hace clic en <span> (x), cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario hace clic en cualquier lugar fuera del modal, lo cierra
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
