import style from './Style.module.css'  

const SlideServico = ({ servico }) => {

  return(
    <div className={style.slideComp}>
      <div className={style.contImg} style={{ backgroundImage: `url(${servico.img})` }}>

      </div>
      <div className={style.leg}>
        <p>{ servico.nome }</p>
      </div>
    </div>
  )
}

export default SlideServico