import {GeoForms} from "@/components/geoForms"
import { Person } from "@/components/person";

function Page(){
  return (
    <div>
      <h1 className="font-bold text-5xl">Olá, mundo!</h1>
      <h3>Outro teste</h3>

      <GeoForms/>
      <Person/>
      <Person/>
    </div>
  );
}

export default Page