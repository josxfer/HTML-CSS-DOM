const form = document.getElementById("formulario");
const finalizar = document.querySelector("#btn_fin");
const imp_juana = document.querySelector("#imp_juana")
const imp_pedro = document.querySelector("#imp_pedro")
const valoresTotales = document.querySelector("#valoresTotales")
//Creo un arreglo para guardar los objetos que se van creando
const arregloTotal = [];
//Objeto para almacenar los totales
const totalesJuana = {};
const totalesPedro = {};
//Esta la hice unicamente para usarla en el boton "Finalizar"
let validar = true;
//Estas son las variables para multiplicar los valores por la cantidad total de cada producto
let valorAqua = 200;
let valorEmocion = 180;
let valorAlegria = 160;
let valorFrescura = 150;
let cont = 0;
let totalJuana = 0;
let totalPedro = 0;

//Esta funcion me trae los elementos del formulario como objetos y los almacena en las posiciones del array
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  arregloTotal.push(data);
  form.reset();
});

// La idea de esta otra funcion es que pueda sacar todos los totales cuando el array esté lleno, es decir cuando el usuario lo requiera
finalizar.addEventListener("click", function () {
  validar = false;
  if (validar === false) {
    sumarTotales();
  }
});

//Se supone que esta funcion es la que va a sacar los totales
function sumarTotales() {
  //Con esto vamos a recorrer el arreglo de objetos
  for (let i = 0; i < arregloTotal.length; i++) {
    let objeto = arregloTotal[i];
    //Acá obtenemos las propiedades del objeto
    let vendedor = objeto.vendedor;
    let producto = objeto.producto;
    let cantidad = +objeto.cantidad;
    // Calcular los totales por producto
    if (vendedor === "juana") {
      if (totalesJuana[producto]) {
        totalesJuana[producto].cantidad += cantidad;
        if (producto === "aqua") {
          totalesJuana[producto].total = totalesJuana[producto].cantidad * valorAqua;
        } else if (producto === "emocion") {
          totalesJuana[producto].total = totalesJuana[producto].cantidad * valorEmocion;
        } else if (producto === "alegria") {
          totalesJuana[producto].total = totalesJuana[producto].cantidad * valorAlegria;
        } else if (producto === "frescura") {
          totalesJuana[producto].total = totalesJuana[producto].cantidad * valorFrescura;
        }
      } else {
        if (producto === "aqua") {
          totalesJuana[producto] = {
            cantidad: cantidad,
            total: cantidad * valorAqua,
          };
        }else if (producto === "emocion") {
          totalesJuana[producto] = {
            cantidad: cantidad,
            total: cantidad * valorEmocion,
          };
        }else if (producto === "alegria") {
          totalesJuana[producto] = {
            cantidad: cantidad,
            total: cantidad * valorAlegria,
          };
        }else if (producto === "frescura") {
          totalesJuana[producto] = {
            cantidad: cantidad,
            total: cantidad * valorFrescura,
          };
        }
      }
      totalJuana += totalesJuana[producto].total
    }else if (vendedor === "pedro") {
      if (totalesPedro[producto]) {
        totalesPedro[producto].cantidad += cantidad;
        if (producto === "aqua") {
          totalesPedro[producto].total =
            totalesPedro[producto].cantidad * valorAqua;
        } else if (producto === "emocion") {
          totalesPedro[producto].total =
            totalesPedro[producto].cantidad * valorEmocion;
        } else if (producto === "alegria") {
          totalesPedro[producto].total =
            totalesPedro[producto].cantidad * valorAlegria;
        } else if (producto === "frescura") {
          totalesPedro[producto].total =
            totalesPedro[producto].cantidad * valorFrescura;
        }
      } else {
        if (producto === "aqua") {
          totalesPedro[producto] = {
            cantidad: cantidad,
            total: cantidad * valorAqua,
          };
        }else if (producto === "emocion") {
          totalesPedro[producto] = {
            cantidad: cantidad,
            total: cantidad * valorEmocion,
          };
        }else if (producto === "alegria") {
          totalesPedro[producto] = {
            cantidad: cantidad,
            total: cantidad * valorAlegria,
          };
        }else if (producto === "frescura") {
          totalesPedro[producto] = {
            cantidad: cantidad,
            total: cantidad * valorFrescura,
          };
        }
      }totalPedro += totalesPedro[producto].total
    }
  }

  // Imprimir los totales por producto
  for (let producto in totalesJuana) {
    if (totalesJuana.hasOwnProperty(producto)) {
      const productoP = document.createElement("p");
      productoP.textContent = "Producto: " + producto;
      imp_juana.appendChild(productoP);

      const cantidadP = document.createElement("p");
      cantidadP.textContent = "Cantidad: " + totalesJuana[producto].cantidad;
      imp_juana.appendChild(cantidadP);

      const totalP = document.createElement("p");
      totalP.textContent = "Total: " + totalesJuana[producto].total;
      imp_juana.appendChild(totalP);

      const hr = document.createElement("hr"); // Agregar una línea separadora
      imp_juana.appendChild(hr);
    }
  }
  const valorTotalJuana = document.createElement("p");
  valorTotalJuana.textContent = "El valor total vendido por Juana es: " + totalJuana;
  imp_juana.appendChild(valorTotalJuana);

  for (let producto in totalesPedro) {
    if (totalesPedro.hasOwnProperty(producto)) {
      const productoP = document.createElement("p");
      productoP.textContent = "Producto: " + producto;
      imp_pedro.appendChild(productoP);

      const cantidadP = document.createElement("p");
      cantidadP.textContent = "Cantidad: " + totalesPedro[producto].cantidad;
      imp_pedro.appendChild(cantidadP);

      const totalP = document.createElement("p");
      totalP.textContent = "Total: " + totalesPedro[producto].total;
      imp_pedro.appendChild(totalP);

      const hr = document.createElement("hr"); // Agregar una línea separadora
      imp_pedro.appendChild(hr);
    }
  }
  const valorTotalPedro = document.createElement("p");
  valorTotalPedro.textContent = "El valor total vendido por Pedro es: " + totalPedro;
  imp_pedro.appendChild(valorTotalPedro);

  if (totalPedro > totalJuana) {
    const ganador = document.createElement("h2")
    ganador.textContent = "EL GANADOR ES: PEDRO"
    valoresTotales.appendChild(ganador)
  }else if (totalPedro < totalJuana) {
    const ganador = document.createElement("h2")
    ganador.textContent = "EL GANADOR ES: JUANA"
    valoresTotales.appendChild(ganador)
  }else{
    const ganador = document.createElement("h2")
    ganador.textContent = "EMPATE EN VENTAS"
    valoresTotales.appendChild(ganador)
  }
}
