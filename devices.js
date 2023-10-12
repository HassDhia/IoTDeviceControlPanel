// Wait for the document to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    console.log("Document fully loaded.");

    // Fetch data and plot for Lights battery usage
    console.log("Fetching data for Lights...");
    fetchBatteryUsageDataForLights().then(data => {
        console.log("Plotting battery usage data for Lights...");
        plotBatteryUsageData('lightsBatteryChart', data);
    });

    // Fetch data and plot for Thermostat temperature trends
    console.log("Fetching data for Thermostat...");
    fetchTemperatureTrendsForThermostat().then(data => {
        console.log("Plotting temperature trends data for Thermostat...");
        plotTemperatureTrends('thermostatTempChart', data);
    });

    // Fetch data and plot for Camera storage usage
    console.log("Fetching data for Cameras...");
    fetchStorageUsageDataForCameras().then(data => {
        console.log("Plotting storage usage data for Cameras...");
        plotStorageUsageData('cameraStorageChart', data);
    });
});

function fetchBatteryUsageDataForLights() {
    return new Promise(resolve => {
        resolve({
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Battery Usage (%)',
                data: [100, 95, 92, 89, 85],
                borderColor: '#00aaff',
                fill: false
            }]
        });
    });
}

function fetchTemperatureTrendsForThermostat() {
    return new Promise(resolve => {
        resolve({
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Temperature (°C)',
                data: [20, 21, 23, 22, 22],
                borderColor: '#ffaa00',
                fill: false
            }]
        });
    });
}

function fetchStorageUsageDataForCameras() {
    return new Promise(resolve => {
        resolve({
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Storage Used (GB)',
                data: [30, 90, 200, 310, 420],
                borderColor: '#ff00ff',
                fill: false
            }]
        });
    });
}

function plotBatteryUsageData(canvasId, data) {
    new Chart(document.getElementById(canvasId), {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    console.log(`Chart for ${canvasId} plotted successfully.`);
}

function plotTemperatureTrends(canvasId, data) {
    new Chart(document.getElementById(canvasId), {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    console.log(`Chart for ${canvasId} plotted successfully.`);
}

function plotStorageUsageData(canvasId, data) {
    new Chart(document.getElementById(canvasId), {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    console.log(`Chart for ${canvasId} plotted successfully.`);
}
