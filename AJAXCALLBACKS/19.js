$(document).ready(function() {
    var taskList = $('#task-list');

    function loadTasks() {
        $.ajax({
            url: 'tasks.json', // Reemplaza 'tasks.json' con la ruta de tu archivo de tareas
            method: 'GET',
            dataType: 'json',
            success: function(response) {
                displayTasks(response);
            },
            error: function(xhr, status, error) {
                console.error('Error al cargar las tareas:', error);
            }
        });
    }

    // Función para mostrar las tareas en la página
    function displayTasks(tasks) {
        taskList.empty(); // Limpiar la lista de tareas antes de mostrar las nuevas

        tasks.forEach(function(task) {
            taskList.append('<div class="task">' + task.title + '</div>');
        });
    }

    // Cargar las tareas al cargar la página
    loadTasks();

    // Manejar la presentación del formulario para agregar tareas
    $('#add-task-form').submit(function(event) {
        event.preventDefault(); // Evitar que se recargue la página al enviar el formulario

        var newTaskTitle = $('#task-input').val();
        if (newTaskTitle.trim() !== '') {
            taskList.append('<div class="task">' + newTaskTitle + '</div>');
            $('#task-input').val(''); // Limpiar el campo de entrada después de agregar la tarea
        }
    });
});
