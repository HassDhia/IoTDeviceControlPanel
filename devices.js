// Wait for the document to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    // Fetch data and plot for Lights battery usage
    fetchBatteryUsageDataForLights().then(data => {
        plotBatteryUsageData('lightsBatteryChart', data);
    });

    // Fetch data and plot for Thermostat temperature trends
    fetchTemperatureTrendsForThermostat().then(data => {
        plotTemperatureTrends('thermostatTempChart', data);
    });
});

// Example function to fetch battery usage data for Lights
function fetchBatteryUsageDataForLights() {
    // For this example, I'll return a mock data. In real-world use, you would make an API call or fetch data from a source.
    return new Promise(resolve => {
        resolve({
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Battery Usage (%)',
                data: [100, 95, 92, 89, 85], // Sample data, representing battery usage from Jan-May
                borderColor: '#00aaff',
                fill: false
            }]
        });
    });
}

// Example function to fetch temperature trends data for Thermostat
function fetchTemperatureTrendsForThermostat() {
    return new Promise(resolve => {
        resolve({
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Temperature (°C)',
                data: [20, 21, 23, 22, 22], // Sample data
                borderColor: '#ffaa00',
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
}
