import { useState } from 'react';

import style from './Style.module.css';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';


import InputLabel from '../../componentsReutilizacao/inputLabel/Index';
import BotaoCheio from '../../componentsReutilizacao/botaoCheio/Botao';

const FormRegistro = () => {
  
    const [CNPJ, setCNPJ] = useState("");
    const [CEP, setCEP] = useState("");
    const [TELEFONE, setTELEFONE] = useState("");
    const [NUMERO, setNUMERO] = useState("");
    const [EMAIL, setEMAIL] = useState("");
    const [QTDBLOCOS, setQtdBlocos] = useState("");
    const [SINDICO, setSindico] = useState("");
    const [passos, setPassos] = useState(1)

    function inputCnpj(event) {
        setCNPJ(event.target.value);
        console.log(CNPJ);
    }
    function inputCep(event) {
        setCEP(event.target.value);
        console.log(CEP);
    }

    function inputTelefone(event) {
        setTELEFONE(event.target.value);
        console.log(TELEFONE);
    }

    function inputNumero(event) {
        setNUMERO(event.target.value);
        console.log(NUMERO);
    };

    function inputEmail(event) {
      setEMAIL(event.target.value);
      console.log(EMAIL);
  };

  function inputQtdBlocos(event) {
    setQtdBlocos(event.target.value);
    console.log(QTDBLOCOS);
  };

   function inputSindico(event) {
  setSindico(event.target.value);
  console.log(SINDICO);
   };




  async function cadastrar() {
    const cadastrar = await axios.post(`http://localhost:8080/condominio/cadastrar`, 
    {CEP: `${inputCep}`,
    CNPJ:`${inputCnpj}`,
    CODIGO: '012392', 
    EMAIL:`${inputEmail}`,
    NUMERO: `${inputNumero}`,
    QTDBLOCOS: `${inputQtdBlocos}`,
    SINDICO: `${inputSindico}`,
    TELEFONE: `${inputTelefone}`,  
    TELEFONESINDICO: '12331234151'},)
    .then(res => {
      console.log(res.data)
      return res.data; 
    }).catch(err => {
      console.log(err)
    })

    cadastrar ? Navigate('/RegistroEnviarArq') : console.log(cadastrar);
  } 
      return (
          
        <div className={style.tudo}>
         
            <p>Passos:</p>
            <div className={style.passos}>

            <div className={style.bolinha} >
            1
            </div>
          <div className={style.linhas}>----------</div>
          <div className={style.bolinha}>
            2
          </div>
          <div className={style.linhas}>----------</div>
          <div className={style.bolinha}>
            3
          </div>

          </div>

        
        <h2>
          Registre seu condominio!
        </h2>
        
        <InputLabel text="CNPJ"  type="number" valor={inputCnpj} />  
        
        <div className={ style.divForm }>
            <InputLabel text="CEP"  type="number" valor={inputCep} tamanho="12" />  
            <InputLabel text="Telefone"  type="number" valor={inputTelefone}  tamanho="15"/> 
        </div>
        <InputLabel text="Email Sindico" type= "text" valor={inputEmail}/>
        <InputLabel text="Quantidade de blocos" type= "number" valor={inputQtdBlocos}/>
        <InputLabel text="Nome Sindico" type= "text" valor={inputSindico}/> 
        <InputLabel text="Número"  type="number" valor={inputNumero} tamanho="7"/>
        
        <div style={{height:"1em"}}></div>
        <BotaoCheio text="Prosseguir" cor="azul" funcao={ cadastrar } />  
        
        </div>
      )
}

export default FormRegistro;
    
    
