import TitutloTelas from '../../componentsReutilizacao/tituloTelas/Index';
import GrafigoBar from '../../ComponentsBibliotecas/graficos/GraficoBar';
import GraficoLinha from '../../ComponentsBibliotecas/graficos/GraficoLine';

import dados from '../../../data/qtdServicos';

import style from './Style.module.css';

const Dashboard = (props) => { 

  const contaMedia = () => {
    const nota1 = dados[dados.length - 1].nota;
    const nota2 = dados[dados.length - 2].nota;

    if(nota1 > nota2) {
      return `+ ${nota1 - nota2}`
    } else {
      return `- ${nota2 - nota1}`
    }
  }

  const mediaMes = () => {
    let mesTotal = 0;
    for(let i = 0; i < dados.length; i++) {
      mesTotal = mesTotal + dados[i].servicos;
    } 
    return (mesTotal / dados.length).toFixed(1);
  }

  const diferencaMes = () => {
    const mes1 = dados[dados.length - 1].servicos;
    const mes2 = dados[dados.length - 2].servicos;

    if(mes1 > mes2) {
      return `+ ${mes1 - mes2}`
    } else {
      return `- ${mes2 - mes1}`
    }
  }

  return(
    <main className={style.mainDash}>
      <TitutloTelas texto="Informações sobre seus" destaque="Serviços" usuario="Usuario" pagina={ props.pagina }/>
      <div className={style.container}>
        <div className={style.contLinha}>
          <h3>Média de nota</h3>
          <div className={style.naoTitulo}>
            <div className={style.graficoLinha}>
              <GraficoLinha dados={dados}/>
            </div>
            <div className={style.infoLinha}>
              <div className={style.resumLinha}>
                <p>Média de Nota desse mês: {dados[dados.length - 1].nota}</p>
                <p>Média de Nota do mês passsado: {dados[dados.length - 2].nota}</p>
                <p>Diferença de: {contaMedia()}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.contBarra}>
          <h3>Serviços por mês</h3>
          <div className={style.naoTitulo}>
            <div className={style.infoBarra}>
              <div className={style.resumBarra}>
                <p>Média de serviços por mês: {mediaMes()}</p>
                <p>Serviços nesse mês: {dados[dados.length - 1].servicos}</p>
                <p>Serviços no mês passado: {dados[dados.length - 2].servicos}</p>
                <p>Diferença de: {diferencaMes()}</p>
              </div>
            </div>
            <div className={style.graficoBarra}>
              <GrafigoBar dados={dados}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Dashboard;