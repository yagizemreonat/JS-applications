import { html, render } from './node_modules/lit-html/lit-html.js'; // Import lit-html

const inputElement = document.getElementById('towns');
const loadButtonElement = document.getElementById('btnLoadTowns');
const rootDivElement = document.getElementById('root');

loadButtonElement.addEventListener('click', showTowns);

function showTowns(e) {
    e.preventDefault();
    const towns = inputElement.value.split(', ');
    render (townsTemplate(towns), rootDivElement);

}

function townsTemplate (towns) {

    return html`
    <ul>
        ${towns.map(town => html`<li>${town}</li>`)}
    </ul>
    `;
}