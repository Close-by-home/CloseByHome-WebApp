import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import BotaoCheio from '../../componentsReutilizacao/botaoCheio/Botao';
import InputLabel from '../../componentsReutilizacao/inputLabel/Index';

import style from './Style.module.css';

const FormCadastro = () => {
  const navigate = useNavigate();

  const [EMAIL, setEMAIL] = useState("");
  const [SENHA, setSENHA] = useState("");
  const [CPF, setCPF] = useState("");
  const [NOME, setNOME] = useState("");
  const [TELEFONE, setTELEFONE] = useState("");
  const [BLOCO, setBLOCO] = useState("");
  const [CODIGO, setCÓDIGO] = useState("");



  function inputEmail(event) {
    setEMAIL(event.target.value);
  }

  function inputSenha(event) {
    setSENHA(event.target.value);
  }

  function inputCódigo(event) {
    setCÓDIGO(event.target.value)
  }

  function inputCpf(event) {
    setCPF(event.target.value)
  }

  function inputTelefone(event) {
    setTELEFONE(event.target.value)
  }

  function inputNome(event) {
    setNOME(event.target.value)
  }

  function inputBloco(event) {
    setBLOCO(event.target.value)
  }

  async function cadastrar() {
    const cadastrar = await axios.post(`http://localhost:8080/usuario/logar`, {CÓDIGO:`${inputCódigo}`, EMAIL: `${inputEmail}`, SENHA: `${inputSenha}`})
    .then(res => {
      console.log(res.data)
      return res.data; 
    }).catch(err => {
      console.log(err)
    })

    cadastrar ? navigate('/perfil') : console.log(cadastrar)
  }
  
  return(
    <div className={ style.formCadastro }>
      <h2>Faça o cadastro de um novo morador!</h2>
      <InputLabel text="Nome" type="text" valor={ inputNome }/>
      <InputLabel text="Código do Condominio" type="text" valor={ inputCódigo }/>
      <InputLabel text="E-mail" type="text" valor={ inputEmail }/>
      <InputLabel text="Senha" type="password" valor={ inputSenha }/>
      <InputLabel text="Cpf" type="text" valor={ inputCpf }/>
      <InputLabel text="Telefone" type="number" valor={ inputTelefone }/>
      <InputLabel text="Bloco" type="text" valor={ inputBloco }/>

      <BotaoCheio text="Cadastrar" cor="azul" funcao={ cadastrar }/>
    </div>
  )
}

export default FormCadastro;