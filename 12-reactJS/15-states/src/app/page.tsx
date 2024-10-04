"use client"

import { useState } from "react"
import { pessoa } from "./types/pessoa"

// Atualizando objetos com states

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