import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('muestra el título recibido por props', () => {
    render(<Header titulo="Mis tareas" />);

    expect(screen.getByRole('heading', { name: 'Mis tareas' })).toBeInTheDocument();
  });

  it('muestra el subtítulo si se recibe', () => {
    render(<Header titulo="Mis tareas" subtitulo="Organiza tu dia" />);

    expect(screen.getByText('Organiza tu dia')).toBeInTheDocument();
  });

  it('no pinta ningún subtítulo si no se recibe', () => {
    render(<Header titulo="Mis tareas" />);

    expect(screen.queryByRole('paragraph')).not.toBeInTheDocument();
  });
});
