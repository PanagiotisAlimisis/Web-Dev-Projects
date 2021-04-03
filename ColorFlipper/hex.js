const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click", () => {
    let newColor = getRandomNumber();

    document.body.style.backgroundColor = newColor;
    color.textContent = newColor;
    color.style.color = newColor;
});

function getRandomNumber() {
    let generatedColor = "#";
    for (let i=0; i<6; ++i) {
        generatedColor += hexNumbers[Math.floor(Math.random()*hexNumbers.length)];
    }
    return generatedColor;
}