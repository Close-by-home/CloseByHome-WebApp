import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Charts as ChartJS } from 'chart.js/auto';

const GraficoBar = ({ dados }) => {
const [data, setData] = useState({
  labels: dados.map((data) => data.mes),
  datasets: [{
    label: "Média de Nota",
    data: dados.map((data) => data.nota),
    backgroundColor: "#FF9F1C",
    borderColor: "#FFBF69",
  }]
});

return(
  <>
    <Line
    data={data}
    options={{ 
      scales: {
        y: {
          suggestedMin: 1,
          suggestedMax: 5
        }
      }
    }}/>
  </>
)
}

export default GraficoBar;