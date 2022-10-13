import TitutloTelas from '../../componentsReutilizacao/tituloTelas/Index';

import style from './Style.module.css';

const Historico = () => {
  return(
    <main className={ style.mainHistorico }>
      <TitutloTelas texto="Historico de" destaque="Serviços!" usuario="Usuario"/>
      Historicozinho
    </main>
  )
}

export default Historico;