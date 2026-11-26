import type { Prioridad, Tarea } from '../types/Tarea';

import styles from './TareaItem.module.css';

interface TareaItemProps {
  tarea: Tarea;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const COLORES: Record<Prioridad, string> = {
  baja: '#16a34a',
  media: '#d97706',
  alta: '#dc2626',
};

function TareaItem({ tarea, onToggle, onDelete }: TareaItemProps) {
  const clases = tarea.completada ? `${styles.item} ${styles.completada}` : styles.item;
  return (
    <li className={clases}>
      <label className={styles.titulo}>
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => {
            onToggle(tarea.id);
          }}
        />
        <span>{tarea.titulo}</span>
      </label>
      <span className={styles.prioridad} style={{ backgroundColor: COLORES[tarea.prioridad] }}>
        {tarea.prioridad}
      </span>
      <button
        className={styles.borrar}
        aria-label={`Borrar ${tarea.titulo}`}
        onClick={() => onDelete(tarea.id)}
      >
        🗑️
      </button>
    </li>
  );
}

export default TareaItem;
