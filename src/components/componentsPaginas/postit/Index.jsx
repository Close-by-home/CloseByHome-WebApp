import style from './Style.module.css'

const Postit = ({ pesquisa }) => {


  return(
    <div className={style.postit}>
      <div className={style.textPostit}>
        <p>{ pesquisa.msg }</p>
      </div>
      <div className={style.rotapePostit}>
        <p>{ pesquisa.nome }</p>
        <p>{ pesquisa.idade } anos</p>
      </div>
    </div>
  )
}

export default Postit;