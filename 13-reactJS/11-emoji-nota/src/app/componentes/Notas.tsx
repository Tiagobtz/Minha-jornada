import { ReactNode } from "react"

type Props = {
    nota: number
}

export const Notas = ({nota}: Props) => {
    if (nota > 5) nota = 5
    if (nota < 0) nota = 0

    const emoji = ['', '😔', '🙁', '😐', '🙂', '😁']
    const notaInt = Math.floor(nota)
    const stars = `${emoji[notaInt]}`.repeat(notaInt) + '😶'.repeat(5- notaInt)

    return(
        <div className="flex items-center text-6xl">
            <div>{nota.toFixed(1)}</div>
            <div>{stars}</div>
        </div>
    )
}