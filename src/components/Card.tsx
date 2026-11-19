import type { ReactNode } from 'react';

interface CardProps {
  titulo?: string;
  children: ReactNode;
}

function Card({ titulo, children }: CardProps) {
  return (
    <section className="card">
      {titulo && <h2>{titulo}</h2>}
      {children}
    </section>
  );
}

export default Card;
