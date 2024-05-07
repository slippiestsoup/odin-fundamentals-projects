const container = document.querySelector(".container");
const button = document.querySelector("#button");

function createGrid(input) {
  for (let i = 0; i < input; i++) {
    const eleCol = document.createElement("div");
    container.appendChild(eleCol);
    eleCol.setAttribute(
      "style",
      "border: 0.25px solid black; display: flex; flex-direction: column; gap: 1px; align-content: stretch; flex: 1;"
    );

    for (let j = 0; j < input; j++) {
      const eleRow = document.createElement("div");
      eleCol.appendChild(eleRow);
      eleRow.classList.add("cells");
      eleRow.setAttribute(
        "style",
        "border: 0.25px solid black; display: flex; flex-direction: row; gap: 1px; align-content: stretch; flex: 1;"
      );
    }
  }
}

function submitMe() {
  let input = document.getElementById("inputGrid").value;
  createGrid(input);
}

button.addEventListener("click", () => {
    submitMe();
  });