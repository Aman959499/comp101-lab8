const firebaseProjectUrl = 'https://comp101-lab-8-amandeep-default-rtdb.firebaseio.com/';
const databaseUrl = firebaseProjectUrl + 'msg.json';

const submitButton = document.getElementById('submitButton');
submitButton.onclick = submitForm; // Call submitForm when button is clicked

async function submitForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim(); // NEW
    const message = document.getElementById('your-message').value.trim();

    if (name || email || message) {  // include email
        const data = {name, email, message}; // include email in data

        try {
            const response = await fetch(databaseUrl, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });

            if (!response.ok) { 
                throw new Error('Failed to send message');
            }
            showThanksAlert();
        } catch (error) {
            console.error('Error when sending message:', error);
        }
    }
}

function showThanksAlert() {
    alert("Thanks for your message. We will get back to you soon!");
}
