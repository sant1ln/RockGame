/*  document.querySelector('#play').addEventListener('click',MostrarNombre); */
let iconSelected = document.getElementsByClassName("icon");

for (let i = 0; i < iconSelected.length; i++) {
  let numberIcon = i;
  iconSelected[i].addEventListener("click", function () {
    userSelecction(numberIcon);
  });
}


function addPoints(user,cloud){
  let userContainer = document.querySelector('#points1');
  let cloudContainer = document.querySelector('#points2');

  let userPoints = 0;
  let cloudPoints = 0;
  if(user && cloud){
    userPoints = userPoints + 1;
    cloudPoints = cloudPoints + 1;
  }else if(cloud){
    cloudPoints = cloudPoints + 1;
  }else if(user){
    userPoints = userPoints + 1;
  }
  userContainer.innerHTML = userPoints;
  cloudContainer.innerHTML = cloudPoints;
  
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
      user = "scissors";
      break;
    case 1:
      user = "paper";
      break;
    case 2:
      user = "rock";
      break;
    case 3:
      let random = parseInt(Math.random() * (3 - 0) + 0);
      switch (random) {
        case 0:
          user = "scissors";
          break;
        case 1:
          user = "paper";
          break;
        case 2:
          user = "rock";
          break;
      }
      break;
  }
  console.log(user);
  game(user);
}

function cloudChoice() {
  let RandomNumber = parseInt(Math.random() * 3) + 1;
  let cloud = "";
  switch (RandomNumber) {
    case 1:
      cloud = "scissors";
      return cloud;
    case 2:
      cloud = "paper";
      return cloud;

    case 3:
      cloud = "rock";
      return cloud;
  }
}

function game(user) {
  let cloud = cloudChoice();
  console.log("La nube saca = " + cloud);
  switch (user) {
    case "rock" /* Si saco piedra */:
      if (user == cloud) {
        console.log("Empate!");
        addPoints(1,1);
      } else if (cloud == "paper") {
        console.log("Uy!, la nube saco papel. ¡Perdiste!");
        addPoints(0,1);
      } else if (cloud == "scissors") {
        console.log("¡Ganaste!, la nube saco tijera");
        addPoints(1,0);
      }
      break;
    case "paper" /* Si saco papel */:
      if (user == cloud) {
        console.log("Empate!");
        addPoints(1,1);
      } else if (cloud == "scissors") {
        console.log("Uy!, la nube saco tijera. ¡Perdiste!");
        addPoints(0,1);
      } else if (cloud == "rock") {
        console.log("¡Ganaste!, la nube saco piedra");
        addPoints(1,0);
      }
      break;
    case "scissors" /* Si saco tijera */:
      if (user == cloud) {
        console.log("Empate!");
        addPoints(1,1);
      } else if (cloud == "rock") {
        console.log("Uy!, la nube saco piedra. ¡Perdiste!");
        addPoints(0,1);
      } else if (cloud == "paper") {
        console.log("¡Ganaste!, la nube saco papel");
        addPoints(1,0);
      }
      break;
  }
}



/* function MostrarNombre(){
   document.querySelector('#overflow').classList.add('overflowDown');
 let name = document.querySelector('#name').value;
  document.querySelector('#zoneName').innerHTML = name;
}
 */
