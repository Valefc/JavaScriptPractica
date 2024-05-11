$(document).ready(function() {
    var taskList = $('#task-list');

    function loadTasks() {
        $.ajax({
            url: 'tareas.json', // Reemplaza 'tasks.json' con la ruta de tu archivo de tareas
            method: 'GET',
            dataType: 'json',
            success: function(response) {
                displayTasks(response.tareas);
            },
            error: function(xhr, status, error) {
                console.error('Error al cargar las tareas:', error);
            }
        });
    }

    // Función para mostrar las tareas en la página
    function displayTasks(tasks) {
        taskList.empty(); 
        tasks.forEach(function(task) {
            taskList.append('<div class="task">' + task.descripcion + '</div>');
        });
    }

    // Cargar las tareas al cargar la página
    loadTasks();

    // Manejar la presentación del formulario para agregar tareas
    $('#add-task-form').submit(function(event) {
        event.preventDefault(); 

        var newTaskTitle = $('#task-input').val();
        if (newTaskTitle.trim() !== '') {
            taskList.append('<div class="task">' + newTaskTitle + '</div>');
            $('#task-input').val(''); 
        }
    });
});
