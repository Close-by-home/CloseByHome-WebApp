import style from './Style.module.css'

const Botao = ({ text, cor, funcao, estilo }) => {
  return(
    <div>
      <button 
        className={`${style.botaoCheio} ${style[cor]}`} 
        onClick={ funcao }
        style={ estilo }
      >
        { text }
      </button>
    </div>
  )
}

export default Botao;