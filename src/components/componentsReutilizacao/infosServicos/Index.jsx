import style from './Style.module.css'

import notaUp from '../../../assets/icons/estrelaCheia.png';
import notaDown from '../../../assets/icons/estrelaVazia.png';

const InfosServicos = ({ trab, funcao }) => {
  let notaTemp = [0, 0, 0, 0, 0]

  function nota(array) {
    array.fill(1, 0, trab.nota);
    return array;
  }

  return(
    <main className={ style.infos } onClick={() => funcao(trab)}>
      <div className={ style.imgPerfil } style={{ backgroundImage: `url(${'https://cdn-icons-png.flaticon.com/512/1361/1361728.png'})` }}></div>
      <div className={ style.infosNome }>
        <p className={ style.p1 }>Prestador:</p>
        <p className={ style.p2 }>{ trab.nomeUsuario }</p>
        {nota(notaTemp).map((estrela, i) => {
          return estrela ? <img alt="estrela" src={ notaUp } key={ i }/> : 
          <img alt="estrela apagada" src={ notaDown } key={ i }/>
        })}
      </div>
      <div className={ style.infosTag }>
        <div className={ style.tag }>
          <div className={ style.pointTag}></div>
          <p>{ trab.nomeServico }</p>
        </div>
          <p>Contato:</p>
          <p style={{fontSize: ".8rem"}}>{ trab.emailUsuario }</p>
      </div>
    </main>
  )
}

export default InfosServicos