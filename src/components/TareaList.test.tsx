import { render, screen } from '@testing-library/react';
import TareaList from './TareaList';
import type { Tarea } from '../types/Tarea';

const tareas: Tarea[] = [
  { id: 1, titulo: 'Tarea uno', prioridad: 'baja', completada: false },
  { id: 2, titulo: 'Tarea dos', prioridad: 'media', completada: true },
];

describe('TareaList', () => {
  it('renderiza un elemento por cada tarea', () => {
    render(<TareaList tareas={tareas} onToggle={() => {}} onDelete={() => {}} />);

    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});
