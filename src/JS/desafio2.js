"use strict";
var profissao;
(function (profissao) {
    profissao["Padeiro"] = "Padeiro";
    profissao["Atriz"] = "Atriz";
    profissao["Dev"] = "Dev";
    profissao["Mecanico"] = "Mecanicoc";
    profissao["Enfermeira"] = "Enfermeira";
})(profissao || (profissao = {}));
var pessoa1 = { nome: "Gabriel", idade: 23, profissao: profissao.Dev };
var pessoa2 = { nome: "Geovanna", idade: 19, profissao: profissao.Enfermeira };
var pessoa3 = { nome: "Caua", idade: 7 };
var pessoa4 = {
    nome: "Karen",
    idade: 25,
    profissao: profissao.Enfermeira
};
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
