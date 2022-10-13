import style from './Style.module.css'

const Botao = ({ text, cor, funcao }) => {
  return(
    <div>
      <button className={`${style.botaoCheio} ${style[cor]}`} onClick={ funcao }>
        { text }
      </button>
    </div>
  )
}

export default Botao;