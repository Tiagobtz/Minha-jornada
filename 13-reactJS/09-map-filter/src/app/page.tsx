import { listaPessoas } from "@/dados/listaPessoas"

export const Page = () => {
  // Utilizando o filter
  const programadores = listaPessoas.filter(pessoa => pessoa.profissao === 'Programador')

  return(
    // Utilizando o map
    <>
      <div className="p-3 flex flex-col  items-center">
        <h2 className="text-3xl">Lista de profissionais</h2>
        {listaPessoas.length > 0 &&
          <ul className="mb-3">
          {listaPessoas.map(pessoa =>
          <li>
            {pessoa.nome} - {pessoa.profissao}
          </li>)}
        </ul>
        }
        <h2 className="text-3xl">Lista de programadores</h2>
        <ul>
          {programadores.map(programador =>
          <li>
            {programador.nome}
          </li>)}
        </ul>
      </div>
    </>
  )
}
export default Page