
document.addEventListener("DOMContentLoaded", function () {

    const jokeButton = document.getElementById("dad-joke-button");
    const jokeText = document.getElementById("dad-joke-text");

    jokeButton.addEventListener("click", async () => {
        try {
            const response = await fetch("https://icanhazdadjoke.com/", {
                headers: {
                    "Accept": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Failed to fetch joke");
            }

            const data = await response.json();
            jokeText.textContent = data.joke;

        } catch (error) {
            jokeText.textContent = "Oops! Something went wrong. Try again!";
            console.error(error);
        }
    });
});