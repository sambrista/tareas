import type { Tarea } from '../types/Tarea';
import TareaItem from './TareaItem';

interface TareaListProps {
  tareas: Tarea[];
}

function TareaList({ tareas }: TareaListProps) {
  return (
    <ul>
      {tareas.map((tarea) => (
        <TareaItem key={tarea.id} tarea={tarea} />
      ))}
    </ul>
  );
}

export default TareaList;
