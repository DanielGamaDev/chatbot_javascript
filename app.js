const venom = require("venom-bot");  // Criando o venom-bot

// APRESENTAÇÃO E MENU INICIAL

const msg_apresentacao = `Olá, eu sou o FriBot!
Um robô virtual criado para te ajudar a se locomover por Nova Friburgo.
Vamos conhecer a cidade?`;

const menu_inicial = `Escolha uma das opções abaixo digitando apenas o número:
[1] - Turismo (pontos turísticos, restaurantes, shoppings etc.)
[2] - Comprar em lojas de varejo.
[3] - Comprar em lojas de atacado.
[4] - Cancelar conversa.`;

const finalizar_conversa = ` Obrigado por se informar com o FRIBOT!
Caso queira saber mais sobre Nova Friburgo basta escolher novamente uma das opções abaixo:
[1] - Turismo (pontos turísticos, restaurantes, shoppings etc.)
[2] - Comprar em lojas de varejo.
[3] - Comprar em lojas de atacado.
[4] - Cancelar conversa.`;

// MENU TURISMO E SUAS OPÇÕES

// Menu
const menu_turismo = `Você escolheu a opção TURISMO!
Escolha uma das opções abaixo para conhecer:
[1] - Pontos Turísticos.
[2] - Restaurantes.
[3] - Shoppings.
[4] - Voltar para opções anteriores.`;

// Opção 1
const pontos_turisticos = `Pontos Turísticos:
[1] - Pico da Caledônia.
[2] - Teleférico.
[3] - Museu de Friburgo.
[4] - Voltar para o menu de turismo.`;

// Opção 2
const restaurantes = `Restaurantes:
[1] - Pico da Caledônia.
[2] - Teleférico.
[3] - Museu de Friburgo.
[4] - Voltar para o menu de turismo.`;

// Opção 3
const shoppings = `Shoppings:
[1] - Pico da Caledônia.
[2] - Teleférico.
[3] - Museu de Friburgo.
[4] - Voltar para o menu de turismo.`;

// MENU VAREJO E SUAS OPÇÕES

// Menu
const menu_varejo = `Você escolheu a opção COMPRAR EM LOJAS DE VAREJO!
Escolha uma das opções abaixo:
[1] - Lingerie.
[2] - Pijamas.
[3] - Cuecas.
[4] - Presentes.
[5] - Voltar para opções anteriores.`;

// Opção 1
const lingerie_varejo = `Pontos Turísticos:
[1] - Pico da Caledônia.
[2] - Teleférico.
[3] - Museu de Friburgo.
[4] - Voltar para o menu de turismo.`;

// Opção 2
const pijamas_varejo = `Restaurantes:
[1] - Pico da Caledônia.
[2] - Teleférico.
[3] - Museu de Friburgo.
[4] - Voltar para o menu de turismo.`;

// Opção 3
const cuecas_varejo = `Shoppings:
[1] - Pico da Caledônia.
[2] - Teleférico.
[3] - Museu de Friburgo.
[4] - Voltar para o menu de turismo.`;

// Opção 4
const presentes_varejo = `Shoppings:
[1] - Pico da Caledônia.
[2] - Teleférico.
[3] - Museu de Friburgo.
[4] - Voltar para o menu de turismo.`;

// MENU ATACADO E SUAS OPÇÕES

// Menu
const menu_atacado = `Você escolheu a opção COMPRAR EM LOJAS DE ATACADO!
Escolha uma das opções abaixo:
[1] - Lingerie.
[2] - Pijamas.
[3] - Cuecas.
[4] - Aviamentos.
[5] - Voltar para opções anteriores.`;

// Opção 1
const lingerie_atacado = `Pontos Turísticos:
[1] - Pico da Caledônia.
[2] - Teleférico.
[3] - Museu de Friburgo.
[4] - Voltar para o menu de turismo.`;

// Opção 2
const pijamas_atacado = `Restaurantes:
[1] - Pico da Caledônia.
[2] - Teleférico.
[3] - Museu de Friburgo.
[4] - Voltar para o menu de turismo.`;

// Opção 3
const cuecas_atacado = `Shoppings:
[1] - Pico da Caledônia.
[2] - Teleférico.
[3] - Museu de Friburgo.
[4] - Voltar para o menu de turismo.`;

// Opção 4
const aviamentos_atacado = `Shoppings:
[1] - Pico da Caledônia.
[2] - Teleférico.
[3] - Museu de Friburgo.
[4] - Voltar para o menu de turismo.`;


// DEVLARAÇÃO DE VARIÁVEIS
let conversa_iniciada = false;
let client;
let opcao_turismo = false;
let opcao_varejo = false;
let opcao_atacado = false;
let opcao_parar_conversa = false;


// CÓDIGO PRINCIPAL

venom.create({
    session: "chatbot-FriBot",
    multidevice: true
}).then((cli) => {
    client = cli;
    start();
}).catch((err) => console.log(err));

const start = () => {
    client.onMessage(async (message) => {
        if (!conversa_iniciada) {
            conversa_iniciada = true;
            await client.sendText(message.from, msg_apresentacao);
            await client.sendText(message.from, menu_inicial);
        } else {
            if(!opcao_parar_conversa){
                handleUserResponse(message);
            }
        }
    });
};

const handleUserResponse = async (message) => {
    if (opcao_turismo) {
        opcao_turismo = false;
        switch (message.body) {
            case "1":
                await client.sendText(message.from, pontos_turisticos);
                await client.sendText(message.from, finalizar_conversa);
                break;
            case "2":
                await client.sendText(message.from, restaurantes);
                await client.sendText(message.from, finalizar_conversa);
                break;
            case "3":
                await client.sendText(message.from, shoppings);
                await client.sendText(message.from, finalizar_conversa);
                break;
            case "4":
                await client.sendText(message.from, "Voltando ao início...");
                await client.sendText(message.from, menu_inicial);
                start();
                break;
            default:
                await client.sendText(message.from, "Opção não reconhecida. Por favor, escolha novamente.");
                client.sendText(message.from, menu_turismo);
        }
    } else if (opcao_varejo) {
        opcao_varejo = false;
        switch (message.body) {
            case "1":
                await client.sendText(message.from, lingerie_varejo);
                await client.sendText(message.from, finalizar_conversa);
                break;
            case "2":
                await client.sendText(message.from, pijamas_varejo);
                await client.sendText(message.from, finalizar_conversa);
                break;
            case "3":
                await client.sendText(message.from, cuecas_varejo);
                await client.sendText(message.from, finalizar_conversa);
                break;
            case "4":
                await client.sendText(message.from, presentes_varejo);
                await client.sendText(message.from, finalizar_conversa);
                break;
            case "5":
                await client.sendText(message.from, "Voltando ao início...");
                await client.sendText(message.from, menu_inicial);
                start();
                break;
            default:
                await client.sendText(message.from, "Opção não reconhecida. Por favor, escolha novamente.");
                client.sendText(message.from, menu_varejo);
        }
    } else if (opcao_atacado) {
        opcao_atacado = false;
        switch (message.body) {
            case "1":
                await client.sendText(message.from, lingerie_atacado);
                await client.sendText(message.from, finalizar_conversa);
                break;
            case "2":
                await client.sendText(message.from, pijamas_atacado);
                await client.sendText(message.from, finalizar_conversa);
                break;
            case "3":
                await client.sendText(message.from, cuecas_atacado);
                await client.sendText(message.from, finalizar_conversa);
                break;
            case "4":
                await client.sendText(message.from, aviamentos_atacado);
                await client.sendText(message.from, finalizar_conversa);
                break;
            case "5":
                await client.sendText(message.from, "Voltando ao início...");
                await client.sendText(message.from, menu_inicial);
                start();
                break;
            default:
                await client.sendText(message.from, "Opção não reconhecida. Por favor, escolha novamente.");
                client.sendText(message.from, menu_atacado);
        }
    } else {
        switch (message.body) {
            case "1": // OPÇÃO TURISMO
                await client.sendText(message.from, menu_turismo);
                opcao_turismo = true;
                break;
            case "2": // OPÇÃO VAREJO
                await client.sendText(message.from, menu_varejo);
                opcao_varejo = true;
                break;
            case "3": // OPÇÃO ATACADO
                await client.sendText(message.from, menu_atacado);
                opcao_atacado = true;
                break;
            case "4": // OPÇÃO CANCELAR CONVERSA
                await client.sendText(message.from, finalizar_conversa);
                break;
            default: // OPÇÃO ERRADA OU DESCONHECIDA
                await client.sendText(message.from, "Escolha uma opção válida. Reiniciando a conversa...");
                client.sendText(message.from, menu_inicial);
                break;
        }
    }
};