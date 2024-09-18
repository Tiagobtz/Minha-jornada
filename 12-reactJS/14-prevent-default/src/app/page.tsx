"use client"

import { FormEvent } from "react"

export const Page = () => {
  const enviar = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert('Enviando...')
  }

  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl mb-3">Login</h1>
      <form onSubmit={enviar}>
        <input className="border border-gray-500" type="text" />
        <input className="bg-blue-700 text-white p-1 rounded-md ml-2" type="submit" value="Enviar" />
      </form>
    </div>
  )
}
export default Page