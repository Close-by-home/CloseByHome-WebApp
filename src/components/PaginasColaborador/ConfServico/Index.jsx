import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import agenda from '../../../Data/agenda';


import TituloTelas from '../../componentsReutilizacao/tituloTelas/Index';
import InfosServicos from '../../componentsReutilizacao/infosServicos/Index';
import InfosAgenda from '../../componentsReutilizacao/infosAgenda/Index';

import style from './Style.module.css'; 

import naoEncontrado from '../../../assets/img/servicoNaoEncontrado.png';



const ConfServico = (props) => {
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

    function desativarDias(desativaData) {
        return desativaData.getDay() === 0 || desativaData.getDay() === 6;
      }                

  return(
             
    <main className={ style.mainServico }>
          <TituloTelas texto="Configure seus" destaque="Serviços!" usuario="Usuario" pagina={ props.pagina }/>
      <div className={ style.servicos }>
        <div className={ style.acharServicos }>
          <div className={ style.filtros }>
            <p>Tipos de serviços oferecidos:</p>
            
            </div>
            <p>Tipos de serviços oferecidos:</p>
            <div className={ style.mainAgenda }>
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
        </div>
        </div>
              
          </div>
          <div className={ style.servicosDisponiveis }>
    
          </div>
        </div>

        <hr />

        <div className={ style.mostrarServico }>
          <h2>Selecione um Serviço</h2>
          <img src={ naoEncontrado } alt="" />
        </div>
      
    </main>
  )
}

export default ConfServico;