import { useState, useContext } from 'react';
import { AppContext } from '../../../Data/Store';
import axios from 'axios';

import TitutloTelas from '../../componentsReutilizacao/tituloTelas/Index';
import InputPerfil from '../../componentsPaginas/inputPerfil/Index';
import Botao from '../../componentsReutilizacao/botaoCheio/Botao';
import MsgModal from '../../modals/msgModal/Index';
import Notificacao from '../../modals/notificacao/Index';

import style from './Style.module.css';
import editar from '../../../assets/icons/editar.png';

const Perfil = () => {
  const { nome, bloco, apartamento, codigoDoCondominio, email, numero, servico, img, cpf, setServico, setEmail, setNumero, setImg } = useContext(AppContext);
  
  
  const [valorEmail, setValorEmail] = useState(email);
  const [editEmail, setEditEmail] = useState(true);
  const [valorNumero, setValorNumero] = useState(numero);
  const [editNumero, setEditNumero] = useState(true);
  const [modalServico, setModalServico] = useState(false);
  const [modalImg, setModalImg] = useState(false);
  const [novaClass, setNovaClass] = useState("");
  const [msg, setMsg] = useState("");
  const [cor, setCor] = useState("");
  const [notificacao, setNotificacao] = useState(false)

  function mudarEmail(value) {
    setValorEmail(value)
  }

  function sentEmail(value) {
    if(value === 'Enter') {
      setEditEmail(true);
      setEmail(valorEmail);
      setNovoEmail(valorEmail)
    }
  }

  function mudarNumero(value) {
    setValorNumero(value)
  }

  function sentNumero(value) {
    if(value === 'Enter') {
      setEditNumero(true);
      setNumero(valorNumero);
      setNovoNumero(valorNumero)
    }
  }

  async function mudarImg(arq) {
    if(arq.type.search("jpeg") > 0 || arq.type.search("png") > 0) {
      const formData = new FormData();
      formData.append("image", arq)
      const config = {
        headers: {
          Authorization: 'Client-ID 852865f54a814b6'
        }
      }
      await axios.post('https://api.imgur.com/3/image/', formData, config)
      .then((res) => {
        setMsg("Imagem Atualizada com sucesso!")
        setCor("verde")
        setImg(res.data.data.link)
        console.log(res.data.data.link)
        setImgApi(res.data.data.link)
      }).catch((err)=> {
        setCor("laranja")
        setMsg("Ops! Algo deu errado, tente de novo mais tarde!")
      })
    } else {
      setCor("laranja")
      setMsg("Infelizmente esse tipo de arquivo não é suportado")
    }
    setModalImg(false)
    setNotificacao(true)
    const timer = setTimeout(() => setNotificacao(false), 4000)
    return () => clearTimeout(timer);
  }

  function hoverArq(e) {
    e.preventDefault();
    setNovaClass("hoverArq");
  }

  function hoverLeaveArq(e) {
    e.preventDefault();
    setNovaClass("");

  }

  function dropArq(e) {
    e.preventDefault();
    setNovaClass("");
    mudarImg(e.dataTransfer.files[0]);
  }

  async function setImgApi(img) {
    await axios.put(`http://localhost:8080/usuario/atualizar/imagem/${cpf}/${email}`, {
      a: img
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err)   => {
      console.log(err)
    })
  }

  async function setNovoNumero(novoNum) {
    await axios.put(`http://localhost:8080/usuario/atualizar/telefone/${cpf}/${email}/${novoNum}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err)
    })
  }


  async function setNovoEmail(novoEmail) {
    await axios.put(`http://localhost:8080/usuario/atualizar/email/${cpf}/${email}/${novoEmail}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return(
    <main className={ style.perfil }>
      {modalServico ? 
      <MsgModal titulo="Ativar conta" fechar={() => setModalServico(false)} confirmar={() => setServico(true)}>
        <p>Você tem certeza que deseja ativar sua conta de serviço?</p>
      </MsgModal> : null}
      {modalImg ? 
      <MsgModal titulo="Mudar imagem de perfil" fechar={() => setModalImg(false)} botoes={true}>
        <div className={style.contModal} onDrop={(e) => dropArq(e)} onDragOver={(e) => hoverArq(e)} onDragLeave={(e) => hoverLeaveArq(e)}>
          <div className={`${style.enviarArq} ${style[novaClass]}`} >
            <input style={{display: "none"}} type="file" id="arqImg" onChange={(e) => mudarImg(e.target.files[0])}/>
            <label htmlFor="arqImg">Arreste a sua imagem aqui</label>
          </div>
        </div>
      </MsgModal> : null}
      {notificacao ?
        <Notificacao msg={msg} cor={cor}/> : null
      }
      <TitutloTelas destaque="Perfil" />
      <div className={style.container}>
        <div className={style.foto}>
          <div className={style.fotoPerfil}>
            <div className={style.img}>
              <img src={img === "imagem" ? "https://cdn-icons-png.flaticon.com/512/1361/1361728.png" : img} alt="" />
            </div>
            <div className={style.editar} onClick={() => setModalImg(true)}>
              <img src={editar} alt="" />
            </div>
          </div>
        </div>
        <hr />
        <div className={style.infos}>
          <InputPerfil texto="Nome" valor={nome} desativar={true} style={{width: "25em", marginBottom: "1em"}}/>
          <div style={{display: 'flex'}}>
            <InputPerfil texto="Bloco" valor={bloco} desativar={true} style={{width: "25em", marginRight: "2em"}}/>
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
          {servico ? 
            null :
            <Botao text="Ativar conta serviço" cor="azul" funcao={() => setModalServico(true)} estilo={{marginTop: "1em"}}/>
          }
        </div>
      </div>
    </main>
  )
}

export default Perfil;