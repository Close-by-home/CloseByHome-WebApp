import TituloTelas from '../../componentsReutilizacao/tituloTelas/Index';

import style from './Style.module.css'; 

const Servico = () => {
  return(
    <main className={ style.mainServico }>
      <TituloTelas texto="Procure um" destaque="Serviço!" usuario="Usuario"/>
      Contradar servico
    </main>
  )
}

export default Servico;