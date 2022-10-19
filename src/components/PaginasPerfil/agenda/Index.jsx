import { useState, useEffect } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import agenda from '../../../Data/agenda';

import TitutloTelas from '../../componentsReutilizacao/tituloTelas/Index';
import InfosAgenda from '../../componentsReutilizacao/infosAgenda/Index';
import BotaoCheio from '../../componentsReutilizacao/botaoCheio/Botao';

import style from './Style.module.css'

const Agenda = (props) => {
  const [data, setData] = useState()
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    let dia = new Date(data)
    let diaAtual = dia.getDate() + "/" + dia.getMonth();
    console.log(diaAtual)
    setServicos(agenda.filter((trab) => {
      return trab.dia === diaAtual
    }))
  }, [data])

  function agendar(novaData) {
    setData(novaData);
    let dataFormatada = new Date(novaData);
    console.log(dataFormatada.getDate() + "/" + dataFormatada.getMonth())
  }

  function desativarDias(desativaData) {
    return desativaData.getDay() === 0 || desativaData.getDay() === 6;
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CalendarPicker
              className="calendariopicker"
              hintText="Weekends Disabled"
              shouldDisableDate={(data) => desativarDias(new Date(data))}
              date={data}
              onChange={(novaData) => agendar(novaData)}  
            />
          </LocalizationProvider>
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