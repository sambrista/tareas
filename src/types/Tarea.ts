export type Prioridad = 'baja' | 'media' | 'alta';

export interface Tarea {
  id: number;
  titulo: string;
  prioridad: Prioridad;
  completada: boolean;
}
