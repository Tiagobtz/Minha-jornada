import {Card} from "@/app/components/Card"

const Page = () => {
  return (
    <div>
      <h1>Children</h1>
      <Card>
        <>
        <h2 className="font-bold text-3xl italic">"Frase de efeito"</h2>
        <p className="text-right text-sm">- Autor desconhecido</p>
        </>
      </Card>
    </div>
  )
}

export default Page