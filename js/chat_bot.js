export class ChatBot {
    // Construtor da classe
    constructor() {
        this.estadoAtual = 0;       // Variável para controlar mensagem atual do bot                  
    }

    getEstadoAtual(){
        return estadoAtual;
    }
    
    // Mensagem inicial do bot
    saudacaoInicial() {
        return `Olá, sou o chatbot da TeleSoftware!<br>
        Estou aqui para te direcionar ao melhor atendimento<br>
        Digite (1) para Financeiro<br>
        Digite (2) para Orçamentos<br>
        Digite (3) para Planos<br>
        Digite (4) para Cancelamento<br>`;
    }

    // Mensagem inicial do setor financeiro
    financeiro(){
        return `Você está no setor financeiro!<br>
        Qual das opções abaixo mais se encaixa na sua questão?<br>
        Digite (1) para Segunda via de fatura<br>
        Digite (2) para Contestamento de fatura<br>
        Digite (3) para Alteração cadastral<br>
        Digite (0) para Ir ao menu anterior<br>`
    }

    // Mensagem inicial do setor orçamentário
    orcamento(){
        return `Você está no setor de orçamentos!<br>
        Qual das opções abaixo mais se encaixa na sua questão?<br>
        Digite (1) para Novo orçamento<br>
        Digite (2) para Contestar orçamento feito<br>
        Digite (0) para Ir ao menu anterior<br>`
    }

    // Mensagem inicial do setor de planos
    planos(){
        return `Você está no setor de Planos!<br>
        Qual das opções abaixo mais se encaixa na sua questão?<br>
        Digite (1) para Consultar seu plano atual<br>
        Digite (2) para Verificar os planos existentes<br>
        Digite (0) para ir ao menu anterior<br>`
    }

    // Mensagem inicial do setor de cancelamento
    cancelamento(){
        return `Você está no setor de Cancelamento!<br>
        Nossa! Parece que infelizmente não estamos te agradando<br>
        e você não quer mais os nossos serviços, irei chamar um <br>
        de nossos especialistas para te auxiliar.<br>`
    }

    // Processa resposta do usuário a saudação inicial
    processaSaudacao(msg) {
        // Deixando todo o texto minúsculo
        msg = msg.toLowerCase();
        switch (msg) {
            case "1" || "um" || "one":
                this.estadoAtual++;
                return this.financeiro()

            case "2" || "dois" || "two":
                return this.orcamento()

            case "3" || "três" || "tres" || "three":
                return this.planos()

            case "4" || "quatro" || "four":
                return this.cancelamento()

            case "0" || "zero":
                this.estadoAtual = 1;
                return this.saudacaoInicial()

            default:
                return "Não compreendo essa resposta, tente novamente...\n" + this.saudacaoInicial();
        }

    }
    
    // Processa resposta do usuário no setor financeiro
    processaFinanceiro(msg) {
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
                return "Não compreendo essa resposta, tente novamente...\n" + this.financeiro();
        }

    }

    // Processa resposta do usuário no setor financeiro
    processaOrcamento(msg) {
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
                return "Não compreendo essa resposta, tente novamente...\n" + this.orcamento();
        }

    }

    // Processa resposta do usuário no setor de planos
    processaPlanos(msg) {
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
                return "Não compreendo essa resposta, tente novamente...\n" + this.orcamento();
        }

    }
    
    // Processa resposta do usuário no setor de cancelamento
    processaCancelamento(msg) {
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
                return "Não compreendo essa resposta, tente novamente...\n" + this.orcamento();
        }

    }
}