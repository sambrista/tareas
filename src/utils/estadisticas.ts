import type { Prioridad, Tarea } from '../types/Tarea';

/**
 * Cuenta cuántas tareas hay de cada prioridad.
 * @param tareas Lista de tareas a contar
 * @returns Objeto con el número de tareas de cada prioridad
 */
export function contarPorPrioridad(tareas: Tarea[]): Record<Prioridad, number> {
  return tareas.reduce<Record<Prioridad, number>>(
    (acumulado, tarea) => ({ ...acumulado, [tarea.prioridad]: acumulado[tarea.prioridad] + 1 }),
    { baja: 0, media: 0, alta: 0 },
  );
}
