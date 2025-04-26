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
        const userInput = document.getElementById("userInput").value.trim(); 
        const chatWindow = document.querySelector("#chatWindow"); 
        const sessionId = Math.random().toString(36).substring(7); 

    
        if (!userInput) return; 
        
        addMessageToChat(userInput, "userMessage");
    
        try {
            
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
                        Authorization: `Bearer toke_de_acesso`,
                        'Content-Type': 'application/json'
                    }
                    
                }
            );
    
            
            const botReply = response.data.queryResult.fulfillmentText;
    
            addMessageToChat(botReply, "botMessage");
        } catch (error) {
            console.error("Erro ao se comunicar com o Dialogflow:", error);
    
            addMessageToChat("Desculpe, ocorreu um erro ao processar sua mensagem.", "botMessage");
        }
    
        
        document.getElementById("userInput").value = "";
    }
    
    
    function addMessageToChat(message, className) {
        const chatWindow = document.querySelector("#chatWindow");
        const messageElement = document.createElement("div");
        messageElement.classList.add("mensagem", className);
        messageElement.textContent = message;
        chatWindow.appendChild(messageElement);
    
        
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
    
    
    document.getElementById("sendButton").addEventListener("click", sendMessageToBot);
    
    
    document.getElementById("userInput").addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessageToBot();
        }
    });
    
});