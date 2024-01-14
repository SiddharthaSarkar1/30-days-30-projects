const colors = [
    "#FF5733", // Orange
    "#F7004C", // Pink
    "#FFD700", // Gold
    "#FF00FF", // Magenta
    "#00FF00", // Lime
    "#00FFFF", // Cyan
    "#FF4500", // OrangeRed
    "#FF6347", // Tomato
    "#FF8C00", // DarkOrange
    "#8A2BE2", // BlueViolet
    "#20B2AA", // LightSeaGreen
    "#FF1493", // DeepPink
    "#FFD700", // Gold
    "#32CD32", // LimeGreen
    "#00CED1", // DarkTurquoise
    "#FF69B4", // HotPink
    "#00FF7F", // SpringGreen
    "#FF6347", // Tomato
    "#1E90FF", // DodgerBlue
    "#7CFC00"  // LawnGreen
  ];

const containerEl = document.getElementById("container");
const SQUARES_NR = 300;

for(let i=0; i<SQUARES_NR; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColorEl(square);
    });

    square.addEventListener('mouseout', () => {
        removeColorEl(square);
    });

    containerEl.appendChild(square);
}

function setColorEl(el) {
    const color = getRandomColor();
    el.style.background = color;
    el.style.boxShadow = `0 0 2px ${color}`;
}

function removeColorEl(el) {
    el.style.background = '#111111';
    el.style.boxShadow = `0 0 2px #fff`;
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}