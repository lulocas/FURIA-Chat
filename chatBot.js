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
});