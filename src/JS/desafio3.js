"use strict";
var botaoAtualizar = document.querySelector('#atualizar-saldo');
var botaoLimpar = document.querySelector('#limpar-saldo');
var soma = document.querySelector('#soma');
var campoSaldo = document.querySelector('#campo-saldo');
var saldoTotal = 0;
limparSaldo();
function somarAoSaldo(soma) {
    if (campoSaldo !== null) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        limpaCampoSaldo();
    }
}
function limpaCampoSaldo() {
    soma.innerHTML = '';
}
function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener("click", function () {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar.addEventListener("click", function () {
    limparSaldo();
});
