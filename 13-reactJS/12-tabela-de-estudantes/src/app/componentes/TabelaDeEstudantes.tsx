import { estudante } from "../tipos/estudante"

type Props = {
    estudantes: estudante[]
}

export const TabelaDeEstudantes = ({estudantes}: Props) => {
    return(
        <table className="w-full border border-gray-600 rounded-md overflow-hidden">
            <thead className="text-left border bg-blue-700 text-white rounded-md">
                <tr className="text-left border-b border-gray-600 bg-gray-800">
                    <th className="p-3">Aluno</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Nota 1</th>
                    <th className="p-3">Nota 2</th>
                    <th className="p-3">Nota final</th>
                </tr>
            </thead>
            <tbody>
                {
                    estudantes.map(aluno => (
                        <tr key={aluno.id} className="text-gray-800 bg-gray-300 border-b border-gray-600">

                            <td className="flex items-center p-3">
                                <img className="w-20 h-20 rounded-full " src={aluno.avatar} alt={aluno.nome} />
                                <div className="p-3">
                                    <div className="font-bold">{aluno.nome}</div>
                                    <div>{aluno.email}</div>
                                </div>
                            </td>

                            <td>
                                {aluno.ativo && <span className="px-2 p-y1 inline-block border border-green-800 rounded-md bg-green-600 text-white text-xs">Ativo</span>}
                                {!aluno.ativo && <span className="px-2 p-y1 inline-block border border-red-800 rounded-md bg-red-600 text-white text-xs">Inativo</span>}
                            </td>

                            <td>{(aluno.nota1).toFixed(1)}</td>
                            <td>{(aluno.nota2).toFixed(1)}</td>

                            <td className="font-bold">
                                {aluno.ativo ? ((aluno.nota1 + aluno.nota2) / 2).toFixed(1) : '------'}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}