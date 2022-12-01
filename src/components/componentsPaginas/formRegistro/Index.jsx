import { useState, useContext } from 'react';
import { AppContext } from '../../../Data/Store';

import style from './Style.module.css';
import axios from 'axios';

import InputLabel from '../../componentsReutilizacao/inputLabel/Index';
import BotaoCheio from '../../componentsReutilizacao/botaoCheio/Botao';

const FormRegistro = (props) => {
  const { setCodigoDoCondominio } = useContext(AppContext);
  
  const [CNPJ, setCNPJ] = useState(null);
  const [CEP, setCEP] = useState(null);
  const [TELEFONE, setTELEFONE] = useState(null);
  const [NUMERO, setNUMERO] = useState(null);
  const [EMAIL, setEMAIL] = useState(null);
  const [QTDBLOCOS, setQtdBlocos] = useState(null);
  const [SINDICO, setSindico] = useState(null);
  
  function inputCnpj(event) {
    setCNPJ(event.target.value);
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
    if(CNPJ === null || CEP === null || TELEFONE === null || NUMERO === null || QTDBLOCOS === null || SINDICO === null || EMAIL === null) {
      props.aviso("Existem campos não preenchidos")
      return
    }

    const condominio = {
      cnpj: CNPJ,
      codigoCondominio: '012392',
      cep: CEP,
      telefone: TELEFONE,
      numero: NUMERO,
      quatidadeDeBlocos: QTDBLOCOS,
      sindico: SINDICO,
      emailSindico: EMAIL
    }
    
    await axios.post(`http://localhost:8080/condominio/cadastrar`, condominio)
    .then(res => {
      props.pagina("formEnviarArq");
      setCodigoDoCondominio(res.data.codigoCondominio)
      props.passarInfos(res.data);
        console.log(res.data)
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


