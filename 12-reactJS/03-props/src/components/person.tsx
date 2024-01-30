type Props = {
    nome: string;
    avatar: string;
    cargos: string[];
}

export const Person = ({nome, avatar, cargos}: Props) => {
    return (
        <div className="p-3">
            <h1 className="font-bold">{nome}</h1>
                <img className="w-80"
                src={avatar}
                alt={nome}
                />
                
                <ul>
                    <li>- {cargos[0]}</li>
                    <li>- {cargos[1]}</li>
                </ul>
        </div>
    )
}