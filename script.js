document.addEventListener("DOMContentLoaded", function () {
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

    // Génère un code couleur hexadécimal aléatoire, par exemple "#a3f20c".
    function getRandomColor() {
        const letters = "0123456789abcdef";
        let color = "#";

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }

    changeColorBtn.addEventListener("click", function () {
        colorBox.style.backgroundColor = getRandomColor();
    });
});
