import '../Botao/Botao.css'

export const Botao = (props) => {
    return(
        <button className='botao'>{props.children}</button>
    )
}
export default Botao