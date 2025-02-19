document.getElementById("submitBtn").addEventListener("click", function() {
    const confession = document.getElementById("confessionInput").value.trim();
    const webhookURL = "https://discord.com/api/webhooks/1341914081283538994/5KB5J1v5rfezdtZiN8Ahlg4qHzsLj5Z6AA6JRS-r_-CRgg_GL4y7G4Qr4-xieJJUQnbO"; // Replace with your webhook URL

    if (confession === "") {
        alert("Confession cannot be empty!");
        return;
    }

    // Sending data to Discord webhook
    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: `**Anonymous Confession:** ${confession}` })
    }).then(response => {
        if (response.ok) {
            document.getElementById("confirmationMessage").classList.remove("hidden");
            document.getElementById("confessionInput").value = ""; // Clear input
            setTimeout(() => {
                document.getElementById("confirmationMessage").classList.add("hidden");
            }, 3000);
        } else {
            alert("Something went wrong, try again!");
        }
    }).catch(error => {
        console.error("Error:", error);
        alert("Failed to send confession.");
    });
});
