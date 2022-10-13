import { useState } from 'react';

import Notificacao from '../../componentsPaginas/notificacao/Index';

import style from './Style.module.css';
import notificacaoVazio from '../../../assets/icons/notificacaoVazio.png';
import notificacaoNova from '../../../assets/icons/notificacaoNova.png';

const TitutloTelas = (props) => {
  const [aparecer, setAparecer] = useState(false)
  const [notificacao, setNotificacao] = useState(["msg 1", "msg 2", "msg 3"])

  function excluirNotificacao(chave) {
    const novaLista = notificacao.filter(msg => {
      return msg !== chave
    }) 
    setNotificacao(novaLista);
  }

  return(
    <div className={ style.titulo }>
      <h2>{ props.texto }<span> { props.destaque }</span></h2>
      <div className={ style.perfil }>
        <p>{ props.usuario }</p>
        <img 
          onClick={() => {setAparecer(!aparecer)}} 
          src={notificacao.length > 0 ? notificacaoNova : notificacaoVazio} 
          alt="notificação" 
        />
        <div className={ style.imgPerfil }></div>
      </div>
      {aparecer ? <div className={ style.notificacao }>
        {notificacao ? 
          notificacao.map((noti) => <Notificacao notificacao={ noti } excluir={ excluirNotificacao } key={ noti }/>) :
          ""}
      </div> : ""}
    </div>
  )
}

export default TitutloTelas;