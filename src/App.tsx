import Header from './components/Header';
import Card from './components/Card';
import type { Tarea } from './types/Tarea';
import TareaList from './components/TareaList';
import { useState } from 'react';

const TAREAS_INICIALES: Tarea[] = [
  { id: 1, titulo: 'Repasar los apuntes de React', prioridad: 'alta', completada: false },
  { id: 2, titulo: 'Hacer la compra', prioridad: 'media', completada: true },
  { id: 3, titulo: 'Salir a correr', prioridad: 'baja', completada: false },
];

function App() {
  const [tareas, setTareas] = useState<Tarea[]>(TAREAS_INICIALES);

  function alternarTarea(id: number) {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea,
      ),
    );
  }

  function borrarTarea(id: number) {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  }

  return (
    <div className="app">
      <Header titulo="Mis tareas" subtitulo="Organiza tu día con React" />

      <Card titulo={'Nueva tarea'}>
        <p>Aquí irá el formulario</p>
      </Card>

      <Card titulo="Listado">
        <TareaList tareas={tareas} onDelete={borrarTarea} onToggle={alternarTarea} />
      </Card>
    </div>
  );
}

export default App;
