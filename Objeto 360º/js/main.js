const image = document.getElementById("image")
const range = document.getElementById("range")
const ArrayImg =[]

for (let index = 1; index < 73; index++){  // Este for es para que se carguen todas las imagenes
    ArrayImg.push(`assets/img/audif/${index}.png`)  // Se agregan las imagenes al array
}

image.setAttribute("src",ArrayImg[1]);  // Se carga la imagen 1 por defecto

range.addEventListener("input", (e) => {

    let value = e.target.value;  // Se obtiene el valor del input (Ejemplo si se mueve el input a la derecha el valor es 2)
    image.setAttribute("src", ArrayImg[value]) // Se carga la imagen que corresponde al valor del input
})

console.log(ArrayImg)  // Se imprime el array para ver que se cargaron todas las imagenes