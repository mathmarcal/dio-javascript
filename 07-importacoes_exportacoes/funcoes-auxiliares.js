
const entrada = [5, 10, 50, 98, 23, 45, 78, 99, 100, 30, 1, 69, 4];
let i = 0


function gets () { 
    const valor = entrada[i];
    i++;
    return valor
}



function print (texto) {
    console.log(texto);
}

module.exports =  {
    gets,
    print
}