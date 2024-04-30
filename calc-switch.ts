const teclado = require(`prompt-sync`)();
console.clear();

function menu(): string{
    console.log(`Qual operação deseja? Digite: `);
    console.log(`+ --> Adição`);
    console.log(`- --> Subtração`);
    console.log(`* --> Multiplicação`);
    console.log(`/ --> Divisão`);
    console.log(`@ --> Sair`)

    let opcao: string = teclado(`Digite a opção desejada: `);
    return opcao;
}

function entrada(): number{
    let n: number = parseFloat(teclado(`Digite um número: `));
    return n;
}

function soma(): number{
    let n1: number = entrada();
    let n2: number = entrada();
    console.log(`${n1} + ${n2} = ${n1+n2}`)
    let resSom: number = n1 + n2;
    return resSom;
}

function subtracao(): number{
    let n1: number = entrada();
    let n2: number = entrada();
    console.log(`${n1} - ${n2} = ${n1-n2}`)
    let resSub: number = n1 - n2;
    return resSub;
}

function multiplicacao(): number{
    let n1: number = entrada();
    let n2: number = entrada();
    console.log(`${n1} x ${n2} = ${n1*n2}`)
    let resMult: number = n1 * n2;
    return resMult;
}

function divisao(): number{
    let n1: number = entrada();
    let n2: number = entrada();
    console.log(`${n1} : ${n2} = ${n1/n2}`)
    let resDiv: number = n1 / n2;
    return resDiv;
}

switch (menu()){
    case `+` : soma(); break;
    case `-` : subtracao(); break;
    case `*` : multiplicacao(); break;
    case `/` : divisao(); break;
    default: break;
}
