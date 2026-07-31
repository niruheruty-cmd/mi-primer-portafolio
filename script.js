// 1. Seleccionamos el botón
const botonColor = document.getElementById("boton-color");

// 2. Añadimos el escuchador de eventos para el clic
botonColor.addEventListener("click", function() {
    // Modificamos el color de fondo del cuerpo (body) de la página
    // Vamos a elegir un color al azar entre varios opciones elegantes
    const colores = ["#f0f2f5", "#ffe4e6", "#dcfce7", "#fef9c3", "#e0f2fe"];
    const colorAzar = colores[Math.floor(Math.random() * colores.length)];
    
    document.body.style.backgroundColor = colorAzar;
});
// 1. Seleccionamos el botón y la lista
const botonAgregar = document.getElementById("boton-agregar-hobby");
const listaHobbies = document.getElementById("lista-hobbies");

// 2. Escuchamos el clic del botón
botonAgregar.addEventListener("click", function() {
    // 3. Creamos un nuevo elemento de lista (<li>)
    const nuevoItem = document.createElement("li");
    
    // 4. Le asignamos un texto al nuevo hobby
    nuevoItem.textContent = "Aprender programacion 🤖";
    
    // 5. Lo metemos dentro de la lista (<ul>)
    listaHobbies.appendChild(nuevoItem);
});// 1. Seleccionar los elementos de la lista de tareas
const tareaInput = document.getElementById("nueva-tarea-input");
const botonAgregarTarea = document.getElementById("boton-agregar-tarea");
const listaTareas = document.getElementById("lista-tareas");

// 2. Función para agregar una tarea
botonAgregarTarea.addEventListener("click", function() {
    const textoTarea = tareaInput.value.trim(); // Obtenemos el texto sin espacios vacíos
    
    // Si el campo no está vacío
    if (textoTarea !== "") {
        // A) Crear el elemento <li> de la tarea
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = textoTarea;

        // B) Crear el botón de eliminar
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "btn-eliminar";
        
        // Evento para eliminar la tarea
        botonEliminar.addEventListener("click", function(event) {
            event.stopPropagation(); // Evita que se active el clic del <li>
            listaTareas.removeChild(nuevaTarea);
        });

        // Evento para marcar como completada (tachar)
        nuevaTarea.addEventListener("click", function() {
            nuevaTarea.classList.toggle("completada");
        });

        // C) Unir el botón al <li> y el <li> a la lista <ul>
        nuevaTarea.appendChild(botonEliminar);
        listaTareas.appendChild(nuevaTarea);

        // D) Limpiar el campo de texto
        tareaInput.value = "";
    } else {
        alert("Por favor, escribe una tarea antes de agregarla.");
    }
});
// 1. Esto simula un texto JSON crudo que acabamos de recibir de una API de películas
const respuestaServidorJSON = '{"titulo": "Spider-Man", "anio": 2021, "genero": "Accion"}';

console.log("1. Texto JSON crudo:", respuestaServidorJSON);

// 2. Convertimos el texto JSON a un Objeto real de JavaScript para poder usarlo
const peliculaObjeto = JSON.parse(respuestaServidorJSON);

console.log("2. Objeto de JavaScript convertido:", peliculaObjeto);

// 3. Ahora podemos acceder a sus propiedades normalmente usando el punto "."
console.log("Título de la película:", peliculaObjeto.titulo);
console.log("Año de estreno:", peliculaObjeto.anio);
// Función para pedir datos a un servidor de internet
async function pedirTareaServidor() {
    try {
        console.log("Pidiendo tarea al servidor en la nube...");
        
        // Hacemos el fetch a una URL que nos da una tarea aleatoria
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos/5"); 
        const tarea = await respuesta.json();
        
        console.log("¡Tarea recibida con éxito!");
        console.log("ID de la tarea:", tarea.id);
        console.log("Texto de la tarea:", tarea.title);
        console.log("¿Está completada?:", tarea.completed);
        
    } catch (error) {
        console.log("Hubo un error al conectar con el servidor:", error);
    }
}

// Llamamos a la función para que se ejecute
pedirTareaServidor();
// 1. Intentamos recuperar el nombre de usuario de LocalStorage
let usuario = localStorage.getItem("usuarioGuardado");

// 2. Evaluamos si el dato ya existe o no
if (usuario) {
    // Si ya existe, lo saludamos
    console.log("¡Bienvenido de vuelta, " + usuario + "! 👋");
} else {
    // Si no existe, simulamos que es su primera visita
    console.log("Es tu primera vez aquí. Guardando tu nombre de usuario...");
    
    // Guardamos el nombre en LocalStorage
    localStorage.setItem("usuarioGuardado", "Nil");
}