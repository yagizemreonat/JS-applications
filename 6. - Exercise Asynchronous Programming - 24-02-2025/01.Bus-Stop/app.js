async function getInfo() {
    const stopIdInputEl = document.getElementById('stopId');
    const stopNameDivEl = document.getElementById('stopName');
    const busesUlEl = document.getElementById('buses');

    const stopId = stopIdInputEl.value;

    try {        
        const stopResponse = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`);
        const stopData = await stopResponse.json();

        stopNameDivEl.textContent = stopData.name;

        const busesObj = stopData.buses;
        const busesEntries = Object.entries(busesObj);

        busesUlEl.innerHTML = '';

        for (const [busId, time] of busesEntries) {
            const busLiEl = document.createElement('li');
            busLiEl.textContent = `Bus ${busId} arrives in ${time} minutes`;
            busesUlEl.appendChild(busLiEl);
        }
    } catch (error) {
        busesUlEl.innerHTML = '';
        stopNameDivEl.textContent = 'Error';
    }
}