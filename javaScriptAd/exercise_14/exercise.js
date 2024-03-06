const notes = [
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: false,
      },
    ],
  },
];

function obtenerTodosNoCompletados(notes) {
  let todosNoCompletados = [];

  // Iterar sobre cada nota
  notes.forEach(nota => {
    // Filtrar los todos no completados para la nota actual
    const todosNoCompletadosNota = nota.todos.filter(todo => !todo.done);

    // Si hay algunos todos no completados, agregar la información a la lista
    if (todosNoCompletadosNota.length > 0) {
      todosNoCompletados.push({
        id: nota.id,
        description: nota.description,
        todos: todosNoCompletadosNota.map(todo => ({
          id: todo.id,
          name: todo.name,
        })),
      });
    }
  });

  return todosNoCompletados;
}

const todosNoCompletadosList = obtenerTodosNoCompletados(notes);

todosNoCompletadosList.forEach(nota => {
  console.log(`Nota ID: ${nota.id}, Descripción: '${nota.description}'`);
  console.log('Todos No Completados:');
  nota.todos.forEach(todo => {
    console.log(`  ID: ${todo.id}, Nombre: '${todo.name}'`);
  });
  console.log();
});




