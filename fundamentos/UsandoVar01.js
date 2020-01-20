// Escopo de uma variável
{
    {
        {
            {
                {
                    {
                         var sera = 'Será????'
                         console.log(sera) // A variavel é visivel por aqui
                    }
                }
            }   
        }
    }
}

console.log(sera)
// Isso será visivel também

function teste() {
    var local = 123
}
teste()
console.log(local)
// Isso não é visivel pois está dentro da função