import { ListaPessoas } from "@/dados/listaPessoas"

const Page = () => {

  const lista = ListaPessoas.map(pessoa => <li key={pessoa.id}> - id: {pessoa.id} {pessoa.nome} - {pessoa.profissao}</li>)

  return (
    <div>
      <h1>Lista de pessoas</h1>
      <ul>
        {lista}
      </ul>
    </div>
  )
}

export default Page