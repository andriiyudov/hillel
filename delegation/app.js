const fieldElem = document.getElementsByClassName('tic-tac-toe')[0];

let currentPlayer = 'plus';

const initField = () => {
    const array = new Array(9)
        .fill(0)
        .map((_, i) => `${i}`);

    array.forEach(i => {
        const itemElem = document.createElement('div');
        itemElem.className = 'tic-tac-toe__item';
        itemElem.setAttribute('item-id', i);

        fieldElem.appendChild(itemElem);
    });
}

fieldElem.addEventListener('click', ({target}) => {
    const id = +target.getAttribute('item-id');

    markItem(id);
});



const markItem = id => {
    const item = document.querySelector(`[item-id="${id}"]`);

    if (currentPlayer === 'plus') {
        createPlus(item);
        currentPlayer = 'circle';
    } else {
        createCircle(item);
        currentPlayer = 'plus';
    }
};

const createPlus = elem => {
    const horizonLine = document.createElement('div');
    const verticalLine = document.createElement('div');

    horizonLine.classList.add('tic-tac-toe__line', 'tic-tac-toe__line_horizon');
    verticalLine.classList.add('tic-tac-toe__line', 'tic-tac-toe__line_vertical');

    elem.appendChild(horizonLine);
    elem.appendChild(verticalLine);
}

const createCircle = elem => {
    const circle = document.createElement('div');

    circle.className = 'tic-tac-toe__circle';

    elem.append(circle);
}

initField();
