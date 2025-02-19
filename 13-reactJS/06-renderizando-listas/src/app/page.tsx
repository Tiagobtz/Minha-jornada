import { ListaPessoas } from "@/dados/listaPessoas"

const Page = () => {

  const lista = ListaPessoas.map(pessoa => <li key={pessoa.id}> - id: {pessoa.id} {pessoa.nome} - {pessoa.profissao}</li>)
  const programadores = ListaPessoas.filter(pessoa => pessoa.profissao === 'Programador')

  return (
    <div>
      <h1>Lista de profissionais</h1>
      <ul>
        {lista}
      </ul>

      <div>
        <h2>Lista de programadores</h2>
        {programadores.map(progamador => <li key={progamador.id}>{progamador.nome}</li>)}
      </div>
    </div>
  )
}

export default Page