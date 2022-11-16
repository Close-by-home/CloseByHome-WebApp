import { useState, useEffect } from 'react';

import agenda from '../../../Data/agenda';

import TitutloTelas from '../../componentsReutilizacao/tituloTelas/Index';
import InfosAgenda from '../../componentsReutilizacao/infosAgenda/Index';
import BotaoCheio from '../../componentsReutilizacao/botaoCheio/Botao';
import Calendario from '../../ComponentsBibliotecas/calendario/Index';

import style from './Style.module.css'

const Agenda = (props) => {
  const [data, setData] = useState()
  const [servicos, setServicos] = useState([]);

  function diasTrab(dataServ) {
    if(dataServ.length > 0) {
      return servicos.map((serv) => {
        return(
          <InfosAgenda 
            key={ serv.id }
            nome={ serv.nome } 
            horario={ serv.horario }  
            servico={ serv.servico } 
            contato={ serv.contato }
          />
        )
      }) 
    } else {
      return(
        <div className={ style.nadaAgendado }>
          <p>Você não tem nenhum serviço para este dia!</p>
        </div>
      )
    }
  }

  return(
    <main className={ style.mainAgenda }>
      <TitutloTelas texto="Veja sua" destaque="agenda!" usuario="Usuario" pagina={ props.pagina }/>
      <div className={ style.paginaAgenda }>
        <div className={style.calendario}>
         <Calendario/>
        </div>
        <div className={ style.agendados }>
          <fieldset className={ style.servicosAgendados }>
            <legend>Serviços Agendados</legend>
            { diasTrab(servicos) }
          </fieldset>
        </div>
      </div>
    </main>
  )
}

export default Agenda;