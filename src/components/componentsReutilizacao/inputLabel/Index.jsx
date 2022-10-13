import style from './Style.module.css';

const InputLabel = (props) => {
  return(
    <div className={ style.input }>
      <div><label htmlFor={ props.text }>{ props.text }</label></div>
      <input type={ props.type } id={ props.text } onChange={ props.valor } 
      style={ props.tamanho ? {width: `${props.tamanho}em`} : {width: `30em`} }/>
    </div>
  )
}

export default InputLabel;