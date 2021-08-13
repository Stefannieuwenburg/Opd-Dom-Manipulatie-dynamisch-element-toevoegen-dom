/*
//stappenplan
//stap 1 alles mogelijk li-div-h1-input-button enz.
const elem = document.createElement("div");
// stap 2
document.body.appendChild(elem);
//eind
//extra opties zijn.
elem.appendChild(elemtext);
const elemtext = document.createTextNode("this is a div");
elem.classList.add("container");
elem.id = "box-1";
parent.removeChild(child)

//optie 2
//stap 1
const body = document.body
//stap2
const div = document.createElement("div");
//stap 3
body.append(div);
//stap 4
//extra opties zijn.
div.innerText="hello world";
div.textContent = "hello wereld 2"


youtube link uitleg***https://youtu.be/adPc41k4EvE***
*/
const spottedAnimalButtons = document.querySelectorAll('.big-five-button');
const removeFirstAnimalButton = document.getElementById('remove-first-item-button');
const removeAllAnimalsButton = document.getElementById('remove-all-button');

spottedAnimalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const newSpottedAnimal = document.getElementById('spotted-animals-list');
    const addNewLi = document.createElement('li');
    addNewLi.className = 'spotted-animals-list-item';
    newSpottedAnimal.appendChild(addNewLi);
    addNewLi.innerText = button.innerHTML;
  });
});

removeFirstAnimalButton.addEventListener('click', () => {
  let list = document.getElementById('spotted-animals-list');
  if (list.hasChildNodes()) {
    list.removeChild(list.childNodes[0]);
  }
});

removeAllAnimalsButton.addEventListener('click', () => {
  let list = document.getElementById('spotted-animals-list');
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
});
