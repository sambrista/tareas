import { render, screen } from '@testing-library/react';
import type { Tarea } from '../types/Tarea';
import userEvent from '@testing-library/user-event';
import TareaItem from './TareaItem';

const tarea: Tarea = { id: 7, titulo: 'Estudiar React', prioridad: 'alta', completada: false };

describe('TareaItem', () => {
  it('muestra el título y la prioridad', () => {
    render(<TareaItem tarea={tarea} onToggle={() => {}} onDelete={() => {}} />);

    expect(screen.getByText(/Estudiar React/)).toBeInTheDocument();
    expect(screen.getByText(/alta/)).toBeInTheDocument();
  });

  it('refleja en el checkbox si la tarea está completada', () => {
    render(
      <TareaItem tarea={{ ...tarea, completada: true }} onToggle={() => {}} onDelete={() => {}} />,
    );
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('llama a onToggle con el id al marcar el checkbox', async () => {
    const onToggle = vi.fn();
    render(<TareaItem tarea={tarea} onDelete={() => {}} onToggle={onToggle} />);

    await userEvent.click(screen.getByRole('checkbox'));

    expect(onToggle).toHaveBeenCalledWith(7);
  });

  it('llama a onDelete con el id al pulsar el botón de borrar', async () => {
    const onDelete = vi.fn();
    render(<TareaItem tarea={tarea} onDelete={onDelete} onToggle={() => {}} />);

    await userEvent.click(screen.getByRole('button', { name: /borrar estudiar react/i }));

    expect(onDelete).toHaveBeenCalledWith(7);
  });
});
