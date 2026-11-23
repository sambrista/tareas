import Header from './components/Header';
import Card from './components/Card';
import type { Tarea } from './types/Tarea';
import TareaList from './components/TareaList';

const TAREAS_INICIALES: Tarea[] = [
  { id: 1, titulo: 'Repasar los apuntes de React', prioridad: 'alta', completada: false },
  { id: 2, titulo: 'Hacer la compra', prioridad: 'media', completada: true },
  { id: 3, titulo: 'Salir a correr', prioridad: 'baja', completada: false },
];

function App() {
  const tareas = TAREAS_INICIALES;

  return (
    <div className="app">
      <Header titulo="Mis tareas" subtitulo="Organiza tu día con React" />

      <Card titulo={'Nueva tarea'}>
        <p>Aquí irá el formulario</p>
      </Card>

      <Card titulo="Listado">
        <TareaList tareas={tareas} />
      </Card>
    </div>
  );
}

export default App;
