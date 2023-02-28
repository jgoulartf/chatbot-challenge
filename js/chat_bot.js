class ChatBot {
    // Construtor da classe
    constructor() {
        msgAtual = 0;       // Variável para controlar mensagem atual do bot                  
    }

    // Mensagem inicial do bot
    saudacaoInicial() {
        return `Olá, sou o chatbot da TeleSoftware!
        Estou aqui para te direcionar ao melhor atendimento
        Digite (1) para Financeiro
        Digite (2) para Orçamentos
        Digite (3) para Planos
        Digite (4) para Cancelamento`;
    }

    // Mensagem inicial do setor financeiro
    financeiro(){
        return `Você está no setor financeiro!
        Qual das opções abaixo mais se encaixa na sua questão?
        Digite (1) para Segunda via de fatura
        Digite (2) para Contestamento de fatura
        Digite (3) para Alteração cadastral
        Digite (0) para Ir ao menu anterior`
    }

    // Mensagem inicial do setor orçamentário
    orcamento(){
        return `Você está no setor de orçamentos!
        Qual das opções abaixo mais se encaixa na sua questão?
        Digite (1) para Novo orçamento
        Digite (2) para Contestar orçamento feito
        Digite (0) para Ir ao menu anterior`
    }

    // Mensagem inicial do setor de planos
    planos(){
        return `Você está no setor de Planos!
        Qual das opções abaixo mais se encaixa na sua questão?
        Digite (1) para Consultar seu plano atual
        Digite (2) para Verificar os planos existentes
        Digite (0) para ir ao menu anterior`
    }

    // Mensagem inicial do setor de cancelamento
    cancelamento(){
        return `Você está no setor de Cancelamento!
        Nossa! Parece que infelizmente não estamos te agradando
        e você não quer mais os nossos serviços, irei chamar um 
        de nossos especialistas para te auxiliar.`
    }

    // Processa resposta do usuário a saudação inicial
    processaSaudacao(msg) {
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