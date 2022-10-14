import style from './Style.module.css';

import notaUp from '../../../assets/icons/estrelaCheia.png';
import notaDown from '../../../assets/icons/estrelaVazia.png';

const InfosTrabs = (props) => {
  let notaTemp = [0, 0, 0, 0, 0];

  function nota(array) {
    array.fill(1, 0, props.nota);
    console.log(array)
    return array;
  }

 

  return (
    <main className={ style.main }>
      <div className={ style.imgUser }>
        <div className={ style.img }></div>
      </div>
      <div className={ style.infos }>
        <div className={ style.tag }>
          <div className={ style.tagTrab }>
            <div className={ style.pontTag }></div>
            <p>Teste</p>
          </div>
        </div>
        <table>
          <tr>
            <th>Prestador:</th>
            <th>Status:</th>
            <th>Contato:</th>
            <th>Data e Horario:</th>
            <th>Sua nota:</th>
          </tr>
          <tr>
            <td>{ props.user }</td>
            <td style={{ color: '#FBFF43' }}>{ props.status }</td>
            <td>{ props.numero }</td>
            <td>{ props.data }</td>
            <td>
              <img src="" alt="" />
              {nota(notaTemp).map((estrela) => {
                return estrela ? <img alt="estrela" src={ notaUp }/> : <img alt="estrela apagada" src={ notaDown }/>
              })}
            </td>
          </tr>
        </table>
      </div>
    </main>
  )
}

export default InfosTrabs