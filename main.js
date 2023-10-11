// Constants for device states
const OFFLINE = 0;
const ONLINE = 1;
const LOCKED = 2;
const UNLOCKED = 3;

// Initial device states
let deviceStates = {
    light: ONLINE,
    thermostat: ONLINE,
    doorlock: LOCKED
};

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    attachEventListeners();
    updateDashboard();
});

// Attach necessary event listeners to DOM elements
function attachEventListeners() {
    // Toggle device status on click
    document.querySelectorAll('.device-status').forEach(statusElement => {
        statusElement.addEventListener('click', toggleDeviceStatus);
    });

    // Add specific listeners for other devices if they exist in the HTML
    const thermostatInput = document.getElementById('thermostat-input');
    if (thermostatInput) {
        thermostatInput.addEventListener('change', handleThermostatChange);
    }

    const toggleDoorlock = document.getElementById('toggle-doorlock');
    if (toggleDoorlock) {
        toggleDoorlock.addEventListener('click', handleDoorlockToggle);
    }
}

// Toggle the status of a device and update dashboard
function toggleDeviceStatus(event) {
    let deviceName = event.target.id.split('-')[1];
    deviceStates[deviceName] = deviceStates[deviceName] === ONLINE ? OFFLINE : ONLINE;
    updateDashboard();
}

// Handle thermostat input change
function handleThermostatChange(event) {
    // This function can be extended to handle specific thermostat actions
}

// Handle doorlock toggle button click
function handleDoorlockToggle(event) {
    deviceStates.doorlock = deviceStates.doorlock === LOCKED ? UNLOCKED : LOCKED;
    updateDashboard();
}

// Update the dashboard based on device states
function updateDashboard() {
    Object.keys(deviceStates).forEach(deviceName => {
        let statusElement = document.getElementById(`status-${deviceName}`);
        if (statusElement) {
            if (deviceName === 'doorlock') {
                statusElement.textContent = deviceStates[deviceName] === LOCKED ? 'Locked' : 'Unlocked';
            } else {
                statusElement.textContent = deviceStates[deviceName] === ONLINE ? 'Online' : 'Offline';
                statusElement.style.color = deviceStates[deviceName] === ONLINE ? 'green' : 'red';
            }
        }
    });
}
