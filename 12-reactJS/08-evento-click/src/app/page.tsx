"use client"

export const Page = () => {
  function clicarBotao(){
    alert('Você clicou')
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button onClick={clicarBotao} className="border bg-blue-700 rounded-md p-3 font-bold text-white hover:bg-blue-500">Clique aqui</button>
    </div>
  )
}

export default Page