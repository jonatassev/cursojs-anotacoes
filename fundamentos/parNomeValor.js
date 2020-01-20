const saudacao = 'Opa' // Contexto léxico 1

function exec() {
    const saudacao = 'Falaaaa' // Contexto léxico 1
    return saudacao
}

console.log(saudacao)
console.log(exec())
