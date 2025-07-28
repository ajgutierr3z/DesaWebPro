
fetch("productos.json")
  .then(res => res.json())
  .then(data => {
    mostrarProductos(data);
  });

function mostrarProductos(productos) {
  const contenedor = document.getElementById("productos");
  productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img src="\${producto.imagen}" alt="\${producto.nombre}" width="150">
      <h3>\${producto.nombre}</h3>
      <p>$\${producto.precio}</p>
      <button class="agregar" data-id="\${producto.id}">Agregar</button>
    `;
    contenedor.appendChild(div);
  });
}

document.addEventListener("click", function(e) {
  if (e.target.classList.contains("agregar")) {
    const id = e.target.getAttribute("data-id");
    agregarAlCarrito(id);
  }
});

function agregarAlCarrito(id) {
  mostrarAlerta("Producto agregado al carrito");
}

function mostrarAlerta(mensaje) {
  const alerta = document.createElement("div");
  alerta.className = "toast";
  alerta.innerText = mensaje;
  document.body.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 3000);
}
