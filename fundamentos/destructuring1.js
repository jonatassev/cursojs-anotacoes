// Novo recurso ES2015
// Utilizado para retirar atributos de um objeto

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Maria',
    idade: 15,
    endereco: {
        cidade: 'Tubarão',
        estado: "SC",
        pais: "Brasil"
    }
}
// retirando o atributo de forma convencional:

let nomeDaPessoa = pessoa.nome
console.log(nomeDaPessoa)

// com destructuring:

const {nome, sobrenome} = pessoa

console.log(nome, sobrenome)

// desta forma, com uma linha, retiramos atributos da variável e atribuimos as suas respectivas variáveis

// Da forma a seguir, alteramos os nomes das variáveis

const {nome: n, sobrenome: s} = pessoa
console.log(n,s)

// quando definimos um atributo que não existe, ele retorna undefined
// para evitarmos isso, atribuímos um valor padrão, assim se não tiver nada definido ele retorna o valor padrão
const {sexo, altura = 0.0 } = pessoa 

// Objeto dentro de objeto
const { endereco: {cidade, estado}} = pessoa