type Props = {
    frase: string
    autor: string
}

export const Card = ({frase,autor}: Props) => {
    return (
        <div className="w-96 ml-5 border-2 border-red-600 p-3 text-3xl text-center">
            <h1 className="text-3xl font-bold italic">{frase}</h1>
            <p className="text-sm text-right">{autor?? 'Autor desconhecido'}</p>
        </div>
    )
}