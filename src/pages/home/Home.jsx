import { useState } from 'react';
import { Link } from 'react-router-dom';

import { servico1, servico2 } from '../../Data/servicos';
import pesquisa from '../../Data/pesquisa';

import Navbar from '../../components/componentsPaginas/navbar/Navbar';
import BotaoCheio from '../../components/componentsReutilizacao/botaoCheio/Botao';
import Slide from '../../components/componentsPaginas/slideServico/Index';
import Postit from '../../components/componentsPaginas/postit/Index';
import Footer from '../../components/componentsPaginas/footer/Index';

import style from './Style.module.css';
import banner from '../../assets/icons/banner.png';
import seta1 from '../../assets/icons/seta1.png';
import seta2 from '../../assets/icons/seta2.png';
import procurar from '../../assets/icons/procurar.png';
import marcar from '../../assets/icons/marcar.png';
import classificar from '../../assets/icons/classificar.png';
import registro from '../../assets/icons/registro.png';
import aceitar from '../../assets/icons/aceitar.png';
import conclusao from '../../assets/icons/conclusao.png';
import logo from '../../assets/img/CloseByHomeLogo2.png';

const Home = () => {
  const [servicos, setServicos] = useState([...servico1])
  let mapServicos = servicos.map((servico, i) => {
    return <Slide servico={ servico } key={ i }/>
  })

  function trocarServico() {
    if(servicos[0].nome === servico1[0].nome) {
      setServicos([...servico2])
    } else {
      setServicos([...servico1])
    }
  }

  return (
    <>
      <Navbar/>
      <main>
        <div className={ style.banner } id="sec_inicio">
          <div className={ style.frase }>
            <h1>
              Encontre profissionais na
              <span> segurança de sua casa!</span>
            </h1>
            <p>Veja os tipos de serviços que seus vizinhos oferecem</p>
            <Link to="/registro" style={{ textDecoration: "none" }}>
            <BotaoCheio text="Registre o seu condominio" cor="azul"/>
            </Link>
          </div>
          <div className={ style.imgEmpresa }>
            <img src={ banner } alt="" />
          </div>
        </div> 
        <div className={ style.servicos }>
          <div className={ style.carrousel }>
            <div className={ style.seta } onClick={trocarServico}>
              <img src={ seta1 } alt="" />
            </div>
            <div className={ style.conteudo }>
              <div>
                <h3>Serviços encontrados em nosso app</h3>
              </div>
              <div className={ style.slide }>
                { mapServicos }
              </div>
            </div>
            <div className={style.seta} onClick={trocarServico}>
              <img src={ seta2 } alt="" />
            </div>
          </div>
        </div>
        <div className={style.board}>
          <div className={style.textBoard}>
            <h1 style={{ marginTop: "5%"}}>Encontrando soluções</h1>
            <h1>de dentro de seu <span>condomínio</span> </h1>
            <p style={{ marginTop: "2%" }}>Facilidade, conforto e segurança.</p>
            <p>Descobrimos que isso é o que moradores de condomínio</p>
            <p style={{ marginBottom: "5%" }}> mais querem ao contratar um serviço</p>
            <Link to="/registro" style={{ textDecoration: "none" }}>
            <BotaoCheio text="Registre o seu condominio" cor="azul"/>
            </Link>
          </div>
          <div className={style.msgBoard}>
            <div className={style.post1}>
              <Postit pesquisa={pesquisa[0]}/>
            </div>
            <div className={style.post2}>
              <Postit pesquisa={pesquisa[1]}/>
              <Postit pesquisa={pesquisa[2]}/>
            </div>
          </div>
        </div>
        <div className={style.passoApasso} id="sec_passoAPasso">
          <div className={style.cliente}>
            <h2>Como funciona para o cliente?</h2>
            <div className={style.passos}>
              <img src={ procurar } alt="" />
              <img src={ marcar } alt="" />
              <img src={ classificar } alt="" />
            </div>
            <div className={style.textPassos}>
              <p>Ira usar o aplicativo para encontrar um prestador de serviço ideal.</p>
              <p>Ao receber uma notificação de serviço ele podera aceitar ou recusar.</p>
              <p>Após o termino do serviço o cliente avalia o serviço prestado.</p>
            </div>
          </div>
          <div className={style.servico}>
            <h2>Como funciona para o prestador de serviço?</h2>
            <div className={style.passos}>
              <img src={ registro } alt="" />
              <img src={ aceitar } alt="" />
              <img src={ conclusao } alt="" />
            </div>
            <div className={style.textPassos}>
              <p>Prestador de serviço, morador do condominio , registra seu perfil especificando suas especialidades</p>
              <p>Ao receber uma notificação de serviço ele podera aceitar ou recusar</p>
              <p>Após o termino do serviço o prestador avalia o cliente</p>
            </div>
          </div>
        </div>
        <div className={style.sobreNos} id="sec_sobre">
          <div className={style.logo}>
            <img src={ logo } alt="" />
          </div>
          <div className={style.textSobreNos}>
            <div className={style.caixaText}>
              <h2>Quem é a Close By Home?</h2>
              <p>Para minimizar este problema, ajudando tanto o condomínio, quanto os moradores, podemos oferecer uma aplicação que não é somente direcionada para moradores oferecerem seus serviços para todo o condomínio, mas também para aquele morador que deseja visualizar e contratar de forma segura serviços de seus vizinhos, conseguindo visualizar/agendar um serviço e avaliar o trabalhador autônomo.</p>
            </div>
          </div>
        </div>
        <div className={style.contato} id="sec_contato">
          <h2>Gostou da ideia?</h2>
          <div className={style.ajustContato}>
            <p>Entre em contato com a gestão do seu condominio e mostra a ideia para eles.</p>
            <p>Após isso eles mandam um email para a gente confirmando o desejo de participar.</p>
          </div>
          <label htmlFor="">Email:</label>
          <input type="Email" />
          <BotaoCheio text="Entre em contato!" cor="laranja"/>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default Home