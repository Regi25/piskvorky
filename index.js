const btns = document.querySelectorAll('button');
let player = 'circle';
const widthField = 10;
const allField = document.querySelectorAll('button');
const getPosition = (field) => {
  for (let i = 0; i < allField.length; i++) {
    return {
      row: Math.floor(index / widthField),
      column: index % widthField,
    };
  }
};
const getField = (row, column) => {
  return allField[row * widthField + column];
};
const getSymbol = (field) => {
  if (field.className === 'board__field--circle') {
    return 'circle';
  } else if (field.className === 'board__field--cross') {
    return 'cross';
  }
  return undefined;
  //field.classList.contains
};

//   //while (index < ) {
//   //  index++;
//   }
//   return { row: Math.floor(index / widthField), column: index % widthField };
// };
const winningSymbols = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);
  let i;
  let x;
  let y;

  let inRow = 1;
  //left
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }
  //right
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i + 1))) {
    inRow++;
    i++;
  }
  if (inRow >= winningSymbols) {
    return true;
  }
  //up
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }
  //down
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i + 1, origin.column))) {
    inColumn++;
    i++;
  }
  if (inColumn >= winningSymbols) {
    return true;
  }
  //TO DO DIAGONAL
};

let gameEnd = false;
let previousPlayer = player;
btns.forEach((btn) =>
  btn.addEventListener('click', (event) => {
    if (gameEnd) {
      return;
    }
    if (btn.disabled) {
      return;
    }
    if (player == 'circle') {
      console.log(player);
      event.target.className = 'board__field--circle';
      btn.disabled = true; // later I can delete
      player = 'cross';
      document.querySelector('#hraje').innerHTML =
        'HRAJE: <img id="cross" src="images/cross.svg" alt="cross"/>';
    } else {
      console.log(player);
      event.target.className = 'board__field--cross';
      btn.disabled = true; // later i can delete
      player = 'circle';
      document.querySelector('#hraje').innerHTML =
        'HRAJE: <img id="circle" src="images/circle.svg" alt="circle"/>';
    }
    if (isWinningMove(btn) === true) {
      gameEnd = true;
      alert('Game is over');
      btn.disabled;
    }
  }),
);
