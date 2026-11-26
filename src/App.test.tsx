import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
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
});
