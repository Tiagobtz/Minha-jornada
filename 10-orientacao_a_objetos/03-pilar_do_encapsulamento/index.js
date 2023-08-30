class Tv {
    constructor(){
        this._relacaoDeCanais = [2, 5, 7, 10]
        this._canalAtivo = 5
        this._volume = 4
    }

    // O get é utilizado para recuperarmos um valor de algum atributo privado e adciona-lo a uma pseudo-variável

    get canalAtivo(){
        return this._canalAtivo
    }

    // O set é utilizado quando queremos alterar o valor de um determinado atributo, utilizando alguma lógica

    set canalAtivo(canal){
        if (this._relacaoDeCanais.indexOf(canal) !== -1){
            this._canalAtivo = canal
        }
    }
}

let tv = new Tv()

tv.canalAtivo = 10
console.log(tv.canalAtivo)