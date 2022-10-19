import TituloTelas from '../../componentsReutilizacao/tituloTelas/Index';

import style from './Style.module.css'; 

const Servico = (props) => {
  return(
    <main className={ style.mainServico }>
      <TituloTelas texto="Procure um" destaque="Serviço!" usuario="Usuario" pagina={ props.pagina }/>
      Contradar servico
    </main>
  )
}

export default Servico;