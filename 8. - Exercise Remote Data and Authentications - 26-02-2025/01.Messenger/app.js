function attachEvents() {
    const messagesTextreaElement = document.getElementById("messages");
    const authorInputElement = document.querySelector('input[name="author"]');
    const contentInputElement = document.querySelector('input[name="content"]');

    const submitButtonElement = document.getElementById("submit");
    const refreshButtonElement = document.getElementById("refresh");

    submitButtonElement.addEventListener("click", handleSendMessage);
    refreshButtonElement.addEventListener("click", handleLoadMessages);

    async function handleSendMessage () {
        const author = authorInputElement.value;
        const content = contentInputElement.value;
        
        try{ 
            const response = await fetch("http://localhost:3030/jsonstore/messenger", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({author, content}) 
        });

        // if (!response.ok) {
        //     throw new Error("...")
        // }
    
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    } 

    async function handleLoadMessages() {
        const response = await fetch ("http://localhost:3030/jsonstore/messenger");
        const data = await response.json();

        const messages = Object.values(data);
        let messageStrs = [];

        for (const { author, content } of messages){
            messageStrs.push(`${author}: ${content}`);
        }
        messagesTextreaElement.textContent = messageStrs.join("\n");
    }
}
attachEvents();