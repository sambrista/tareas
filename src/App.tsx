// src/App.tsx
function App() {
  const hoy = new Date().toLocaleDateString('es-ES');

  return (
    <div className="app">
      <h1>Mis tareas</h1>
      <p>Hoy es {hoy}</p>
    </div>
  );
}

export default App;
