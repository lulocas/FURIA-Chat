document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("chatButton").addEventListener("click", () => {
        const chatBox = document.getElementById("chatBox");
        if (chatBox.classList.contains("visible")) {
            chatBox.classList.remove("visible"); 
        } else {
            chatBox.classList.add("visible"); 
        }
    });
    document.getElementById("botaoX").addEventListener("click", () =>{
        const chatBox = document.getElementById("chatBox");
        chatBox.classList.remove("visible");
    });
    async function sendMessageToBot() {
        const userInput = document.getElementById("userInput").value.trim(); // Remove espaços extras
        const chatWindow = document.querySelector("#chatWindow"); // Alvo correto para as mensagens
        const sessionId = Math.random().toString(36).substring(7); // Exemplo de sessão aleatória

    
        if (!userInput) return; // Evita mensagens vazias
    
        // Exibe a mensagem do usuário no chat
        addMessageToChat(userInput, "userMessage");
    
        try {
            // Envia a mensagem para o Dialogflow
            const response = await axios.post(
                `https://dialogflow.googleapis.com/v2/projects/furia-gdgl/agent/sessions/${sessionId}:detectIntent`,
                {
                    queryInput: {
                        text: {
                            text: userInput,
                            languageCode: "pt-BR"
                        }
                    }
                },
                {
                    headers: {
                        Authorization: `Bearer AIzaSyAChzYx4R6Trq70UFyuU0ymLawrtPtX2fQ`,
                        'Content-Type': 'application/json'
                    }
                }
            );
    
            // Captura a resposta do bot
            const botReply = response.data.queryResult.fulfillmentText;
    
            // Exibe a mensagem do bot no chat
            addMessageToChat(botReply, "botMessage");
        } catch (error) {
            console.error("Erro ao se comunicar com o Dialogflow:", error);
    
            // Mensagem de erro amigável no chat
            addMessageToChat("Desculpe, ocorreu um erro ao processar sua mensagem.", "botMessage");
        }
    
        // Limpa o campo de entrada
        document.getElementById("userInput").value = "";
    }
    
    // Função para adicionar mensagens ao chat
    function addMessageToChat(message, className) {
        const chatWindow = document.querySelector("#chatWindow");
        const messageElement = document.createElement("div");
        messageElement.classList.add("mensagem", className);
        messageElement.textContent = message;
        chatWindow.appendChild(messageElement);
    
        // Rola automaticamente para a mensagem mais recente
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
    
    // Event listener para enviar ao clicar no botão
    document.getElementById("sendButton").addEventListener("click", sendMessageToBot);
    
    // Event listener para enviar ao pressionar Enter
    document.getElementById("userInput").addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessageToBot();
        }
    });
    
});