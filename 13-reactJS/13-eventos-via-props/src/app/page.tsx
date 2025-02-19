"use client"

import { BotaoCustomizavel } from "@/app/componentes/BotaoCustomizavel"

const Page = () => {
  const onClick1 = () => {
    alert('Clicou 1')
  }

  const onClick2 = () => {
    alert('Clicou 2')
  }

  const onClick3 = () => {
    alert('Clicou 3')
  }

  return(
    <div className="w-screen h-screen flex justify-center items-center">
      <BotaoCustomizavel label="Clique aqui 1" onClick={onClick1}/>
      <BotaoCustomizavel label="Clique aqui 2" onClick={onClick2}/>
      <BotaoCustomizavel label="Clique aqui 3" onClick={onClick3}/>
    </div>
  )
}
export default Page