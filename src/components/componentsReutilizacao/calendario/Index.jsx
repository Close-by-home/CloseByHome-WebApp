import { useState } from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const Calendario = (props) => {
  const [data, setData] = useState()

  function agendar(novaData) {
    setData(novaData);
    let separarDia = new Date(novaData);
    let dataFormatada = separarDia.getDate() + "/" + separarDia.getMonth();
    props.dia(dataFormatada)
  }

  // function desativarDias(desativaData) {
  //   console.log(desativaData.getDate())
  //   return desativaData.getDay() === 0 || desativaData.getDay() === 6;
  // }

  return(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CalendarPicker
      className="calendariopicker"
      hintText="Weekends Disabled"
      // shouldDisableDate={(data) => desativarDias(new Date(data))}
      date={data}
      onChange={(novaData) => agendar(novaData)}/>
    </LocalizationProvider>
  )
}

export default Calendario;