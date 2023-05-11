import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../Data/Store';
import usuarioService from '../../../services/UsuarioService';

import BotaoCheio from '../../componentsReutilizacao/botaoCheio/Botao';
import InputLabel from '../../componentsReutilizacao/inputLabel/Index';

import style from './Style.module.css';

const FormCadastro = () => {
  const { codigoDoCondominio } = useContext(AppContext);

  const [EMAIL, setEMAIL] = useState("");
  const [SENHA, setSENHA] = useState("");
  const [CPF, setCPF] = useState("");
  const [NOME, setNOME] = useState("");
  const [TELEFONE, setTELEFONE] = useState("");
  const [BLOCO, setBLOCO] = useState("");
  const [CODIGO, setCÓDIGO] = useState("");
  const IMAGEM = null;



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
    usuarioService.sendCadastro({
      cpf: `${CPF}`,
      bloco: `${BLOCO}`, 
      email: `${EMAIL}`,
      telefone:`${TELEFONE}`,
      nome: `${NOME}`, 
      senha: `${SENHA}`,
      imagem: null
    }).then(res => {
      console.log(res.data)
      return res.data; 
    }).catch(err => {
      console.log(err)
    })
  }
  
  return(
    <div className={ style.formCadastro }>
      <h2>Faça o cadastro de um novo morador!</h2>
      <InputLabel text="Nome" type="text" valor={ inputNome }/>
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