const botaoAtualizar = document.querySelector('#atualizar-saldo');
const botaoLimpar = document.querySelector('#limpar-saldo');
const soma = document.querySelector('#soma') as HTMLInputElement;
const campoSaldo = document.querySelector('#campo-saldo');

let saldoTotal = 0;

limparSaldo();

function somarAoSaldo(soma : number){
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

botaoAtualizar?.addEventListener("click", ()=>{
    somarAoSaldo(Number( soma.value));
});

botaoLimpar!.addEventListener("click", ()=>{
    limparSaldo();
})

