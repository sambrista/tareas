import type { Tarea } from '../types/Tarea';

interface TareaItemProps {
  tarea: Tarea;
}

function TareaItem({ tarea }: TareaItemProps) {
  return (
    <li>
      {tarea.titulo} ({tarea.prioridad})
    </li>
  );
}

export default TareaItem;
