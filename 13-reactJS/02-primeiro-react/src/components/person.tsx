const diaSemana = (today: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(today)
}

export const Person = () => {
    const dados = {
        nome: 'Elon Musk',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMuHe-3JSEgF01cxB3hEuNnksRE-bmYlIujg&usqp=CAU',
        cargos: ['CEO da Tesla', 'CEO da SpaceX']
    }

    const today: Date = new Date()

    return (
        <>
            <h1>{dados.nome} - {diaSemana(today)}</h1>
            <img className="w-80" src={dados.imagem} alt={dados.nome} />
            <ul>
                <li>{dados.cargos[0]}</li>
                <li>{dados.cargos[1]}</li>
            </ul>
        </>
    )
}