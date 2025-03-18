import ContenedorVerde from './ContenedorVerde';
import ContenedorPurpura from './ContenedorPurpura';
import PrimeraCaja from './PrimeraCaja'
import SegundoContenedor from './SegundoContenedor';

function Contenedor() {
    return (
      <div className="contenedor">
        <PrimeraCaja />
        <main>
          <SegundoContenedor />
          <div className="columna-purpura">
            <ContenedorPurpura />
            <ContenedorPurpura />
          </div>
        </main>
        <ContenedorVerde />
      </div>
    )
  }

export default Contenedor;