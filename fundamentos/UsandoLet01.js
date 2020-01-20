var numero = 1
{
    let numero = 2 // Let é visível apenas dentro de seu escopo
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)
