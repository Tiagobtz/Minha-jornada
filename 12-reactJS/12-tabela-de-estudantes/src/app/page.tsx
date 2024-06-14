import { TabelaDeEstudantes } from "./componentes/TabelaDeEstudantes"
import { estudantes } from "./dados/estudantes"

export const Page = () => {
  return(
    <div className="container mx-auto">
      <h2 className="text-4xl text-center m-3">Lista de estudantes</h2>
      <TabelaDeEstudantes estudantes={estudantes}/>
    </div>
  )
}
export default Page