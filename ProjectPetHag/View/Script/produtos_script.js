function adicionarProdutos(quantidade) {
    for (var i = 0; i < quantidade; i++) {
        // Cria uma nova div de produto
        var novaDiv = document.createElement("div");
        novaDiv.className = "card-prod";

        // Conteúdo da div de produto sem o número
        novaDiv.innerHTML = `
      <div class="card-prod">
                    <div class="img-card">
                        <img src="../img/DogCatLogo.png" alt="">
                    </div>
                    <div class="tit-card">
                        <p>TITULOTITULOTITULOTITULOTITULOTITULOTITULOTITULO</p>
                    </div>
                    <div class="estrelas">

                        <img src="../img/estrelaCheia.png" alt="">
                        <img src="../img/estrelaCheia.png" alt="">
                        <img src="../img/estrelaCheia.png" alt="">
                        <img src="../img/estrelaCheia.png" alt="">
                        <img src="../img/estrelaVazia.png" alt="">
                        <p>(20)</p>
                    </div>
                    <div class="preco-card">
                        <h3>R$19,99</h3>
                    </div>
                    <div class="desc-card">
                        <h5>De:</h5>
                        <h4>R$ 29,99 </h4>
                    </div>
                    <div class="btn-card">
                        <input type="button" class="ir-para-carrinho" value="ir para o carrinho">
                    </div>
                </div>
    `;


        // Adiciona a nova div ao container de produtos
        document.getElementById("produtos").appendChild(novaDiv);
    }
}// Adiciona um ouvinte de evento ao botão "Adicionar ao Carrinho"
var botaoAdicionarAoCarrinho = novaDiv.querySelector(".adicionar-ao-carrinho");
botaoAdicionarAoCarrinho.addEventListener("click", function () {
    // Exibe a seção de detalhes do produto quando o botão é clicado
    var detalhesProduto = novaDiv.querySelector(".detalhes-produto");
    detalhesProduto.style.display = "block";
});

// Chama a função para adicionar 5 produtos quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", function () {
    adicionarProdutos(20);
});