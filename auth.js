// auth.js

document.addEventListener("DOMContentLoaded", function() {
    console.log("Document loaded and ready.");

    const loginForm = document.querySelector("form[action='auth.js']");
    
    if (!loginForm) {
        console.error("Login form not found.");
        return;
    }

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;

        console.log(`Attempting to log in with username: ${username}`);

        const storedUserData = localStorage.getItem(username);
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            
            console.log(`Found user data for ${username} in local storage.`);

            if (userData.password === password) {
                console.log("Login successful.");
                alert("Successfully logged in!");
                window.location.href = "dashboard.html";
                return;
            } else {
                console.warn("Provided password does not match stored password.");
            }
        } else {
            console.warn(`No user data found in local storage for username: ${username}`);
        }

        alert("Invalid username or password.");
    });
});
