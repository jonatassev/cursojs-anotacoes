// String é uma cadeia de caracteres

const escola = "Cod3r"

// CharAt diz o caracter com o indice referido:
console.log(escola.charAt(4))
console.log(escola.charAt(5))

// Codigo na tabela unicode: 
console.log(escola.charCodeAt(3))

// Indida o indice encrontrado pelo caracter (No caso "d")
console.log(escola.indexOf('d'))

// Mostra os caracteres encontrados a partir no indice indicado (No caso "1")
console.log(escola.substring(1))

// Mostra os caracteres entre os indices ( 1 , 3  no caso)
console.log(escola.substring(0, 3))

// Com string podemos concatenar

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola '.concat(escola).concat("!"))

// Troca as letras inseridas no regex para 'e' no caso
console.log(escola.replace(/\w/, 'e'))

// Converte String para o Array, separando pelo caracter ','
console.log('Ana,Pedro,João'.split(','))