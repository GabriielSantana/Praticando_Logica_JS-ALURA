let valorTotal;
limpar();

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valor = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let listaProdutos = document.getElementById('lista-produtos');
    let precos = quantidade * valor;

     if(quantidade == '' || quantidade == 0) {
        alert('A quantidade está zerada!');
        return;
    }
    
    listaProdutos.innerHTML = listaProdutos.innerHTML +`<section class="carrinho__produtos__produto">
                                                        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${precos}</span>
                                                        </section>`;

    valorTotal = valorTotal + precos;      
    let campoTotal = document.getElementById('valor-total');
    
    campoTotal.textContent = `R$ ${valorTotal}`

    document.getElementById('quantidade').value = '';

}

function limpar(){
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerText = 'R$0';
}