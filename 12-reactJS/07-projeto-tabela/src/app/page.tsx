import { TabelaAlunos } from "./componentes/TabelaAlunos"
import { estudantes } from "./dados/estudantes"

export const Page = () => {
  return (
    <div className="p-3 mt-5">
      <h1 className="mb-5 text-5xl text-center font-bold">Lista de alunos</h1>
      <TabelaAlunos estudantes={estudantes}/>
    </div>
    
  )
}

export default Page