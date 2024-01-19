import {Square} from "./Square"
import {Circle} from "./Circle"

export const GeoForms = () => {
    return (
        <div>
            <h3 className="text-2xl font-bold">Figuras geométricas</h3>
            <div className="flex gap-2 border-2 p-3">
                <Square/>
                <Circle/>
            </div>
        </div>

    )
}