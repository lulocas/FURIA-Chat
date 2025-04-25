document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("chatButton").addEventListener("click", () => {
        const chatBox = document.getElementById("chatBox");
        if (chatBox.style.display === "none" || chatBox.style.display === "") {
            chatBox.style.display = "block"; // Mostra o chat
        } else {
            chatBox.style.display = "none"; // Esconde o chat
        }
    });
});