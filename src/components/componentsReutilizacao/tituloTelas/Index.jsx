import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../../Data/Store';
import axios from 'axios';

import Notificacao from '../../componentsPaginas/notificacao/Index';

import style from './Style.module.css';
import notificacaoVazio from '../../../assets/icons/notificacaoVazio.png';
import notificacaoNova from '../../../assets/icons/notificacaoNova.png';

const TitutloTelas = (props) => {
  const { img, nome } = useContext(AppContext);
  const [aparecer, setAparecer] = useState(false)
  const [notificacao, setNotificacao] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8080/notificacao/2`)
    .then(res => {
        console.log(res.data)
        setNotificacao(res.data.map(not => {
          return not.descricao
        }))
      }).catch(err => {
        console.log(err)
      })
  }, [])


  function excluirNotificacao(chave) {
    const novaLista = notificacao.filter((msg) => {
      return msg !== chave
    }) 
    setNotificacao(novaLista);
  }

  return(
    <div className={ style.titulo }>
      <h2>{ props.texto }<span> { props.destaque }</span></h2>
      <div className={ style.perfil }>
        <p>{ nome }</p>
        <img 
          onClick={() => {setAparecer(!aparecer)}} 
          src={notificacao.length > 0 ? notificacaoNova : notificacaoVazio} 
          alt="notificação" 
        />
        <div onClick={() => props.pagina('perfil')} className={ style.imgPerfil }>
          <img src={ img === "imagem" ? "https://cdn-icons-png.flaticon.com/512/1361/1361728.png" : img } alt="" />
        </div>
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