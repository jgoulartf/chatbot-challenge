import { ChatBot } from "./chat_bot.js";

// Instanciando chatbot
const bot = new ChatBot()  

// Escutando o input de nova mensagem
document.addEventListener('DOMContentLoaded', async () => {
    const newMessageInput = document.getElementById("new-message");

    const handleNewMessage = () => {
        const message = newMessageInput.value;
        console.log(bot.estadoAtual)
        sendMessage(message);                   // Envia mensagem
        
        // Loop principal do chatbot
        switch (bot.estadoAtual) {
            case 0:
                // Saudação inicial do bot
                sendBotMessage(bot.saudacaoInicial())
                
                break;
            case 1:
                bot.processaSaudacao(msg)
                sendBotMessage(bot.financeiro())
            default:
                resposta = "Não compreendo essa resposta, tente novamente...<br>" + this.saudacaoInicial();
                sendBotMessage(resposta)
                break;
        }
    };
    if (newMessageInput) {
        // Escutando o enter
        newMessageInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                handleNewMessage();
            }
        });

        const sendMessageButton = document.getElementById("new-message-btn");
        // Escutando o botão
        if (sendMessageButton) {
            sendMessageButton.addEventListener("click", handleNewMessage);
        }
    }
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

const sendMessage = async (msg) => {
    const time = await horaFormatada();
    const chatHistorico = document.getElementById('chat-history');    
    
    // Elemento nova mensagem
    const newMessage = document.createElement("li")
    newMessage.className = "clearfix"
    newMessage.innerHTML = 
    `<div class="message-data">
        <span class="message-data-time">${time}, Hoje</span>
    </div>
    <div class="message my-message">
        ${msg}
    </div>`
    
    // Anexa nova mensagem no historico
    chatHistorico.appendChild(newMessage);
    // Atualiza a barra de rolagem
    newMessage.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

const sendBotMessage = async (msg) =>{
    const time = await horaFormatada();
    const chatHistorico = document.getElementById('chat-history');    
    
    // Elemento nova mensagem
    const newMessage = document.createElement("li")
    newMessage.className = "clearfix"
    newMessage.innerHTML = 
    `<div class="message-data text-right">
        <span class="message-data-time">${time}, Hoje</span>
        <img src="assets/bot.png" alt="avatar" />
    </div>
    <div class="message other-message float-right">
        ${msg}
    </div>`
    
    // Anexa nova mensagem no historico
    chatHistorico.appendChild(newMessage);
    // Atualiza a barra de rolagem
    newMessage.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
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



// Funções auxiliares
async function horaFormatada() {
    const data = await new Date();
    const horas = data.getHours().toString().padStart(2, '0'); // adiciona um zero à esquerda se a hora tiver apenas um dígito
    const minutos = data.getMinutes().toString().padStart(2, '0'); // adiciona um zero à esquerda se os minutos tiverem apenas um dígito
    return `${horas}:${minutos}`;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 