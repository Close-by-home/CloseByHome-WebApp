import { useState } from 'react';

import style from './Style.module.css';

import InputLabel from '../../componentsReutilizacao/inputLabel/Index';
import BotaoCheio from '../../componentsReutilizacao/botaoCheio/Botao';

const FormRegistro = () => {
  
    const [CNPJ, setCNPJ] = useState("");
    const [CEP, setCEP] = useState("");
    const [TELEFONE, setTELEFONE] = useState("");
    const [ENDERECO, setENDERECO] = useState("");
    const [NUMERO, setNUMERO] = useState("");

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


    function inputEndereco(event) {
        setENDERECO(event.target.value);
        console.log(ENDERECO);
    }
    function inputNumero(event) {
        setNUMERO(event.target.value);
        console.log(NUMERO);
    };

    
      return (

        <div>
            <p>Passos:</p>
        <h2>
          Registre seu condominio!
        </h2>
        
        <InputLabel text="CNPJ"  type="number" valor={inputCnpj} />  
        
        <div className={ style.divForm }>
            <InputLabel text="CEP"  type="number" valor={inputCep} tamanho="12" />  
            <InputLabel text="Telefone"  type="number" valor={inputTelefone}  tamanho="15"/> 
        </div>
        
        <InputLabel text="Endereço"  type ="text" valor={inputEndereco} />  
        <InputLabel text="Número"  type="number" valor={inputNumero} tamanho="7"/> 
        <div style={{height:"1em"}}></div>
        

         
        <BotaoCheio text="Prosseguir" cor="azul" />  
        </div>
      )
}

export default FormRegistro;
    
    
