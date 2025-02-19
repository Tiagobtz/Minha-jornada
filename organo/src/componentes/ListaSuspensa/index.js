import '../ListaSuspensa/ListaSuspensa.css'

export const ListaSuspensa = (props) => {
    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select value={props.valor} onChange={aoDigitar} required={props.obrigatorio}>
                {
                    props.itens.map(itens => (
                        <option key={itens}>{itens}</option>
                    ))
                }
            </select>
        </div>
    )
}
export default ListaSuspensa