import style from './Style.module.css'

const Botao = ({ text, cor, estilo, funcao }) => {
  return (
    <div className={ `${style.bordBotao} ${style[cor]}`}>
      <button onClick={funcao} className={style.botaoVazio} style={estilo}>
        <p>{ text }</p>
      </button>
    </div>
  )
}

export default Botao;