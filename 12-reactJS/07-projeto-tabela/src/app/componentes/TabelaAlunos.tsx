import { estudante } from "../tipos/estudante"

type Props = {
    estudantes: estudante[]
}

export const TabelaAlunos = ({estudantes}: Props) => {
    return (
       <table className="w-full text-left border border-gray-800 rounded-md bg-gray-500 overflow-hidden text-white">
            <thead className="border-b border-gray-800 bg-gray-800">
                <tr>
                    <th className="p-3">Aluno</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Primeira nota</th>
                    <th className="p-3">Segunda nota</th>
                    <th className="p-3">Nota final</th>
                </tr>
            </thead>

            <tbody className="text-white">
                {estudantes.map(item => (
                    <tr className="border-b border-gray-800">
                        <td className="flex items-center p-5">
                            <img src={item.avatar} alt={item.nome} className="w-20 h-20 rounded-full"/>
                            <div className="ml-5">
                                <div className="font-bold mb-2">{item.nome}</div>
                                <div>{item.email}</div>
                            </div>
                        </td>
                        <td>
                            {item.ativo && <div className="border border-green-800 rounded-md bg-green-600 text-white font-bold inline-block px-5 py-1">Ativo</div>}
                            {!item.ativo && <div className="border border-red-800 rounded-md bg-red-600 text-white font-bold inline-block px-3 py-1">Inativo</div>}
                        </td>
                        <td className="px-10 font-bold">{(item.nota1).toFixed(1)}</td>
                        <td className="px-10 font-bold">{(item.nota2).toFixed(1)}</td>
                        <td className="px-10 font-bold">{item.ativo ? ((item.nota1 + item.nota2) / 2).toFixed(1) : '---'}</td>
                    </tr>
                ))}
            </tbody>
       </table>
    )
}