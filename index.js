let colors = [
    "red",
    "black",
    "yellow",
    "lightblue",
    "green",
    "blue",
    "brown",
    "purple",
];

function randomColor() {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * 8)];
    document.querySelector(".container").style.backgroundColor =
        colors[Math.floor(Math.random() * 8)];
    document.querySelector(".text").style.color =
        colors[Math.floor(Math.random() * 8)];
}
