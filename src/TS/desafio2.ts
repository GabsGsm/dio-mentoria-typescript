interface Pessoa{
    nome : string;
    idade : number;
    profissao? : profissao;
    
}

enum profissao{
    Padeiro = "Padeiro",
    Atriz = "Atriz",
    Dev = "Dev",
    Mecanico = "Mecanicoc",
    Enfermeira = "Enfermeira"
}

let pessoa1 : Pessoa = {nome : "Gabriel", idade : 23, profissao : profissao.Dev};
let pessoa2 : Pessoa = {nome : "Geovanna", idade : 19, profissao : profissao.Enfermeira};
let pessoa3 : Pessoa = {nome : "Caua", idade : 7}
let pessoa4 : Pessoa = {
    nome : "Karen",
    idade : 25,
    profissao : profissao.Enfermeira
}

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);