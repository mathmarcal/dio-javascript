const entrada = [5, 3, 4, 10, 8, 1];
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