// 1. Mapear os elementos do HTML que vamos usar
// Buscamos o botão pelo ID 'botao-cor'
const botao = document.getElementById('botao-cor');

// 2. Lista de cores que o site pode assumir (Array)
// Os alunos podem adicionar novos códigos de cores hexadecimais aqui!
const cores = ['#1b7516', '#552d0c', '#5ec843', '#eaf33c', '#a47532', '#f4f7f6'];
let indiceCor = 0;

// 3. Criar a função que muda a cor de fundo do body
function mudarCorDeFundo() {
    // Aplica a cor atual do array ao estilo do body
    document.body.style.backgroundColor = cores[indiceCor];
    
    // Avança para a próxima cor da lista
    indiceCor++;
    
    // Se chegar ao fim da lista de cores, volta para a primeira (zero)
    if (indiceCor >= cores.length) {
        indiceCor = 0;
    }
}

// 4. Ouvir o clique do usuário
// Quando o usuário CLICAR no botão, a função 'mudarCorDeFundo' será executada
botao.addEventListener('click', mudarCorDeFundo);