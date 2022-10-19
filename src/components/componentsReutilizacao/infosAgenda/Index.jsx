import { useState, useEffect } from 'react';

import BotaoCheio from '../botaoCheio/Botao' 

import style from './Style.module.css';
import estrelaCheia from '../../../assets/icons/estrelaCheia.png';
import estrelaVazia from '../../../assets/icons/estrelaVazia.png';

const InfosAgenda = (props) => {
  const [estrela2, setEstrela2] = useState(true);
  const [estrela3, setEstrela3] = useState(true);
  const [estrela4, setEstrela4] = useState(true);
  const [estrela5, setEstrela5] = useState(true);
  const [qtdEstrela, setQtdEstrela] = useState(5);
  const [guardaNota, setGuardaNota] = useState(5);

  useEffect(() => {
    if(qtdEstrela === 1) {
      setEstrela2(false)
      setEstrela3(false)
      setEstrela4(false)
      setEstrela5(false)
    } else if(qtdEstrela === 2) {
      setEstrela2(true)
      setEstrela3(false)
      setEstrela4(false)
      setEstrela5(false)
    } else if(qtdEstrela === 3) {
      setEstrela2(true)
      setEstrela3(true)
      setEstrela4(false)
      setEstrela5(false)
    } else if(qtdEstrela === 4) {
      setEstrela2(true)
      setEstrela3(true)
      setEstrela4(true)
      setEstrela5(false)
    } else {
      setEstrela2(true)
      setEstrela3(true)
      setEstrela4(true)
      setEstrela5(true)
    }
  }, [qtdEstrela])  

  function nota(star) {
    if(star) {
      return estrelaCheia
    }
    return estrelaVazia
  }

  return(
    <div className={ style.infosTrab }>
      <div className={ style.info1 }>
        <div className={ style.imgPerfil }></div>
        <div className={ style.textInfo }>
          <p>Prestador:</p>
          <p className={ style.notStrong }>{ props.nome }</p>
          <p style={{marginTop: '.5em'}}>Horario:</p>
          <p className={ style.notStrong }>{ props.horario }</p>
        </div>
        <div className={ style.tag }>
          <div className={ style.tagTrab }>
            <div className={ style.dobra }></div>
            <span>{ props.servico }</span>
          </div>
          <p>Contato:</p>
          <p className={ style.notStrong }>{ props.contato }</p>
        </div>
      </div>
      <div className={ style.info2 }>
        <div className={ style.avaliacao }>
          <p>Avalie o serviço:</p>
          <div className={ style.estrelas }>
            <img 
             src={ estrelaCheia } 
             onClick={() => {
              setQtdEstrela(1)
              setGuardaNota(1)
            }}
             onPointerEnter={() => setQtdEstrela(1)}
             onPointerLeave={() => setQtdEstrela(guardaNota)}
             alt="" 
            />
            <img 
              src={ nota(estrela2) } 
              onClick={() => {
                setQtdEstrela(2)
                setGuardaNota(2)
              }}
              onPointerEnter={() => setQtdEstrela(2)}
              onPointerLeave={() => setQtdEstrela(guardaNota)}
              alt="" 
            />
            <img 
              src={ nota(estrela3) } 
              onClick={() => {
                setQtdEstrela(3)
                setGuardaNota(3)
              }}
              onPointerEnter={() => setQtdEstrela(3)}
              onPointerLeave={() => setQtdEstrela(guardaNota)}
              alt="" 
            />
            <img 
              src={ nota(estrela4) } 
              onClick={() => {
                setQtdEstrela(4)
                setGuardaNota(4)
              }}
              onPointerEnter={() => setQtdEstrela(4)}
              onPointerLeave={() => setQtdEstrela(guardaNota)}
              alt="" 
            />
            <img 
              src={ nota(estrela5) } 
              onClick={() => {
                setQtdEstrela(5)
                setGuardaNota(5)
              }}
              onPointerEnter={() => setQtdEstrela(5)}
              onPointerLeave={() => setQtdEstrela(guardaNota)}
              alt="" 
            />
          </div>
        </div>
        <div className={ style.status }>
          <p>Status:</p>
          <p>Em andamento</p>
          <BotaoCheio 
            text="Cancelar serviço" 
            cor="laranja" 
            estilo={{fontSize: '1rem', color: '#000', marginTop: '.5em'}}
          />
        </div>
      </div>
    </div>
  )
}

export default InfosAgenda