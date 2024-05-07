const container = document.querySelector("#container");
const baseGrid = {rows: 16, cols: 16};
const totalGrid = baseGrid.rows * baseGrid.cols;

function createGrid(tot) {
    for (let i=0; i<tot; i++) {
    let eleGrid = document.createElement('div');
    container.appendChild(eleGrid);
    eleGrid.classList.add('cells');
    };
};

createGrid(totalGrid);

