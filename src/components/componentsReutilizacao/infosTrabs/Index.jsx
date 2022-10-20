import style from './Style.module.css';

import notaUp from '../../../assets/icons/estrelaCheia.png';
import notaDown from '../../../assets/icons/estrelaVazia.png';

const InfosTrabs = ({ trab }) => {
  let notaTemp = [0, 0, 0, 0, 0];

  function nota(array) {
    array.fill(1, 0, trab.nota);
    console.log(array)
    return array;
  }

 

  return (
    <main className={ style.main }>
      <div className={ style.imgUser }>
        <div className={ style.img } style={{backgroundImage: `url(${trab.imagem})`}}>
        
        </div>
      </div>
      <div className={ style.infos }>
        <div className={ style.tag }>
          <div className={ style.tagTrab }>
            <div className={ style.pontTag }></div>
            <p>{ trab.servico }</p>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Prestador:</th>
              <th>Status:</th>
              <th>Contato:</th>
              <th>Data e Horario:</th>
              <th>Nota média:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{ trab.user }</td>
              <td style={{ color: '#FBFF43' }}>{ trab.status }</td>
              <td>{ trab.numero }</td>
              <td>{ trab.data }</td>
              <td>
                
                {nota(notaTemp).map((estrela, i) => {
                  return estrela ? <img alt="estrela" src={ notaUp } key={ i }/> : 
                  <img alt="estrela apagada" src={ notaDown } key={ i }/>
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default InfosTrabs