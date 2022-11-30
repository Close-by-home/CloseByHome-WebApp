import { useState, useContext} from 'react';

import style from './Style.module.css';
import axios from 'axios';
import { AppContext } from '../../../Data/Store';
import { Navigate} from 'react-router-dom';


import InputLabel from '../../componentsReutilizacao/inputLabel/Index';
import BotaoCheio from '../../componentsReutilizacao/botaoCheio/Botao';
import { areDayPropsEqual } from '@mui/x-date-pickers/internals';

const FormRegistro = (props) => {
  
  // const [setInfoRegistro] = useContext(AppContext);
  const [CNPJ, setCNPJ] = useState("");
  const [CEP, setCEP] = useState("");
  const [TELEFONE, setTELEFONE] = useState("");
  const [NUMERO, setNUMERO] = useState("");
  const [EMAIL, setEMAIL] = useState("");
  const [QTDBLOCOS, setQtdBlocos] = useState("");
  const [SINDICO, setSindico] = useState("");
  const [BOLINHA1, setBolinha1] = useState(true);
  const [BOLINHA2, setBolinha2] = useState(false);
  const [BOLINHA3, setBolinha3] = useState(false);
  
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
    setBolinha1(false);
    setBolinha2(true);
    const condominio = {
      CEP: CEP,
      CNPJ: CNPJ,
      CODIGO: '012392',
      EMAIL: EMAIL,
      NUMERO: NUMERO,
      QTDBLOCOS: QTDBLOCOS,
      SINDICO: SINDICO,
      TELEFONE: TELEFONE,
      TELEFONESINDICO: '12331234151'
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

      // setInfoRegistro ({cnpj: CNPJ, cep: CEP, telefone: TELEFONE, email: EMAIL, 
      //   sindico: SINDICO, qtdBlocos: QTDBLOCOS, numero: NUMERO})
    
      
      
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

      <div style={{ height: "1em" }}></div>
      <BotaoCheio text="Prosseguir" cor="azul" funcao={cadastrar} />

    </div>
  )
}

export default FormRegistro;


