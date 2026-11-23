import { render, screen } from '@testing-library/react';
import type { Tarea } from '../types/Tarea';
import TareaItem from './TareaItem';

const tarea: Tarea = { id: 7, titulo: 'Estudiar React', prioridad: 'alta', completada: false };

describe('TareaItem', () => {
  it('muestra el título y la prioridad', () => {
    render(<TareaItem tarea={tarea} />);

    expect(screen.getByText(/Estudiar React/)).toBeInTheDocument();
    expect(screen.getByText(/alta/)).toBeInTheDocument();
  });
});
