  import { useState } from "react";
  import { Bar } from "react-chartjs-2";
  import { Charts as ChartJS } from 'chart.js/auto';

const GraficoBar = ({ dados }) => {
  const [data, setData] = useState({
    labels: dados.map((data) => data.mes),
    datasets: [{
      label: "Serviços feitos por mês",
      data: dados.map((data) => data.servicos),
      backgroundColor: ["#0038FF80", "#00A3FF80"],
      borderColor: ["#0038FF", "#00A3FF"],
      borderWidth: 2, 
      borderRadius: 5
    }]
  });

  return(
    <>
      <Bar
      data={data}
      options={{
        scales: {
          y:{
            suggestedMin: 0,
            suggestedMax: 20
          }
        }
      }}/>
    </>
  )
}

export default GraficoBar;