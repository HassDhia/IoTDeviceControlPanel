document.addEventListener('DOMContentLoaded', function() {
    // Fetch device status upon loading
    fetchDeviceStatus();

    // Any other event listeners or initializations can go here
});

function fetchDeviceStatus() {
    // Placeholder for the API endpoint to fetch device statuses
    let apiUrl = "/api/getDeviceStatus"; 

    fetch(apiUrl)
        .then(response => {
            if(!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            // Debugging: Log the fetched data
            console.log("Fetched Device Data:", data);
            
            updateUIWithDeviceStatus(data);
        })
        .catch(error => {
            console.error('Error fetching device statuses:', error);
        });
}

function updateUIWithDeviceStatus(data) {
    // Assuming your API returns data in the format:
    // { "lights": { "status": "active", "battery": 85, "temperature": 25 }, "thermostat": {...} }
    // Adjust accordingly if the structure is different.

    // Update lights status
    document.querySelector(".devices-overview-list li:first-child").textContent = "Lights: " + capitalizeFirstLetter(data.lights.status);
    updateDeviceStatus('lights', data.lights);

    // Update thermostat status
    document.querySelector(".devices-overview-list li:nth-child(2)").textContent = "Thermostat: " + capitalizeFirstLetter(data.thermostat.status);
    updateDeviceStatus('thermostat', data.thermostat);

    // Update other devices similarly...
}

function updateDeviceStatus(device, status) {
    let deviceElem = document.querySelector(`img[alt="${capitalizeFirstLetter(device)} Icon"]`).closest(".card");
    let statusElem = deviceElem.querySelector(".device-status-list li:first-child");
    let batteryElem = deviceElem.querySelector(".device-status-list li:nth-child(2)");
    let temperatureElem = deviceElem.querySelector(".device-status-list li:nth-child(3)");

    statusElem.textContent = "Status: " + capitalizeFirstLetter(status.status);
    batteryElem.textContent = "Battery: " + status.battery + "%";
    temperatureElem.textContent = "Temperature: " + status.temperature + "°C";
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
