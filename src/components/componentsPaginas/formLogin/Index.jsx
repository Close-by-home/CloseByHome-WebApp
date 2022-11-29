import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../../Data/Store';
import axios from 'axios';

import BotaoCheio from '../../componentsReutilizacao/botaoCheio/Botao';
import InputLabel from '../../componentsReutilizacao/inputLabel/Index';
import Notificacao from '../../modals/notificacao/Index';

import style from './Style.module.css';

const FormLogin = () => {
  const navigate = useNavigate();
  const { setBloco, setEmail, setNumero, setNome } = useContext(AppContext);

  const [EMAIL, setEMAIL] = useState("");
  const [SENHA, setSENHA] = useState("");
  const [CODIGO, setCODIGO] = useState("");
  const [notificacao, setNotificacao] = useState(false)
  const [msg, setMsg] = useState("");
  const cor = "laranja"

  function inputEmail(event) {
    setEMAIL(event.target.value);
  }

  function inputSenha(event) {
    setSENHA(event.target.value);
  }

  function inputCódigo(event) {
    setCODIGO(event.target.value)
  }

  async function logar() {
    if(CODIGO === "" || EMAIL === "" || SENHA === "") {
      setMsg("Existem campos não preenchidos")
      setNotificacao(true)
      const timer = setTimeout(() => setNotificacao(false), 4000)
      return () => clearTimeout(timer);
    }

    await axios.post(`http://localhost:8080/usuario/logar`, {
      codigoCondominio:`${CODIGO}`, 
      email: `${EMAIL}`, 
      senha: `${SENHA}`
    })
    .then(res => {
      console.log(res.data.bloco, res.data.email, res.data.telefone, res.data.nome)
      setBloco(res.data.bloco);
      setEmail(res.data.email);
      setNumero(res.data.telefone);
      setNome(res.data.nome); 
      return navigate('/perfil')
    }).catch(() => {
      setMsg("Usuario informado não encontrado");
      setNotificacao(true)
      const timer = setTimeout(() => setNotificacao(false), 4000)
      return () => clearTimeout(timer);
    })
  }
  
  return(
    <div className={ style.formLogin }>
      {notificacao ? 
        <Notificacao msg={msg} cor={cor}/> : null  
      }
      <h2>Faça seu Login!</h2>
      <InputLabel text="Código do Condominio" type="text" valor={ inputCódigo }/>
      <InputLabel text="E-mail" type="text" valor={ inputEmail }/>
      <InputLabel text="Senha" type="password" valor={ inputSenha }/>
      <Link to="/modificarSenha" className={ style.reSenha }>Esqueceu a senha?</Link>
      <BotaoCheio text="Entrar" cor="azul" funcao={ logar }/>
    </div>
  )
}

export default FormLogin;