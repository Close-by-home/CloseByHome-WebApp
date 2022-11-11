import { useState, useEffect } from 'react';

import agenda from '../../../Data/agenda';

import Calendario from '../../ComponentsBibliotecas/calendario/Index';
import TitutloTelas from '../../componentsReutilizacao/tituloTelas/Index';
import InfosAgenda from '../../componentsReutilizacao/infosAgenda/Index';
import BotaoCheio from '../../componentsReutilizacao/botaoCheio/Botao';

import style from './Style.module.css'

const Agenda = (props) => {
  const [servicos, setServicos] = useState([]);
  const [dia, setDia] = useState()

  useEffect(() => {
    setServicos(agenda.filter((serv) => {
      return serv.dia === dia
    }))
  }, [dia])

  function pegarDia(dia) {
    setDia(dia)
  }

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
          <p>Agende um serviço para este dia</p>
          <BotaoCheio text="Agendar Serviço" cor="azul" funcao={ () => props.pagina('servico') } estilo={{fontSize: "1.3rem"}}/>
        </div>
      )
    }
  }

  return(
    <main className={ style.mainAgenda }>
      <TitutloTelas texto="Veja sua" destaque="agenda!" usuario="Usuario" pagina={ props.pagina }/>
      <div className={ style.paginaAgenda }>
        <div className={style.calendario}>
          <Calendario dia={pegarDia}/>
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