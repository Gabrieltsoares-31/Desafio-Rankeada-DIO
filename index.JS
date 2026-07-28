console.log ("Essa é a sua jornada Rankeada")
console.log("Seu saldo de vitorias é 256")
console.log("Seu saldo de derrotas é 174")

let resultado = soma(256, 174)
let nivel

function soma(numA, numB){
    let somatorio =numA - numB
    return somatorio
}


if ( resultado <= 10){nivel ="Ferro"
    
}

else if (resultado >= 11 && resultado <= 20){ nivel = "Bronze"
}
else if (resultado >= 21 && resultado <= 50){  nivel = "Prata"
}
else if (resultado >= 51 && resultado <= 80){ nivel = "Ouro"
}
else if (resultado >= 81 && resultado <= 90){ nivel ="Diamante"
}
else if (resultado >= 91 && resultado <= 100){ nivel = "Lendário"
}
else if (resultado >= 101){ nivel = "Imortal"
}

console.log ("O Heroi tem o saldo total de " + resultado, "e está no nivel de " + nivel)