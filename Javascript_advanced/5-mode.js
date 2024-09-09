function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.size = size;
        document.body.style.weight = weight;
        document.body.style.transform = transform;
        document.body.style.background = background;
        document.body.style.color = color;
    };
}
function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    let createdP = document.createElement('p');
    createdP.innerText = 'Welcome Holberton!';
    document.body.appendChild(createdP);

    let spookyButton = document.createElement('button');
    spookyButton.innerText = 'Spooky';
    spookyButton.onclick = spooky;
    document.body.appendChild(spookyButton);

    let darkModeButton = document.createElement('button');
    darkModeButton.innerText = 'Dark mode';
    darkModeButton.onclick = darkMode;
    document.body.appendChild(darkModeButton);

    let screamModeButton = document.createElement('button');
    screamModeButton.innerText = 'Scream mode';
    screamModeButton.onclick = screamMode;
    document.body.appendChild(screamModeButton);
}
main();