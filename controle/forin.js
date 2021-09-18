const notas = [6.7, 5.4, 7.2, 10]

for (let i in notas) {

    console.log(i, notas[i])
}

const pessoa = {
    nome: "Jonatas",
    cpf: "43243214321431",
    telefone: "48 99627-6441"


}

for (let atributo in pessoa) {
    console.log(atributo, pessoa[atributo]) 
}