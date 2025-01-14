
const successMessage = document.getElementById("successMessage");
document.getElementById("submit-btn").addEventListener('click', (event) => {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    const submitForm = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name.value && email.value && subject.value && message.value) {
                resolve("Message successfully sent.");
            } else {
                reject("Please fix errors before submitting.");
            }
        }, 2000);
    })
    
    submitForm
        .then((success) => {
            successMessage.style.color = "green";
            successMessage.textContent = success;

            // Clear form fields
            name.value = "";
            email.value = "";
            subject.value = "";
            message.value = "";
        })
        .catch((error) => {
            successMessage.style.color = "red";
            successMessage.textContent = error;
        });
});
