function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/phonebook";

    const phonebookUlElement = document.getElementById("phonebook");
    const loadButtonElement = document.getElementById("btnLoad");

    loadButtonElement.addEventListener("click", loadContacts);

    async function loadContacts () {
        phonebookUlElement.innerHTML = "";

        const response = await fetch(baseUrl);
        const data = await response.json();

        const contacts = Object.values(data);
        console.log(contacts);
        
        // [
        //     {person: 'Future', phone: '+9-999-9999', _id: 'd749a819'},
        //     {person: 'Honey', phone: '+0-000-0000', _id: '29c4ebd0d'},
        // ]
 
        for (const { person, phone, _id } of contacts) {
            const liEl = document.createElement ("li");
            liEl.textContent = `${person}: ${phone}`;
            
            const deleteBtnEl = document.createElement("button");
            deleteBtnEl.textContent = "Delete";

            liEl.appendChild(deleteBtnEl);
            
            phonebookUlElement.appendChild(liEl);
            
            deleteBtnEl.addEventListener("click", () => deleteContact(_id));

            async function deleteContact(_id) {
                await fetch (`${baseUrl}/${_id}`, {
                    method: "DELETE"
                });
            }

        }

    }

    const personInputEl = document.getElementById("person");
    const phoneInputEl = document.getElementById("phone");
    const createBtnEl = document.getElementById("btnCreate");

    createBtnEl.addEventListener("click", addContact);

    async function addContact (){
        const person = personInputEl.value;
        const phone = phoneInputEl.value;

        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify ({ person, phone })

        });

        const data = await response.json();
        console.log(data);
        
    }

}

attachEvents();