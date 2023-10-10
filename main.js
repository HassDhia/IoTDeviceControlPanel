document.addEventListener('DOMContentLoaded', function() {
    // Placeholder data: Represents IoT device statuses
    const devices = {
        light: false, // off
        thermostat: 22, // 22°C
        doorLock: true, // locked
    };

    // Initialize event listeners
    initEventListeners();

    // Toggle device status on click
    function initEventListeners() {
        const deviceStatusElements = document.querySelectorAll('.device-status');
        deviceStatusElements.forEach(element => {
            element.addEventListener('click', toggleDeviceStatus);
        });

        const lightButton = document.getElementById('toggle-light');
        lightButton.addEventListener('click', function() {
            devices.light = !devices.light; // Toggle light status
            updateDashboard();
        });

        const thermostatInput = document.getElementById('set-thermostat');
        thermostatInput.addEventListener('change', function(e) {
            devices.thermostat = e.target.value;
            updateDashboard();
        });

        const doorLockButton = document.getElementById('toggle-doorLock');
        doorLockButton.addEventListener('click', function() {
            devices.doorLock = !devices.doorLock; // Toggle lock status
            updateDashboard();
        });
    }

    // Function to update the dashboard/UI based on device statuses
    function updateDashboard() {
        const lightStatus = document.getElementById('light-status');
        lightStatus.textContent = devices.light ? 'On' : 'Off';

        const thermostatStatus = document.getElementById('thermostat-status');
        thermostatStatus.textContent = `${devices.thermostat}°C`;

        const doorLockStatus = document.getElementById('doorLock-status');
        doorLockStatus.textContent = devices.doorLock ? 'Locked' : 'Unlocked';
    }

    function toggleDeviceStatus(event) {
        const statusElement = event.target;
        if (statusElement.innerText === 'Online') {
            statusElement.innerText = 'Offline';
            statusElement.style.color = 'red';
        } else {
            statusElement.innerText = 'Online';
            statusElement.style.color = 'green';
        }
    }

    // Initial dashboard update
    updateDashboard();
});
