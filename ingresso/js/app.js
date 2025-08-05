function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);


      if (!quantidade || isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, insira uma quantidade válida maior que zero.");
        limpar();
        return;
    }

    if (tipo === "pista") {
        if (quantidade > qtdPista) {
            alert('Quantidade solicitada maior do que temos disponível na PISTA!');
            limpar();
            return;
        }
        qtdPista -= quantidade;
        document.getElementById('qtd-pista').innerText = `${qtdPista}`;
        alert('Compra realizada com sucesso!');
        limpar();
    } else if (tipo === "superior") {
        if (quantidade > qtdSuperior) {
            alert('Quantidade solicitada maior do que temos disponível no SUPERIOR!');
            limpar();
            return;
        }
        qtdSuperior -= quantidade;
        document.getElementById('qtd-superior').innerText = `${qtdSuperior}`;
        alert('Compra realizada com sucesso!');
        limpar();
    } else if (tipo === "inferior") {
        if (quantidade > qtdInferior) {
            alert('Quantidade solicitada maior do que temos disponível no INFERIOR!');
            limpar();
            return;
        }
        qtdInferior -= quantidade;
        document.getElementById('qtd-inferior').innerText = `${qtdInferior}`;
        alert('Compra realizada com sucesso!');
        limpar();
    }
    
}

function limpar (){
    document.getElementById('qtd').value = '';
}
