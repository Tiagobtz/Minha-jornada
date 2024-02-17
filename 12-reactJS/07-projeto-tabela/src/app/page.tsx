import { estudantes } from "./dados/estudantes"
import { TabelaAlunos } from "./componentes/TabelaAlunos"

export const Page = () => {
  return (
    <div className="container m-auto">
      <h1 className="mb-5 p-5 text-center text-5xl font-bold">Lista de alunos</h1>
      <TabelaAlunos estudantes={estudantes}/>
    </div>
  )
}

export default Page