import PrimeraCaja from './PrimeraCaja'
import Segundacaja from './Segundacaja';

function Contenedor(){
    return(
        <div className="contenedor">
            <PrimeraCaja />
            <Segundacaja />
        </div>
    )
}

export default Contenedor;