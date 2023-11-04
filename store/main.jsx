import React, { useEffect, useRef } from 'react';
import './custom.css';
import iconMenu from './icons/icon_menu.svg';
import iconShoppingCart from './icons/icon_shopping_cart.svg';
import iconClose from './icons/icon_close.png';
import btAddToCart from './icons/bt_add_to_cart.svg';
import logoCeci from './logos/logo_ceci.svg';
import iconArrow from './icons/flechita.svg';

const Store = () => {
  const emailMenu = useRef(null);
  const desktopMenu = useRef(null);
  const iconMenuMobile = useRef(null);
  const mobileMenu = useRef(null);
  const iconShopping = useRef(null);
  const asideShopping = useRef(null);
  const divcardscontainer = useRef(null);
  const productDetailLeft = useRef(null);
  const productDetailClose = useRef(null);
  const myordercontentContainer = useRef(null);
  const countCarrito = useRef(null);
  const totalCarrito = useRef(null);
  const modal = useRef(null);
  const cerrarModal = useRef(null);
  const productImageInfor = useRef(null);
  const labelPriceInfo = useRef(null);
  const labelNameInfo = useRef(null);
  const labelInforInfo = useRef(null);
  const buttonInfo = useRef(null);
  const productosEnCarrito = useRef([]);
  const productoACarrito = useRef([]);

  useEffect(() => {
    countCarrito.current.innerText = document.querySelectorAll('.shopping-cart').length;
    totalCarrito.current.innerText = '$0.00';

    const toggleMenu = () => {
      productDetailLeft.current.classList.add('inactive');
      asideShopping.current.classList.add('inactive');
      desktopMenu.current.classList.toggle('inactive');
    };

    const toggleMenuMobile = () => {
      productDetailLeft.current.classList.add('inactive');
      asideShopping.current.classList.add('inactive');
      mobileMenu.current.classList.toggle('inactive');
    };

    const toggleAsideShopping = () => {
      productDetailLeft.current.classList.add('inactive');
      mobileMenu.current.classList.add('inactive');
      desktopMenu.current.classList.add('inactive');
    };

    const closeProductDetail = () => {
      productoACarrito.current = [];
      asideShopping.current.classList.add('inactive');
      mobileMenu.current.classList.add('inactive');
      desktopMenu.current.classList.add('inactive');
      productDetailLeft.current.classList.add('inactive');
    };

    const butonClick = () => {
      agregarCarrito(productoACarrito.current);
    };

    const closeModal = () => {
      modal.current.style.display = 'none';
    };

    emailMenu.current.addEventListener('click', toggleMenu);
    iconMenuMobile.current.addEventListener('click', toggleMenuMobile);
    iconShopping.current.addEventListener('click', toggleAsideShopping);
    productDetailClose.current.addEventListener('click', closeProductDetail);
    buttonInfo.current.addEventListener('click', butonClick);
    cerrarModal.current.addEventListener('click', closeModal);

    return () => {
      emailMenu.current.removeEventListener('click', toggleMenu);
      iconMenuMobile.current.removeEventListener('click', toggleMenuMobile);
      iconShopping.current.removeEventListener('click', toggleAsideShopping);
      productDetailClose.current.removeEventListener('click', closeProductDetail);
      buttonInfo.current.removeEventListener('click', butonClick);
      cerrarModal.current.removeEventListener('click', closeModal);
    };
  }, []);

  const agregarCarrito = (producto) => {
    const verificarProducto = (nameProduct) => {
      return productosEnCarrito.current.some((articulo) => articulo.name === nameProduct);
    };

    if (!verificarProducto(producto.name)) {
      productosEnCarrito.current.push({
        name: producto.name,
        price: producto.price,
        quantity: producto.quantity,
      });
    } else {
      productosEnCarrito.current.forEach((articulo) => {
        if (articulo.name === producto.name) {
          articulo.quantity += producto.quantity;
        }
      });
    }

    const carritoItem = document.createElement('div');
    carritoItem.classList.add('shopping-cart');
    carritoItem.innerHTML = `
      <img src=${producto.img} alt=${producto.name} class="product-image">
      <div class="product-info">
        <span class="product-name">${producto.name}</span>
        <span class="product-price">$${producto.price.toFixed(2)}</span>
        <div class="quantity-info">
          <span class="product-quantity">Quantity: ${producto.quantity}</span>
          <button class="btn-remove">Remove</button>
        </div>
      </div>
    `;
    asideShopping.current.appendChild(carritoItem);
    countCarrito.current.innerText = document.querySelectorAll('.shopping-cart').length;

    const btnRemove = carritoItem.querySelector('.btn-remove');
    btnRemove.addEventListener('click', () => {
      productosEnCarrito.current = productosEnCarrito.current.filter((articulo) => articulo.name !== producto.name);
      asideShopping.current.removeChild(carritoItem);
      countCarrito.current.innerText = document.querySelectorAll('.shopping-cart').length;
      actualizarTotal();
    });

    actualizarTotal();
    closeModal();
  };

  const actualizarTotal = () => {
    let total = 0;
    productosEnCarrito.current.forEach((articulo) => {
      total += articulo.price * articulo.quantity;
    });
    totalCarrito.current.innerText = `$${total.toFixed(2)}`;
  };

  const mostrarProducto = (producto) => {
    productImageInfor.current.src = producto.img;
    labelPriceInfo.current.innerText = `$${producto.price.toFixed(2)}`;
    labelNameInfo.current.innerText = producto.name;
    labelInforInfo.current.innerText = producto.info;
    productoACarrito.current = {
      name: producto.name,
      price: producto.price,
      img: producto.img,
      quantity: 1,
    };
    productDetailLeft.current.classList.remove('inactive');
  };

  const mostrarModal = () => {
    modal.current.style.display = 'flex';
  };

  const productos = [
    {
      id: 1,
      name: 'Product 1',
      price: 9.99,
      img: 'path-to-image-1',
      info: 'Product 1 description',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99,
      img: 'path-to-image-2',
      info: 'Product 2 description',
    },
    // Add more products here
  ];

  return (
    <div>
      <header>
        <div className="email-menu" ref={emailMenu}>
          <img src={iconMenu} alt="Menu" />
          <span>Menu</span>
        </div>
        <div className="desktop-menu inactive" ref={desktopMenu}>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
        <div className="mobile-menu inactive" ref={mobileMenu}>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
        <div className="cart-container">
          <img src={iconShoppingCart} alt="Cart" onClick={mostrarProducto} />
          <span className="cart-counter" ref={countCarrito}>0</span>
        </div>
      </header>
      <main>
        <div className="products-container">
          {productos.map((producto) => (
            <div className="product-item" key={producto.id}>
              <img src={producto.img} alt={producto.name} />
              <div className="product-details">
                <span className="product-name">{producto.name}</span>
                <span className="product-price">$ {producto.price.toFixed(2)}</span>
                <button className="btn-add-cart" onClick={() => mostrarProducto(producto)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="product-detail inactive" ref={productDetailLeft}>
          <div className="product-info">
            <img src="" alt="" ref={productImageInfor} />
            <div className="product-text">
              <span className="product-name" ref={labelNameInfo}></span>
              <span className="product-price" ref={labelPriceInfo}></span>
              <p className="product-description" ref={labelInforInfo}></p>
            </div>
          </div>
          <div className="product-add">
            <button className="btn-add-cart" onClick={agregarCarrito}>Add to Cart</button>
          </div>
        </div>
      </main>
      <aside className="shopping-cart" ref={asideShopping}>
        <div className="shopping-cart-header">
          <h3>Shopping Cart</h3>
          <button className="btn-close" onClick={toggleAsideShopping}>
            <img src={iconClose} alt="Close" />
          </button>
        </div>
        <div className="shopping-cart-items">
          {/* Shopping cart items */}
        </div>
        <div className="shopping-cart-total">
          Total: <span ref={totalCarrito}>$0.00</span>
        </div>
      </aside>
      <div className="modal" ref={modal}>
        <div className="modal-content">
          <span className="modal-close" onClick={cerrarModal}>&times;</span>
          <h2>Welcome to our store!</h2>
          <p>Sign up for our newsletter and get 10% off your first purchase.</p>
          <form className="modal-form">
            <input type="email" placeholder="Email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Store;
