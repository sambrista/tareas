interface ResumenProps {
  total: number;
  completadas: number;
}

function Resumen({ total, completadas }: ResumenProps) {
  return (
    <p>
      {completadas} de {total} tareas completadas
      {total > 0 && completadas === total && ' 🎉'}
    </p>
  );
}

export default Resumen;
