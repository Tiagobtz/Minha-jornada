"use client"

import { useState } from "react"
import { Lista } from "./types/Lista"

export const Page = () => {
  const [lista, setLista] = useState<Lista[]>([
    {id: 0, label: 'Acordar cedo', checked: false}
  ])

  const [itemInput, setItemInput] = useState('')

  const adicionarItem = () => {
    if (itemInput.trim() === '') return
    setLista(
      [...lista, {id: lista.length, label: itemInput, checked: false}]
    )
    setItemInput('')
  }

  const deletarItem = (id: number) => {
    setLista(
      lista.filter(item => item.id !== id)
    )
  }

  const checarItem = (id: number) => {
    let novaLista = [...lista]

    for (let i in novaLista) {
      if (novaLista[i].id === id){
        novaLista[i].checked = !novaLista[i].checked
      }
    }
    setLista(novaLista)
  }

  return(
    <div className="w-screen h-screen flex flex-col items-center mt-10 p-3">
      <h1 className="text-4xl">Lista de tarefas</h1>
      <div className="border border-gray-800 bg-gray-500 rounded-md p-5 mt-5">
        <input type="text" placeholder="Digite o que deseja fazer" className="border border-gray-800 rounded-md p-3" value={itemInput} onChange={e => setItemInput(e.target.value)}/>
        <button className="text-white font-semibold m-3" onClick={adicionarItem}>Adicionar</button>
      </div>
      <p className="font-semibold mt-5">
        {lista.length}
        {lista.length > 1 ? ' Itens na lista' : ' Item na lista'}
      </p>
      <ul className="mt-5 text-xl">
        {
          lista.map(item => (
            <li key={item.id}>
              <input type="checkbox" className="w-4 h-4 mr-3" checked={item.checked} onClick={() => checarItem(item.id)}/>
              {item.label} - <button className="hover:underline" onClick={() => deletarItem(item.id)}>[ Deletar ]</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
export default Page