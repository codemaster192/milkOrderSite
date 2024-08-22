const locations = [
    {
        "id": "1",
        "name": "New York",
        "opendays": {
            sun: {
                time1: 1,
                time2: 0,
                time3: 0,
            },
            mon: {
                time1: 0,
                time2: 0,
                time3: 1,
            },
            tue: {
                time1: 1,
                time2: 0,
                time3: 1,
            },
            wed: {
                time1: 1,
                time2: 0,
                time3: 1,
            },
            thr: {
                time1: 1,
                time2: 1,
                time3: 1,
            },
            sat: {
                time1: 0,
                time2: 0,
                time3: 0,
            },
        },
        "availableUnit": {
            sun: {
                unit1: 1,
                unit2: 1,
            },
            mon: {
                unit1: 1,
                unit2: 0,
            },
            tue: {
                unit1: 1,
                unit2: 1,
            },
            wed: {
                unit1: 1,
                unit2: 0,
            },
            thr: {
                unit1: 1,
                unit2: 0,
            },
            fri: {
                unit1: 1,
                unit2: 0,
            },
            sat: {
                unit1: 0,
                unit2: 0,
            },
        }
    },
    {
        "id": "2",
        "name": "Los Angeles",
        "opendays": {
            sun: {
                time1: 1,
                time2: 0,
                time3: 0,
            },
            mon: {
                time1: 0,
                time2: 0,
                time3: 1,
            },
            tue: {
                time1: 1,
                time2: 0,
                time3: 1,
            },
            wed: {
                time1: 1,
                time2: 0,
                time3: 1,
            },
            thr: {
                time1: 1,
                time2: 1,
                time3: 1,
            },
            sat: {
                time1: 0,
                time2: 0,
                time3: 0,
            },
        },
        "availableUnit": {
            sun: {
                unit1: 1,
                unit2: 1,
            },
            mon: {
                unit1: 1,
                unit2: 0,
            },
            tue: {
                unit1: 1,
                unit2: 1,
            },
            wed: {
                unit1: 1,
                unit2: 0,
            },
            thr: {
                unit1: 1,
                unit2: 0,
            },
            fri: {
                unit1: 1,
                unit2: 0,
            },
            sat: {
                unit1: 0,
                unit2: 0,
            },
        }
    },
    {
        "id": "3",
        "name": "Chicago",
        "opendays": {
            sun: {
                time1: 1,
                time2: 0,
                time3: 0,
            },
            mon: {
                time1: 0,
                time2: 0,
                time3: 1,
            },
            tue: {
                time1: 1,
                time2: 0,
                time3: 1,
            },
            wed: {
                time1: 1,
                time2: 0,
                time3: 1,
            },
            thr: {
                time1: 1,
                time2: 1,
                time3: 1,
            },
            sat: {
                time1: 0,
                time2: 0,
                time3: 0,
            },
        },
        "availableUnit": {
            sun: {
                unit1: 1,
                unit2: 1,
            },
            mon: {
                unit1: 1,
                unit2: 0,
            },
            tue: {
                unit1: 1,
                unit2: 1,
            },
            wed: {
                unit1: 1,
                unit2: 0,
            },
            thr: {
                unit1: 1,
                unit2: 0,
            },
            fri: {
                unit1: 1,
                unit2: 0,
            },
            sat: {
                unit1: 0,
                unit2: 0,
            },
        }
    },
    {
        "id": "4",
        "name": "Houston",
        "opendays": {
            sun: {
                time1: 1,
                time2: 0,
                time3: 0,
            },
            mon: {
                time1: 0,
                time2: 0,
                time3: 1,
            },
            tue: {
                time1: 1,
                time2: 0,
                time3: 1,
            },
            wed: {
                time1: 1,
                time2: 0,
                time3: 1,
            },
            thr: {
                time1: 1,
                time2: 1,
                time3: 1,
            },
            sat: {
                time1: 1,
                time2: 1,
                time3: 1,
            },
        },
        "availableUnit": {
            sun: {
                unit1: 1,
                unit2: 1,
            },
            mon: {
                unit1: 1,
                unit2: 0,
            },
            tue: {
                unit1: 1,
                unit2: 1,
            },
            wed: {
                unit1: 1,
                unit2: 0,
            },
            thr: {
                unit1: 1,
                unit2: 0,
            },
            fri: {
                unit1: 1,
                unit2: 0,
            },
            sat: {
                unit1: 0,
                unit2: 0,
            },
        }
    },
    {
        "id": "5",
        "name": "Miami",
        "opendays": {
            sun: {
                time1: 1,
                time2: 0,
                time3: 0,
            },
            mon: {
                time1: 0,
                time2: 0,
                time3: 1,
            },
            tue: {
                time1: 1,
                time2: 0,
                time3: 1,
            },
            wed: {
                time1: 1,
                time2: 0,
                time3: 1,
            },
            thr: {
                time1: 1,
                time2: 1,
                time3: 1,
            },
            sat: {
                time1: 0,
                time2: 0,
                time3: 0,
            },
        },
        "availableUnit": {
            sun: {
                unit1: 1,
                unit2: 1,
            },
            mon: {
                unit1: 1,
                unit2: 0,
            },
            tue: {
                unit1: 1,
                unit2: 1,
            },
            wed: {
                unit1: 1,
                unit2: 0,
            },
            thr: {
                unit1: 1,
                unit2: 0,
            },
            fri: {
                unit1: 1,
                unit2: 0,
            },
            sat: {
                unit1: 0,
                unit2: 0,
            },
        }
    }
];

function loadLocations() {
    const select = document.getElementById('locationSelector');

    const option = document.createElement('option');
    option.value = 0;
    option.textContent = "select location";
    select.appendChild(option);
    locations.forEach(location => {
        const option = document.createElement('option');
        option.value = location.id;
        option.textContent = location.name;
        select.appendChild(option);
    });
}

function clearHistory() {
    const select = document.getElementById('locationSelector');
    select.value = 0;
    showOpenDays();

}

function showOpenDays() {
    const select = document.getElementById("locationSelector");
    const selectedLocationId = select.value;
    const tableBody = document.getElementById("daysBody");
    const openDaysDiv = document.getElementById("openDaysTable");
    const selectNumberDiv = document.getElementById("selectNumber");
    const selectNumberBody = document.getElementById("selectNumberBody");
    const orderCheckDiv = document.getElementById("orderCheck");
    const orderCheckBody = document.getElementById("orderCheckBody");
    const orderLocation = document.getElementById("orderLocation");
    const saveOrderBtnFake = document.getElementById("saveOrderBtnFake");
    const saveOrderBtn = document.getElementById("saveOrderBtn");

    // Clear previous rows
    tableBody.innerHTML = '';
    selectNumberBody.innerHTML = '';
    orderCheckBody.innerHTML = '';
    let id = 0;

    if (selectedLocationId != 0) {
        const location = locations.find(loc => loc.id === selectedLocationId);
        orderLocation.innerHTML = `order location: ${location.name}`;

        const days = ["sun", "mon", "tue", "wed", "thr", "sat"];
        days.forEach(day => {
            const times = location.opendays[day];
            tableBody.innerHTML += `
                <tr>
                    <th>${day.charAt(0).toUpperCase() + day.slice(1)}</th>
                    <td style="background-color:${times.time1 ? '#A4D3E1' : '#B0B0B0'};"></td>
                    <td style="background-color:${times.time2 ? '#A4D3E1' : '#B0B0B0'};"></td>
                    <td style="background-color:${times.time3 ? '#A4D3E1' : '#B0B0B0'};"></td>
                </tr>
            `;

            const units = location.availableUnit[day];
            selectNumberBody.innerHTML += `
                <tr>
                    <th>${day.charAt(0).toUpperCase() + day.slice(1)}</th>
                    <td>${units.unit1 ? `
                        <button onclick="decrement('label-${id}-0', 'orderLabel-${id}-0')" class="btn btn-primary btn-sm">-</button>
                        &nbsp;
                        <label id="label-${id}-0">0</label>
                        &nbsp;
                        <button onclick="increment('label-${id}-0', 'orderLabel-${id}-0')" class="btn btn-primary btn-sm">+</button>
                    ` : 'Stock Out'}</td>
                    <td>${units.unit2 ? `
                        <button onclick="decrement('label-${id}-1', 'orderLabel-${id}-1')" class="btn btn-primary btn-sm">-</button>
                        &nbsp;
                        <label id="label-${id}-1">0</label>
                        &nbsp;
                        <button onclick="increment('label-${id}-1', 'orderLabel-${id}-1')" class="btn btn-primary btn-sm">+</button>
                    ` : 'Stock Out'}</td>
                </tr>
            `;

            orderCheckBody.innerHTML += `
                <tr>
                    <th>${day.charAt(0).toUpperCase() + day.slice(1)}</th>
                    <td>${units.unit1 ? `
                        <label id="orderLabel-${id}-0">0</label>
                    ` : ''}</td>
                    <td>${units.unit2 ? `
                        <label id="orderLabel-${id}-1">0</label>
                    ` : ''}</td>
                </tr>
            `;

            id++;
        });

        openDaysDiv.style.display = "block";
        selectNumberDiv.style.display = "block";
        orderCheckDiv.style.display = "block";
    } else {
        openDaysDiv.style.display = "none";
        selectNumberDiv.style.display = "none";
        orderCheckDiv.style.display = "none";
    }
}

function increment(numberID, orderNumberID) {
    saveOrderBtnFake.style.display = "none";
    saveOrderBtn.style.display = "block";
    const label = document.getElementById(numberID);
    const orderLabel = document.getElementById(orderNumberID);
    let count = parseInt(label.innerText);
    count++;
    label.innerText = count;
    orderLabel.innerText = count;
}

function decrement(numberID, orderNumberID) {
    const label = document.getElementById(numberID);
    const orderLabel = document.getElementById(orderNumberID);
    let count = parseInt(label.innerText);
    if (count != 0) {
        count--;
    }
    label.innerText = count;
    orderLabel.innerText = count;
}

window.onload = loadLocations;