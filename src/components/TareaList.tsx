import type { Tarea } from '../types/Tarea';
import TareaItem from './TareaItem';

interface TareaListProps {
  tareas: Tarea[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TareaList({ tareas, onToggle, onDelete }: TareaListProps) {
  return (
    <ul>
      {tareas.map((tarea) => (
        <TareaItem key={tarea.id} tarea={tarea} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TareaList;
