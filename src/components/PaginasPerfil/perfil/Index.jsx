import { useState, useContext } from 'react';
import { AppContext } from '../../../Data/Data';

import TitutloTelas from '../../componentsReutilizacao/tituloTelas/Index';
import InputPerfil from '../../componentsPaginas/inputPerfil/Index';
import Botao from '../../componentsReutilizacao/botaoCheio/Botao';
import MsgModal from '../../modals/modalServico/Index';

import style from './Style.module.css';
import editar from '../../../assets/icons/editar.png';
import imgPerfil from '../../../assets/img/users/imgPerfil.png';

const Perfil = () => {
  const { nome, bloco, apartamento, codigoDoCondominio, email, numero, servico} = useContext(AppContext);
  
  const [valorEmail, setValorEmail] = useState(email);
  const [editEmail, setEditEmail] = useState(true);
  const [valorNumero, setValorNumero] = useState(numero);
  const [editNumero, setEditNumero] = useState(true);
  const [modal, setModal] = useState(false)
  
  function mudarEmail(value) {
    setValorEmail(value)
  }

  function sentEmail(value) {
    if(value === 'Enter') {
      setEditEmail(true);
    }
  }

  function mudarNumero(value) {
    setValorNumero(value)
  }

  function sentNumero(value) {
    if(value === 'Enter') {
      setEditNumero(true);
    }
  }

  return(
    <main className={ style.perfil }>
      {modal ? 
      <MsgModal titulo="Ativar conta" fechar={() => setModal(false)}>
        <p>Você tem certeza que deseja ativar sua conta de serviço?</p>
      </MsgModal> : null}
      <TitutloTelas destaque="Perfil" />
      <div className={style.container}>
        <div className={style.foto}>
          <div className={style.fotoPerfil}>
            <div className={style.img}>
              <img src={imgPerfil} alt="" />
            </div>
            <div className={style.editar}>
              <img src={editar} alt="" />
            </div>
          </div>
        </div>
        <hr />
        <div className={style.infos}>
          <InputPerfil texto="Nome" valor={nome} desativar={true} style={{width: "25em", marginBottom: "1em"}}/>
          <div style={{display: 'flex'}}>
            <InputPerfil texto="Bloco" valor={bloco} desativar={true} style={{width: "10.5em", marginRight: "2em"}}/>
            <InputPerfil texto="Apartamento" valor={apartamento} desativar={true} style={{width: "12.5em"}}/>
          </div>
          <InputPerfil texto="Código do Condominio" valor={codigoDoCondominio} desativar={true} style={{width: "25em", margin: "1em 0"}}/>
          <div className={style.inputEditar}>
            <InputPerfil texto="Email" tipo="text" valor={valorEmail} desativar={editEmail} funcao={sentEmail} mudarValor={mudarEmail} style={{width: "22em"}}/>
            <div className={style.btnEdit} onClick={() => setEditEmail(false)}>
              <img src={editar} alt="" />
            </div>
          </div>
          <div className={style.inputEditar}>
            <InputPerfil texto="Numero" tipo="text" valor={valorNumero} desativar={editNumero} funcao={sentNumero} mudarValor={mudarNumero} style={{width: "22em"}}/>
            <div className={style.btnEdit} onClick={() => setEditNumero(false)}>
              <img src={editar} alt="" />
            </div>
          </div>
          {!servico ? 
            <Botao text="Ativar conta serviço" cor="azul" funcao={() => setModal(true)} estilo={{marginTop: "1em"}}/> : 
            <Botao text="Desativar conta serviço" cor="azul" funcao={() => setModal(true)} estilo={{marginTop: "1em"}}/>}
        </div>
      </div>
    </main>
  )
}

export default Perfil;