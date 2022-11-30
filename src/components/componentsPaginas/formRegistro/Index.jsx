import { useState } from 'react';

import style from './Style.module.css';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


import InputLabel from '../../componentsReutilizacao/inputLabel/Index';
import BotaoCheio from '../../componentsReutilizacao/botaoCheio/Botao';
import { areDayPropsEqual } from '@mui/x-date-pickers/internals';

const FormRegistro = (props) => {
  
  const [CNPJ, setCNPJ] = useState("");
  const [CEP, setCEP] = useState("");
  const [TELEFONE, setTELEFONE] = useState("");
  const [NUMERO, setNUMERO] = useState("");
  const [EMAIL, setEMAIL] = useState("");
  const [QTDBLOCOS, setQtdBlocos] = useState("");
  const [SINDICO, setSindico] = useState("");
  
  function inputCnpj(event) {
    setCNPJ(event.target.value);
    console.log(CNPJ)
  }
  function inputCep(event) {
    setCEP(event.target.value);
  }

  function inputTelefone(event) {
    setTELEFONE(event.target.value);
  }

  function inputNumero(event) {
    setNUMERO(event.target.value);
  };

  function inputEmail(event) {
    setEMAIL(event.target.value);
  };

  function inputQtdBlocos(event) {
    setQtdBlocos(event.target.value);
  };

  function inputSindico(event) {
    setSindico(event.target.value);
  };




  async function cadastrar() {
    const condominio = {
      cnpj: CNPJ,
      codigoCondominio: '012392',
      cep: CEP,
      telefone: TELEFONE,
      numero: NUMERO,
      quatidadeDeBlocos: QTDBLOCOS,
      sindico: SINDICO,
      emailSindico: EMAIL,
      telefoneSindico: '12331234151'
    }
     
    props.pagina("formEnviarArq");

    props.passarInfos(condominio);

    console.log(condominio)
    await axios.post(`http://localhost:8080/condominio/cadastrar`, condominio)
      .then(res => {
        console.log(res.data)
        return res.data;
      }).catch(err => {
        console.log(err)
      })
  }
  
  return (

    <div className={style.tudo}>

      <p>Passos:</p>
      <div className={style.passos}>

        <div className={ style.bolinhaSelecionada } >
          1
        </div>
        <div className={style.linhas}>----</div>
        <div className={style.bolinha}>
          2
        </div>
        <div className={style.linhas}>----</div>
        <div className={style.bolinha}>
          3
        </div>

      </div>


      <h2>
        Registre seu condominio!
      </h2>

      <div>
        <InputLabel text="CNPJ" type="number" valor={inputCnpj} />
        <div className={style.divForm}>
          <InputLabel text="CEP" type="number" valor={inputCep} tamanho="12" />
          <InputLabel text="Telefone" type="number" valor={inputTelefone} tamanho="15" />
        </div>
        <InputLabel text="Email Sindico" type="text" valor={inputEmail} />
        <InputLabel text="Nome Sindico" type="text" valor={inputSindico} />
        <div className={style.divForm}>
          <InputLabel text="Quantidade de blocos" type="number" valor={inputQtdBlocos} tamanho="15" />
          <InputLabel text="Número" type="number" valor={inputNumero} tamanho="12" />
        </div>
      </div>

      <div style={{ marginTop: "1em" }}>
       <BotaoCheio text="Prosseguir" cor="azul" funcao={cadastrar} />
      </div>

    </div>
  )
}

export default FormRegistro;


