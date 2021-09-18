const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
            console.log("Perfeito")
            break;
        case 9:
            console.log("Muito bom")
            break;
        case 8:
            console.log("Bom")
            break;
        case 7:
            console.log("Na média")
            break;
        case 6: case 5: case 4:
            console.log("Recuperação")
            break;
        case 3: case 2: case 1: case 0:
            console.log("Reprovado")
            break;            
        default:
            console.log("Nota inválida")
            break;
    }
}