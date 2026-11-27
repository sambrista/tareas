import { contarPorPrioridad } from './estadisticas';
import type { Tarea } from '../types/Tarea';

describe('contarPorPrioridad', () => {
  it('devuelve ceros si no hay tareas', () => {
    expect(contarPorPrioridad([])).toEqual({ baja: 0, media: 0, alta: 0 });
  });

  it('cuenta las tareas de cada prioridad', () => {
    const tareas: Tarea[] = [
      { id: 1, titulo: 'a', prioridad: 'alta', completada: false },
      { id: 2, titulo: 'b', prioridad: 'alta', completada: true },
      { id: 3, titulo: 'c', prioridad: 'baja', completada: false },
    ];

    expect(contarPorPrioridad(tareas)).toEqual({ baja: 1, media: 0, alta: 2 });
  });
});
