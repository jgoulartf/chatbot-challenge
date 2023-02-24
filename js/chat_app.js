class ChatBot {
    constructor() {
        console.log(this.saudacaoInicial());
    }

    saudacaoInicial() {
        return `Olá, sou o chatbot da TeleSoftware!
        Estou aqui para te direcionar ao melhor atendimento
        Digite (1) para Financeiro
        Digite (2) para Orçamentos
        Digite (3) para promoções
        Digite (4) para Cancelamento`;
    }

    processaMensagem(msg) {

        // Deixando todo o texto minúsculo
        msg = msg.toLowerCase();
        switch (msg) {
            case "1" || "um" || "one":
                return

            case "2" || "dois" || "two":
                return

            case "3" || "três" || "tres" || "three":
                return

            case "4" || "quatro" || "four":
                return

            case "5" || "um" || "one":
                return

            default:
                return "Não compreendo esse código, tente novamente...\n" + this.saudacaoInicial();
        }


    }
}

// Função principal que instacia o chatbot
function bot() {
    bot = new ChatBot();
}

/* 
    Criar funcao para retornar um elemento HTML do tipo MINHA_MENSAGEM que segue o seguinte estilo: 
    
    <li class="clearfix">
        <div class="message-data">
            <span class="message-data-time">10:12 AM, Today</span>
        </div>
        <div class="message my-message">
        TEXTO DA MENSAGEM AQUI
        </div>
    </li>

*/

const createMyMessage = (msg) => {
    time = horaFormatada();
    const chatHistorico = document.getElementById('chat-history');
    
    chatHistorico.appendChild();
}

/*

    Criar funcao para retornar um elemento HTML do tipo BOT_MENSAGEM que segue o seguinte estilo: 

    <li class="clearfix">
        <div class="message-data text-right">
            <span class="message-data-time">10:10 AM, Today</span>
            <img src="assets/bot.png" alt="avatar" />
        </div>
        <div class="message other-message float-right">
            TEXTO DA MENSAGEM AQUI
        </div>
    </li>


*/

function horaFormatada() {
    const data = new Date();
    const horas = data.getHours().toString().padStart(2, '0');      // adiciona um zero à esquerda se a hora tiver apenas um dígito
    const minutos = data.getMinutes().toString().padStart(2, '0');  // adiciona um zero à esquerda se os minutos tiverem apenas um dígito
    return `${horas}:${minutos}`;
}