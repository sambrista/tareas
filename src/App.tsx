import Header from './components/Header';

// src/App.tsx
function App() {
  return (
    <div className="app">
      <Header titulo={'Mis tareas'} subtitulo={'Organiza tu día con React'} />
      <Header titulo={'Mis cosas que hacer'} />
    </div>
  );
}

export default App;
