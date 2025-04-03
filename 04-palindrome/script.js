const userInput = document.getElementById("text-input");
const checkInput = document.getElementById("check-btn");
const result = document.getElementById("result");

const istPalindroem = (string) => {
  // if (string.startsWith("_")) {
  //   string = string.replace(/_/g, "");
  // }
  const stringT = string
    .toLocaleLowerCase() // Convertir a minúsculas
    .replace(/[^A-Za-z0-9]/gi, "") //quitar guiones
    

    // .normalize("NFD") // Descomponer acentos
    // .replace(/[\u0300-\u036f]/g, "") // Eliminar acentos
    // .replace(/[^\w\s]/gi, "")// Eliminar signos de puntuación
    .split("");


  const stringTwo = stringT.filter((x) => x !== " ");
  const stringThree = [...stringTwo].reverse();

  if (stringTwo.join() === stringThree.join()) {
    const respuesta = document.createElement("p");
    respuesta.classList.add("palindromo-definiton");
    respuesta.textContent = `${string} is a palindrome`;
    result.appendChild(respuesta);
    
  } else {
    const respuesta = document.createElement("p");
    respuesta.classList.add("palindromo-definiton");
    respuesta.textContent = `${string} is not a palindrome`;
    result.appendChild(respuesta);
    
  }
  return stringTwo;
};

// const resetCheck = () =>{
//   result.appendChild(" ")
// }

checkInput.addEventListener("click", () => {
  result.textContent = "";
  if (userInput.value === "") {
    alert("Please input a value");
    return;
  }
  istPalindroem(userInput.value);
});
