import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import BotaoCheio from '../../componentsReutilizacao/botaoCheio/Botao';
import InputLabel from '../../componentsReutilizacao/inputLabel/Index';

import style from './Style.module.css';

const FormLogin = () => {
  const navigate = useNavigate();

  const [EMAIL, setEMAIL] = useState("");
  const [SENHA, setSENHA] = useState("");
  const [CÓDIGO, setCÓDIGO] = useState("");

  function inputEmail(event) {
    setEMAIL(event.target.value);
  }

  function inputSenha(event) {
    setSENHA(event.target.value);
  }

  function inputCódigo(event) {
    setCÓDIGO(event.target.value)
  }

  async function logar() {
    const logar = await axios.post(`http://localhost:8080/usuario/logar`, {CÓDIGO:`${inputCódigo}`, EMAIL: `${inputEmail}`, SENHA: `${inputSenha}`})
    .then(res => {
      console.log(res.data)
      return res.data; 
    }).catch(err => {
      console.log(err)
    })

    logar ? navigate('/perfil') : console.log(logar)
  }
  
  return(
    <div className={ style.formLogin }>
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