import './Header.css';

interface HeaderProps {
  titulo: string;
  subtitulo?: string;
}

function Header({ titulo, subtitulo }: HeaderProps) {
  return (
    <header className="header">
      <h1>{titulo}</h1>
      {subtitulo && <p>{subtitulo}</p>}
    </header>
  );
}

export default Header;
