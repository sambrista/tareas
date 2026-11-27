import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  afterEach(() => {
    vi.restoreAllMocks(); // deshace los espías (por ejemplo, el de window.confirm)
  });

  it('muestra las tareas iniciales', () => {
    render(<App />);

    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('borra una tarea', async () => {
    render(<App />);

    await userEvent.click(screen.getByRole('button', { name: 'Borrar Hacer la compra' }));

    expect(screen.queryByText('Hacer la compra')).not.toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

  it('marca una tarea como completada y actualiza el resumen', async () => {
    render(<App />);

    expect(screen.getByText(/1 de 3 tareas completadas/i)).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Salir a correr'));

    expect(screen.getByText(/2 de 3 tareas completadas/i)).toBeInTheDocument();
  });

  it('borra las completadas si el usuario confirma', async () => {
    vi.spyOn(window, 'confirm').mockReturnValue(true);
    render(<App />);

    await userEvent.click(screen.getByRole('button', { name: 'Borrar completadas' }));

    expect(screen.queryByText('Hacer la compra')).not.toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

  it('no borra nada si el usuario cancela la confirmación', async () => {
    vi.spyOn(window, 'confirm').mockReturnValue(false);
    render(<App />);

    await userEvent.click(screen.getByRole('button', { name: 'Borrar completadas' }));

    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });
});
