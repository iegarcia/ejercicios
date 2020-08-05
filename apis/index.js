/* Ejercicio 1
-------------------------------------------------------------------------------------------- */
let paper = document.getElementById("ej1");
let res1 = document.createElement("h5");
let full_name;
let people = [];
const MAX_CANT = 12;

fetch("https://reqres.in/api/users?page=1")
  .then(function (response) {
    return response.json();
  })
  .then(function (people) {
    manipular(people.data);
  });

function manipular(datos) {
  for (let d of datos) {
    full_name = d.first_name + d.last_name;
    if (validar(full_name)) {
      people.push(full_name);
    }
  }
  let porcentaje = (full_name.length * datos.length) / 100;
  res1.innerText =
    "Porcentaje de personas cuyo nombre y apellido tienen mas de 12 caracteres es " +
    porcentaje;
  paper.append(res1);
  // return console.log(porcentaje);
}

function validar(full_name) {
  return full_name.length > MAX_CANT;
}

/* Ejercicio 2
-------------------------------------------------------------------------------------------- */
let ej2 = document.getElementById("ej2");
let btn = document.getElementById("btn");

fetch("https://reqres.in/api/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (ppl) {
    visualizar(ppl.data);
  });

function visualizar(info) {
  for (i of info) {
    let imagen = document.createElement("img");
    imagen.setAttribute("src", i.avatar);
    ej2.append(imagen);
  }
}
function capturar() {
  let input = document.getElementById("text").value;
  return mostrar(input);
}

function mostrar(num) {
  fetch("https://reqres.in/api/users?page=" + num)
    .then(function (response) {
      return response.json();
    })
    .then(function (d) {
      limpiar();
      visualizar(d.data);
    });
}

function limpiar() {
  ej2.innerHTML = null;
}
