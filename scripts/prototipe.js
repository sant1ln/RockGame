
var user = prompt("1 = Piedra, 2= Papel, 3= Tijera");
user = parseInt(user);
var cloud = parseInt(Math.random()*3)+1;
console.log("La nube saca = " +cloud);
switch(user){
    case 1: /* Si saco piedra */
        if(user == cloud){ 
            console.log("Empate!")
        }else if(cloud == 2){
            console.log("Uy!, la nube saco papel. ¡Perdiste!");
        }else if(cloud == 3){
            console.log("¡Ganaste!, la nube saco tijera");
            
        }
        break;
    case 2: /* Si saco papel */
        if(user == cloud){
            console.log("Empate!")
        }else if(cloud == 3){
            console.log("Uy!, la nube saco tijera. ¡Perdiste!");
        }else if(cloud == 1){
            console.log("¡Ganaste!, la nube saco piedra");

        }
        break;
    case 3: /* Si saco tijera */
        if(user == cloud){
            console.log("Empate!")
        }else if(cloud == 2){
            console.log("Uy!, la nube saco piedra. ¡Perdiste!");
        }else if(cloud == 1){
            console.log("¡Ganaste!, la nube saco papel");
        }
        break;
}
//**//
// dwdd
