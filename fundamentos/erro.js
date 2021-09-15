function tratarErroELancar(error) {
    throw new Error("Erro!")
    throw 10
    throw true
    throw 'mensagem'
    throw {
        nome: error.name,
        msg: error.message,
        date: new Date 
    }
}

function imprimirNome(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (error) {
        tratarErroELancar(error)
    } finally {
        console.log("Final")
    }
    
}

const obj = { name: 'Jonatas'}
imprimirNome(obj)