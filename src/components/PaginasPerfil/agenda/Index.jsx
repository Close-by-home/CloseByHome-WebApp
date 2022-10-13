import TitutloTelas from '../../componentsReutilizacao/tituloTelas/Index';

import style from './Style.module.css'

const Agenda = () => {
  return(
    <main className={ style.mainAgenda }>
      <TitutloTelas texto="Veja sua" destaque="agenda!" usuario="Usuario"/>
      Agenda
    </main>
  )
}

export default Agenda;