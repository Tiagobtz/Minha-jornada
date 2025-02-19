import {GeoForms} from "@/components/geoForms"
import { Person } from "@/components/person";

function Page(){
  return (
    <div>
      <Person
        nome="Elon Musk"
        avatar="https://classic.exame.com/wp-content/uploads/2021/04/Elon-Musk.jpg?quality=70&strip=info&w=1024"
        cargos={['CEO da Tesla', 'CEO da SpaceX']}
      />

      <Person
        nome="Jeff Bezos"
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpqzieAUUgiih-DtmjPr1VMV8yuritpT8aZw&usqp=CAU"
        cargos={['CEO da Amazon', 'CEO da Blue Origin']}
      />
    </div>
  );
}

export default Page