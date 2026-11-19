import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div className="app">
      <Header titulo="Mis tareas" subtitulo="Organiza tu día con React" />

      <Card titulo={'Nueva tarea'}>
        <p>Aquí irá el formulario</p>
      </Card>

      <Card titulo="Listado">
        <p>Aquí irá la lista</p>
      </Card>
    </div>
  );
}

export default App;
