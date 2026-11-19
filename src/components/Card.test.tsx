import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('pinta el contenido que lleva dentro (children)', () => {
    render(
      <Card>
        <p>Contenido de prueba</p>
      </Card>,
    );

    expect(screen.getByText('Contenido de prueba')).toBeInTheDocument();
  });
  it('muestra el título sólo si se recibe', () => {
    const { rerender } = render(<Card titulo="Listado">contenido</Card>);
    expect(screen.getByRole('heading', { name: 'Listado' })).toBeInTheDocument();
    rerender(<Card>contenido</Card>);
    expect(screen.queryByRole('heading', { name: 'Listado' })).not.toBeInTheDocument();
  });
});
