const btns = document.querySelectorAll('button');
let player = 'circle';
btns.forEach((btn) =>
  btn.addEventListener('click', (event) => {
    /*if (btn.disabled) {
      return;
    } else {*/
    if (player == 'circle') {
      console.log(player);
      event.target.className = 'board__field--circle';
      //btn.innerHTML = '<img id="circle" src="images/circle.svg" alt="circle"/>';
      btn.disabled = true; // later I can delete
      player = 'cross';
      document.querySelector('#hraje').innerHTML =
        'HRAJE: <img id="cross" src="images/cross.svg" alt="cross"/>';
    } else {
      console.log(player);
      event.target.className = 'board__field--cross';
      //btn.innerHTML = '<img id="cross" src="images/cross.svg" alt="cross"/>'; //delete and replace in style.css
      btn.disabled = true; // later i can delete
      player = 'circle';
      document.querySelector('#hraje').innerHTML =
        'HRAJE: <img id="circle" src="images/circle.svg" alt="circle"/>';
      // }
      //btn.disabled = true;
    }
  }),
);
