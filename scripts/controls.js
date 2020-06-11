// console.log("fuck yeah");
document.querySelector('#play').addEventListener('click',MostrarNombre);

function MostrarNombre(){
    
  document.querySelector('#overflow').classList.add('overflowDown');
 let name = document.querySelector('#name').value;
  document.querySelector('#zoneName').innerHTML = name;
}