/*  document.querySelector('#play').addEventListener('click',MostrarNombre); */
let iconSelected = document.getElementsByClassName("icon");

for (let i = 0; i < iconSelected.length; i++) {
  let numberIcon = i;
  iconSelected[i].addEventListener("click", function () {
    userSelecction(numberIcon);
  });
}

function userSelecction(numberIcon) {
  /* 0 -> scissors
     1 -> paper
     2 -> rock
     3 -> random */
  let user = undefined;
  if (numberIcon == 3) {
    user = parseInt(Math.random() * (3 - 0) + 0);
  } else {
    user = numberIcon;
  }
  switch (numberIcon) {
    case 0:
      user = "Tijeras";
      break;
    case 1:
      user = "Papel";
      break;
    case 2:
      user = "Piedra";
      break;
    case 3:
      let random = parseInt(Math.random() * (3 - 0) + 0);
      switch (random) {
        case 0:
          user = "Tijeras";
          break;
        case 1:
          user = "Papel";
          break;
        case 2:
          user = "Piedra";
          break;
      }
      break;
  }
  console.log(user);
}

/* function MostrarNombre(){
   document.querySelector('#overflow').classList.add('overflowDown');
 let name = document.querySelector('#name').value;
  document.querySelector('#zoneName').innerHTML = name;
}
 */
