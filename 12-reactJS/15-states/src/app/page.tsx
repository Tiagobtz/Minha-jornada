"use client"

import { useState } from "react"
import { Lista } from "./types/Lista"

// ARRAYS COM STATES

export const Page = () => {
  const [lista, setLista] = useState<Lista[]>([
    {label: 'Estudar a noite', checked: false},
    {label: 'Tomar banho antes de dormir', checked: false},
  ])

  const [itemInput, setItemInput] = useState('')

  const botaoAdcionar = () => {
    if (itemInput.trim() === '') return
    setLista([
      ...lista, {label: itemInput, checked: false},
    ])
    setItemInput('')
  }

  const deletarItem = (index: number) => {
    setLista(
      lista.filter((item, key) => key !== index)
    )
  }

  return(
    <div className="w-screen h-screen flex flex-col items-center mt-5">
      <h1 className="text-4xl">Lista de tarefas</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border border-gray-800">
        <input type="text" placeholder="O que deseja fazer?" className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3" value={itemInput} onChange={e => setItemInput(e.target.value)}/>
        <button className="text-white font-semibold" onClick={botaoAdcionar}>Adcionar</button>
      </div>

      <p>{lista.length} Itens na lista</p>

      <ul className="w-full max-w-lg list-disc pl-5 text-2xl">
        {
          lista.map((item, index) => (
            <li key={index}>{item.label} - <button onClick={() => deletarItem(index)}>[ Deletar ]</button></li>
          ))
        }
      </ul>
    </div>
  )
}
export default Page






/*
import { pessoa } from "./types/pessoa"

// ATUALIZANDO OBJETOS COM STATES

export const Page = () => {
  const [nomeCompleto, setNomeCompleto] = useState<pessoa>({nome: 'Tiago', sobrenome: 'Henrique'})
  const botaoLimpar = () => {
    setNomeCompleto({nome: '', sobrenome: ''})
  }

  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <input type="text" className="border border-gray-800 rounded-md p-3" placeholder="Digite seu nome" value={nomeCompleto.nome} onChange={e => setNomeCompleto({...nomeCompleto, nome: e.target.value})} />
      <input type="text" className="border border-gray-800 rounded-md p-3 mt-3" placeholder="Digite seu sobrenome" value={nomeCompleto.sobrenome} onChange={e => setNomeCompleto({...nomeCompleto, sobrenome: e.target.value})} />
      <p className="mt-3">Seu nome completo é:</p>
      <p className="font-bold mt-3">{nomeCompleto.nome} {nomeCompleto.sobrenome}</p>
      <button className="border bg-blue-600 text-white p-3 rounded-md mt-3" onClick={botaoLimpar}>Limpar tudo</button>
    </div>
  )
}
export default Page
*/

/*
export const Page = () => {
  const [inputText, setInputText] = useState('')
  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center font-bold text-3xl">
      <input 
        className="border border-black p-3 rounded-md text-xl" 
        type="text" placeholder="Digite um nome" 
        value={inputText} 
        onChange={e => setInputText(e.target.value)}
      />
      <p>{inputText}</p>
    </div>
  )
}
export default Page
*/


/*
export const Page = () => {
  const [count, setCount] = useState(0)

  const aoClicar =  () => {
    setCount(count + 1)
  }

  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center font-bold text-3xl">
      <p>{count}</p>
      <button onClick={aoClicar} className="bg-blue-600 p-3 rounded-md text-white">+1</button>
    </div>
  )
}

export default Page
*/

/*
export const Page = () => {
  const [segredo, setSegredo] = useState(false)

  const mostrarSegredo = () => {
    setSegredo(!segredo)
  }

  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center text-white text-3xl font-bold">
      <button onClick={mostrarSegredo} className="bg-blue-600 rounded-md p-3 hover:bg-blue-500">{segredo ? 'Ocultar' : 'Mostrar'}</button>
      {segredo && <p className="bg-red-600 rounded-md p-3 mt-5">Área secreta</p>}
    </div>
  )
}
export default Page
*/