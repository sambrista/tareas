import type { Prioridad } from '../types/Tarea';

interface PendientesProps {
  porPrioridad: Record<Prioridad, number>;
}

function Pendientes({ porPrioridad }: PendientesProps) {
  return (
    <p>
      Pendientes: {porPrioridad.alta} alta · {porPrioridad.media} media · {porPrioridad.baja} baja
    </p>
  );
}

export default Pendientes;
