export const Page = () => {

const tempo = new Intl.DateTimeFormat('pt-BR', {
    timeStyle: 'short',
    hour12: false,
}).format()

const hora = new Date().getHours()
// let saudacao = ''

/*if (hora >= 0 && hora < 12 ){
  saudacao = 'Bom dia! 🤠'
} else if (hora >= 12 && hora < 18){
  saudacao = 'Boa tarde! 😄'
} else if (hora >= 18 && hora < 24){
  saudacao = 'Boa noite! 😴'
} */

  return(
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-blue-400 text-white">
        <div className="text-9xl font-bold">{tempo}</div>
        <div className="text-6xl font-bold mb-10">
          {hora >= 0 && hora < 12 && 'Bom dia! 🤠'}
          {hora >= 12 && hora < 18 && 'Boa tarde! 😄'}
          {hora >= 18 && hora <= 23 && 'Boa noite! 😴'}
        </div>
      </div>
  )
}
export default Page