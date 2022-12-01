import { useState } from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const Calendario = (props) => {
  const [data, setData] = useState()

  function agendar(novaData) {
    setData(novaData);
    let separarDia = new Date(novaData);
    let dataFormatada =  separarDia.getFullYear() + "-" + separarDia.getMonth() + "-" + separarDia.getDate();
    props.dia(dataFormatada)
  }

  function desativarDias(pegarDias) {
    const diasRetirados = props.folgaDias.length;
    
    switch(diasRetirados) {
      case 1:
        return pegarDias.getDay() === props.folgaDias[0]
      case 2: 
        return pegarDias.getDay() === props.folgaDias[0] || pegarDias.getDay() === props.folgaDias[1]
      case 3:
        return pegarDias.getDay() === props.folgaDias[0] || pegarDias.getDay() === props.folgaDias[1] || pegarDias.getDay() === props.folgaDias[2]
      case 4:
        return pegarDias.getDay() === props.folgaDias[0] || pegarDias.getDay() === props.folgaDias[1] || pegarDias.getDay() === props.folgaDias[2] || pegarDias.getDay() === props.folgaDias[3]
      case 5:
        return pegarDias.getDay() === props.folgaDias[0] || pegarDias.getDay() === props.folgaDias[1] || pegarDias.getDay() === props.folgaDias[2] || pegarDias.getDay() === props.folgaDias[3] || pegarDias.getDay() === props.folgaDias[4] 
      case 6: 
        return pegarDias.getDay() === props.folgaDias[0] || pegarDias.getDay() === props.folgaDias[1] || pegarDias.getDay() === props.folgaDias[2] || pegarDias.getDay() === props.folgaDias[3] || pegarDias.getDay() === props.folgaDias[4] || pegarDias.getDay() === props.folgaDias[5]
      case 7:
        return pegarDias.getDay() === props.folgaDias[0] || pegarDias.getDay() === props.folgaDias[1] || pegarDias.getDay() === props.folgaDias[2] || pegarDias.getDay() === props.folgaDias[3] || pegarDias.getDay() === props.folgaDias[4] || pegarDias.getDay() === props.folgaDias[5] || pegarDias.getDay() === props.folgaDias[6]
      default:
        return null;
    }
  }

  return(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CalendarPicker
      className="calendariopicker"
      hintText="Weekends Disabled"
      disablePast={props.passado}
      shouldDisableDate={(data) => desativarDias(new Date(data))}
      date={data}
      onChange={(novaData) => agendar(novaData)}/>
    </LocalizationProvider>
  )
}

export default Calendario;