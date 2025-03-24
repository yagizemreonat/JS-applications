import { html, render } from '../../node_modules/lit-html/lit-html.js';

const mainEl = document.querySelector("main");

const person = {
    name: "John",
    age: 30
}; 


render (greetingTemplate(person), mainEl);

function greetingTemplate(personObj) {
    const isLogged = true;

  return html`
    <section>
      ${isLogged ? html`<p>Logged in<p>` : html`<p>Please log in</p>`}
    
    
        <h1>Hi, I am ${personObj.name}</h1>
        <p>I am ${personObj.age} years old.</p>
        
        <form @submit=${registerUser}>
            <input type="email" name="email" placeholder="Email:" ?disabled=${isLogged}>
            <input type="submit" value="Register">
        </form>
    </section>
    `; 
} 

function registerUser(e) {
    e.preventDefault(); 
    console.log("Successfully registered!");
}