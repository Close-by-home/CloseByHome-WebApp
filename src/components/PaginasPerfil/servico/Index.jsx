import TituloTelas from '../../componentsReutilizacao/tituloTelas/Index';

import style from './Style.module.css'; 

const Servico = () => {
  return(
    <main className={ style.mainServico }>
      <TituloTelas texto="Procure um" destaque="Serviço!" usuario="Usuario"/>
      Contradar servico
      <div className={ style.exemplo }>
        <div className={ style.div1 }></div>
        <div className={ style.div2 }></div>
        <div className={ style.div3 }></div>
      </div>
    </main>
  )
}

export default Servico;