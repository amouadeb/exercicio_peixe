// Configuração do jogo
var config = {
    type: Phaser.AUTO, // O Phaser escolhe automaticamente WebGL ou Canvas
    width: 800,        // Largura da tela do jogo
    height: 600,       // Altura da tela do jogo

    // Configuração das cenas do jogo
    scene: {
        preload: preload, // Carrega os recursos do jogo
        create: create,   // Cria elementos na tela
        update: update    // Atualiza o jogo em tempo real
    }
};


// Criando uma instância do jogo Phaser com as configurações definidas
var game = new Phaser.Game(config);

var peixinho;

// Função responsável por carregar os recursos do jogo
function preload() {
    // Carregando uma imagem chamada "player" a partir de "imagem.jpg"
    this.load.image('mar', 'assets/bg_azul-escuro.png');

    // carregando o peixe
    this.load.image('peixe', 'assets/peixes/peixe_listra.png');
    
    this.load.image('porco', 'assets/Palmeiras_logo.svg.png');
    
    //carregando o logo
    this.load.image('logo', 'assets/logo-inteli_branco.png');
}

// Função chamada depois do preload() para criar os elementos do jogo
function create() {
    // Adicionando a imagem carregada na posição (400, 300)
    this.add.image(400, 300, 'mar');
    
    //adicionar tela do jogo
    this.add.image(400, 525, 'logo').setScale(0.5);

    //adiocionar o peixe na tela
   peixinho = this.add.image(400, 300, 'peixe')
   
   palmeiras = this.add.image(200,300, 'porco').setScale(0.2);


    peixinho.setFlip(true,false);
}

// Função chamada continuamente para atualizar o jogo
function update() {
    // Aqui será adicionada a lógica para movimentação e interações
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}
            