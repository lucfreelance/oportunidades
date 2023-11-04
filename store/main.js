let emailMenu = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let iconMenuMobile = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu");
let iconShopping = document.querySelector(".navbar-shopping-cart");
let asideShopping = document.querySelector(".product-detail");
let divcardscontainer = document.querySelector(".cards-container");
let productDetailLeft = document.querySelector(".product-detail-left");
let productDetailClose = document.querySelector(".product-detail-close");
let myordercontentContainer = document.querySelector(".my-order-content");
let countCarrito = document.querySelector(".navbar-shopping-cart div");
let totalCarrito = document.querySelector(".total");
let modal = document.querySelector(".modal");
let cerrarModal = document.querySelector(".boton-modal");
let productImageInfor = document.querySelector(
  ".product-detail-left > img:nth-child(2)"
);
let labelPriceInfo = document.querySelector(
  ".product-info-left p:nth-child(1)"
);
let labelNameInfo = document.querySelector(".product-info-left p:nth-child(2)");
let labelInforInfo = document.querySelector(
  ".product-info-left p:nth-child(3)"
);
let buttonInfo = document.querySelector(".add-to-cart-button");
let productosEnCarrito = [];
let productoACarrito = [];

// countCarrito.innerText = document.querySelectorAll(".shopping-cart").length;
// totalCarrito.innerText = "$0.00";

emailMenu.addEventListener("click", toggleMenu);
iconMenuMobile.addEventListener("click", toggleMenuMobile);
iconShopping.addEventListener("click", toggleAsideShopping);
productDetailClose.addEventListener("click", closeProductDetail);
buttonInfo.addEventListener("click", butonClick);
cerrarModal.addEventListener("click", closeModal);

function butonClick() {
  agregarCarrito(productoACarrito);
}

function toggleMenu() {
  productDetailLeft.classList.add("inactive");
  asideShopping.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
}

function toggleMenuMobile() {
  productDetailLeft.classList.add("inactive");
  asideShopping.classList.add("inactive");
  mobileMenu.classList.toggle("inactive");
}

function toggleAsideShopping() {
  productDetailLeft.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  asideShopping.classList.toggle("inactive");
}

function openProductDetail() {
  asideShopping.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetailLeft.classList.remove("inactive");
}

function closeProductDetail() {
  productoACarrito = [];
  asideShopping.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetailLeft.classList.add("inactive");
}

function verificarProducto(nameProduct) {
  return productosEnCarrito.some(function (articulo) {
    return articulo === nameProduct;
  });
}

function closeModal() {
  modal.style.display = "none";
}

let productList = [];
productList.push({
  name: "Collar - Princesa Flor",
  price: 30000,
  image:
    "https://i.ibb.co/svWvHcL/flor.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  desc: "Este hermoso collar largo de estilo florido ha sido hecho a mano	 en base a semillas y materiales ecológicos.",
});
productList.push({
  name: "Sombrero - Panamera Cute",
  price: 90000,
  image:
    "https://i.ibb.co/yQhqKsf/3.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  desc: "Un extraordinario sombrero que combina el glamour pueblerino y la sofisticación de la ciudad. Y en una mujer sexy se ve mejor.",
});
productList.push({
  name: "Monedero - Siembra",
  price: 10000,
  image:
    "https://i.ibb.co/98Xhgb9/3.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  desc: "Un monedero reforzado con un modelo bordado y el tamaño perfecto para tus monedas.",
});
productList.push({
  name: "Peluche - Octopulpo",
  price: 25000,
  image:
    "https://i.ibb.co/ZGWPvGR/5.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  desc: "Precio por unidad. Diversos colores y una textura de pulpo muy esponjosa.",
});
productList.push({
  name: "Etiquetas decorativas - Hello Kity y personajes similares (Bajo encargo especial.",
  price: 25000,
  image:
    "https://i.ibb.co/KbHwcqG/6.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  desc: "Si quieres gritarle al mundo que eres una loca fanática de Hello Kitty, ahora puedes llevar tu manía a todas partes en tu coche o en tu mochila.",
});
productList.push({
  name: "Letrero Informativo - Prohibido Cagar (para perros)",
  price: 30000,
  image:
    "https://i.ibb.co/XS2h6Kb/7.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  desc: "Harto que los perros defequen en la entrada de tu casa y pisas la mierda al salir? Ahora puedes avisar a los perros que está prohibido defecar en tu entrada o se atendran a las consecuencias legales o a la venganza personal.",
});
productList.push({
  name: "Escultura - Chiva cantinera",
  price: 1500,
  image:
    "https://i.ibb.co/D4f6VvV/5.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  desc: "Para los que extrañan las vervenas, el guaro, el relajo, las montoneras y un lugar donde los mafiosos se sientan como en casa... Además esas chivas a Juanchito con asalto incluído 😉",
});
productList.push({
  name: "Juguete didáctico - Simulador de necropsias para niños hasta 9 años.",
  price: 895,
  image:
    "https://i.ibb.co/wSPmvTj/8.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  desc: "Si tu hijo o hija demuestran aptitudes para las ciencias forenses, puedes animarlos desde pequeñós a conocer las asquerosas entrañas de los seres vivientes (sin la sangre ni vampiros involucrados).",
});

function renderListProduct(productList) {
  for (const product of productList) {
    let divproductCard = document.createElement("div");
    let imgproductcard = document.createElement("img");
    let divproductinfo = document.createElement("div");
    let divdivproductinfo = document.createElement("div");
    let pprice = document.createElement("p");
    let pname = document.createElement("p");
    let figureproductinfo = document.createElement("figure");
    let imgproductinfo = document.createElement("img");
    divproductCard.classList.add("product-card");
    imgproductcard.setAttribute("src", product.image);
    divproductinfo.classList.add("product-info");
    pprice.innerText = "$" + product.price;
    pname.innerText = product.name;
    imgproductinfo.setAttribute("src", "./icons/bt_add_to_cart.svg");

    figureproductinfo.appendChild(imgproductinfo);
    divdivproductinfo.appendChild(pprice);
    divdivproductinfo.appendChild(pname);

    divproductinfo.appendChild(divdivproductinfo);
    divproductinfo.appendChild(figureproductinfo);

    divproductCard.appendChild(imgproductcard);
    divproductCard.appendChild(divproductinfo);

    divcardscontainer.appendChild(divproductCard);

    imgproductcard.addEventListener("click", function () {
      mostrarInfoProduct(
        product.image,
        product.price,
        product.name,
        product.desc
      );
      openProductDetail();
    });

    imgproductinfo.addEventListener("click", function () {
      let productoAgregado = [];
      productoAgregado.push({
        name: product.name,
        price: product.price,
        image: product.image,
      });
      agregarCarrito(productoAgregado);
    });
  }
}

/* Funcion para agregar productos al carrito */
function agregarCarrito(producto) {
  if (verificarProducto(producto[0].name)) {
    productoACarrito = [];
    return (modal.style.display = "grid");
  }

  /* Creacion de elemtentos HTML */
  let divShoppingCart = document.createElement("div");
  let figureShoppingCart = document.createElement("figure");
  let imgfigureShoppingCart = document.createElement("img");
  let pnameShoppingCart = document.createElement("p");
  let ppriceShoppingCart = document.createElement("p");
  let imgcloseShoppingCart = document.createElement("img");

  /* Se agrega contenido a cada uno de los elementos */
  divShoppingCart.classList.add("shopping-cart");
  imgfigureShoppingCart.setAttribute("src", producto[0].image);
  pnameShoppingCart.innerText = producto[0].name;
  ppriceShoppingCart.innerText = "$" + producto[0].price;
  imgcloseShoppingCart.setAttribute("src", "./icons/icon_close.png");
  imgcloseShoppingCart.classList.add("removeList");

  /* Se insertan los documentos */
  figureShoppingCart.appendChild(imgfigureShoppingCart);
  divShoppingCart.appendChild(figureShoppingCart);
  divShoppingCart.appendChild(pnameShoppingCart);
  divShoppingCart.appendChild(ppriceShoppingCart);
  divShoppingCart.appendChild(imgcloseShoppingCart);
  myordercontentContainer.appendChild(divShoppingCart);

  /* Se agregan la cantidad de productos ademas de la suma de precios */
  countCarrito.innerText = document.querySelectorAll(".shopping-cart").length;
  totalCarrito.innerText =
    "$" +
    (Number(totalCarrito.innerText.substring(1)) + Number(producto[0].price));
  productosEnCarrito.push(producto[0].name);

  /* Funcion para quitar productos del carrito */
  imgcloseShoppingCart.addEventListener("click", function () {
    divShoppingCart.remove();
    countCarrito.innerText = document.querySelectorAll(".shopping-cart").length;
    totalCarrito.innerText =
      "$" +
      (Number(totalCarrito.innerText.substring(1)) - Number(producto[0].price));
    productosEnCarrito.splice(productosEnCarrito.indexOf(producto[0].name), 1);
  });
}

function mostrarInfoProduct(imagen, precio, nombre, descripcion) {
  productImageInfor.setAttribute("src", imagen);
  labelPriceInfo.innerText = "$" + precio;
  labelNameInfo.innerText = nombre;
  labelInforInfo.innerText = descripcion;
  productoACarrito = [];
  productoACarrito.push({
    name: nombre,
    price: precio,
    image: imagen,
  });
}

renderListProduct(productList);
