//7
function cambiarColor() {
    const colorSelect = document.getElementById('colorSelect');
    const selectedColor = colorSelect.value;
    const elemento = document.getElementById('elemento');
    elemento.style.backgroundColor = selectedColor;
  }
  
//8
function validarFormulario() {
    const nombre=document.getElementById('nombre').value.trim();
    const apellido=document.getElementById('apellido').value.trim();
    const email=document.getElementById('email').value.trim();
    const telefono=document.getElementById('telefono').value.trim();
    const pais=document.getElementById('pais').value.trim();
    const mensaje=document.getElementById('mensaje').value.trim();
    const mensajeValidacion=document.getElementById('mensajeValidacion');
  
    mensajeValidacion.innerHTML= '';
  
    if (nombre=== '' ||apellido === '' || email === '' || telefono === ''|| pais === '' || mensaje === '') {
        mensajeValidacion.classList.add('error');
        mensajeValidacion.innerText = 'Es necesario que complete todos los campos.';
        return false;
    }
    if (!validarEmail(email)) {
        mensajeValidacion.classList.add('error');
        mensajeValidacion.innerText='Ingrese un email válido.';
        return false;
    }
    return true;
  }
function validarEmail(email) {
    // Expresión regular para validar un email
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return regexEmail.test(email);}

//9
function agregarTarea() {
    var tarea = document.getElementById('taskInput').value.trim();
    if (tarea !== '') {
        var lista = document.getElementById('taskList');
        var nuevaTarea = document.createElement('li');
        nuevaTarea.className = 'list-group-item d-flex justify-content-between align-items-center';
        nuevaTarea.innerHTML = `
            <span>${tarea}</span>
            <div>
                <button class="btn btn-danger btn-sm" onclick="eliminarElemento(this)">Eliminar Elemento</button>
            </div>
        `;
        lista.appendChild(nuevaTarea);
        document.getElementById('taskInput').value = '';
    }
}

function eliminarElemento(btnEliminar) {
    var tarea = btnEliminar.parentElement.parentElement;
    tarea.remove();
}

//10
function actualizarReloj() {
    const ahora=new Date();
  
    const horas=ahora.getHours().toString().padStart(2, '0');
    const minutos=ahora.getMinutes().toString().padStart(2, '0');
    const segundos=ahora.getSeconds().toString().padStart(2, '0');
  
    document.getElementById('hour').innerText=horas;
    document.getElementById('minute').innerText=minutos;
    document.getElementById('second').innerText=segundos;
  }
  // Actualizar el reloj 
  setInterval(actualizarReloj, 1000);
  actualizarReloj();
  

