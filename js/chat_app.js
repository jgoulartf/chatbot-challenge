// Escutando o input de nova mensagem
document.addEventListener('DOMContentLoaded', () => {
    const newMessageInput = document.getElementById("new-message");

    const handleNewMessage = () => {
        const message = newMessageInput.value;

        sendMessage(message);
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


const sendMessage = (msg) => {
    time = horaFormatada();
    const chatHistorico = document.getElementById('chat-history');
    console.log(msg)

    

    chatHistorico.appendChild();
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


const createOtherMessage = (msg) => {
    time = horaFormatada();
    const chatHistorico = document.getElementById('chat-history');

    chatHistorico.appendChild();
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 



// Funções auxiliares
function horaFormatada() {
    const data = new Date();
    const horas = data.getHours().toString().padStart(2, '0'); // adiciona um zero à esquerda se a hora tiver apenas um dígito
    const minutos = data.getMinutes().toString().padStart(2, '0'); // adiciona um zero à esquerda se os minutos tiverem apenas um dígito
    return `${horas}:${minutos}`;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 