import { Cart } from "./modules/Cart.js";
import { CartItem } from "./modules/CartItem.js";
import { Product } from "./modules/Product.js";

let quantity = 1;
let indexPhoto = 0;
let indexPhotoFull = 0;
const SneakersItem = new Product(
  1,
  [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
  ],
  [
    "images/image-product-1-thumbnail.jpg",
    "images/image-product-2-thumbnail.jpg",
    "images/image-product-3-thumbnail.jpg",
    "images/image-product-4-thumbnail.jpg",
  ],
  "Sneaker Company",
  "Fall Limited Edition Sneakers",
  `These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.`,
  125,
  250
);
const UserCart = new Cart("Adam");

const menuBtn = document.getElementById("menuBtn");
const menuBtn2 = document.getElementById("menuBtn2");
const toggledMenu = document.querySelector(".toggledMenu");
const overlay = document.getElementById("overlay");
const overlay2 = document.getElementById("overlay2");

const increaseBtn = document.querySelector(".quantity__plus");
const decreaseBtn = document.querySelector(".quantity__minus");
const showQuantity = document.querySelector(".quantity__number");
const addBtn = document.querySelector(".product__add-button");
const cartQuantity = document.querySelector(".cart-quantity");
const cartBtn = document.querySelector(".cartBtn");
const cartInfo = document.querySelector(".cart-info");
const cartInfoListText = document.querySelector(".cart-info__list p");
const cartInfoListUL = document.querySelector(".cart-info__list ul");
const cartInfoCheckout = document.querySelector(".cart-info__checkout");

const productActualPhoto = document.querySelector(".gallery_photo img");
const leftBtn = document.querySelector(".gallery_leftBtn img");
const rightBtn = document.querySelector(".gallery_rightBtn img");

const leftBtnFull = document.querySelector(
  ".product__gallery--fullSize .gallery_leftBtn img"
);
const rightBtnFull = document.querySelector(
  ".product__gallery--fullSize .gallery_rightBtn img"
);

const thumbnailPhoto1 = document.getElementById("photo1");
const thumbnailPhoto2 = document.getElementById("photo2");
const thumbnailPhoto3 = document.getElementById("photo3");
const thumbnailPhoto4 = document.getElementById("photo4");

const thumbnailPhoto1Full = document.querySelector(
  ".product__gallery--fullSize #photo1"
);
const thumbnailPhoto2Full = document.querySelector(
  ".product__gallery--fullSize #photo2"
);
const thumbnailPhoto3Full = document.querySelector(
  ".product__gallery--fullSize #photo3"
);
const thumbnailPhoto4Full = document.querySelector(
  ".product__gallery--fullSize #photo4"
);

const galleryFullCloseBtn = document.querySelector(".gallery__close-btn");
galleryFullCloseBtn.addEventListener("click", closeFullGalery);

thumbnailPhoto1.addEventListener(
  "click",
  updateMainPhoto.bind(thumbnailPhoto1, 0)
);
thumbnailPhoto2.addEventListener(
  "click",
  updateMainPhoto.bind(thumbnailPhoto2, 1)
);
thumbnailPhoto3.addEventListener(
  "click",
  updateMainPhoto.bind(thumbnailPhoto3, 2)
);
thumbnailPhoto4.addEventListener(
  "click",
  updateMainPhoto.bind(thumbnailPhoto4, 3)
);

thumbnailPhoto1Full.addEventListener(
  "click",
  updateMainPhotoFull.bind(thumbnailPhoto1Full, 0)
);
thumbnailPhoto2Full.addEventListener(
  "click",
  updateMainPhotoFull.bind(thumbnailPhoto2Full, 1)
);
thumbnailPhoto3Full.addEventListener(
  "click",
  updateMainPhotoFull.bind(thumbnailPhoto3Full, 2)
);
thumbnailPhoto4Full.addEventListener(
  "click",
  updateMainPhotoFull.bind(thumbnailPhoto4Full, 3)
);

const galleryMainPhotoImage = document.querySelector(".gallery_photo img");
galleryMainPhotoImage.src = SneakersItem.photos[0];
const galleryMainPhotoImageFull = document.querySelector(
  ".product__gallery--fullSize .gallery_photo img"
);

function updateMainPhoto(number) {
  document.querySelector(".active").classList.remove("active");
  this.classList.add("active");
  galleryMainPhotoImage.src = SneakersItem.photos[number];
}
function updateMainPhotoFull(number) {
  document.querySelector(".active2").classList.remove("active2");
  this.classList.add("active2");
  galleryMainPhotoImageFull.src = SneakersItem.photos[number];
}

const galleryMainPhoto = document.querySelector(".gallery_photo");
const galleryFullSize = document.querySelector(".product__gallery--fullSize");
galleryMainPhoto.addEventListener("click", showFullGallery);

function showFullGallery() {
  galleryFullSize.classList.add("active");
  overlay2.classList.add("active2");
}
function closeFullGalery() {
  galleryFullSize.classList.remove("active");
  overlay2.classList.remove("active2");
}

increaseBtn.addEventListener("click", increaseItemAmount);
decreaseBtn.addEventListener("click", decreaseItemAmount);
addBtn.addEventListener("click", addItem);
cartBtn.addEventListener("click", showCart);
updateQuantity();

menuBtn.addEventListener("click", showMenu);
menuBtn2.addEventListener("click", closeMenu);

leftBtn.addEventListener("click", changePhoto.bind(this, "left"));
rightBtn.addEventListener("click", changePhoto.bind(this, "right"));

function changePhoto(direction) {
  if (direction === "left") {
    if (indexPhoto === 0) {
      indexPhoto = SneakersItem.photos.length - 1;
      productActualPhoto.src = SneakersItem.photos[indexPhoto];
    } else {
      productActualPhoto.src = SneakersItem.photos[--indexPhoto];
    }
  } else {
    if (indexPhoto === SneakersItem.photos.length - 1) {
      indexPhoto = 0;
      productActualPhoto.src = SneakersItem.photos[indexPhoto];
    } else {
      productActualPhoto.src = SneakersItem.photos[++indexPhoto];
    }
  }
}

leftBtnFull.addEventListener("click", changePhotoFull.bind(this, "left"));
rightBtnFull.addEventListener("click", changePhotoFull.bind(this, "right"));

function changePhotoFull(direction) {
  if (direction === "left") {
    if (indexPhotoFull === 0) {
      indexPhotoFull = SneakersItem.photos.length - 1;
      galleryMainPhotoImageFull.src = SneakersItem.photos[indexPhotoFull];
    } else {
      galleryMainPhotoImageFull.src = SneakersItem.photos[--indexPhotoFull];
    }
  } else {
    if (indexPhotoFull === SneakersItem.photos.length - 1) {
      indexPhotoFull = 0;
      galleryMainPhotoImageFull.src = SneakersItem.photos[indexPhotoFull];
    } else {
      galleryMainPhotoImageFull.src = SneakersItem.photos[++indexPhotoFull];
    }
  }
  const object = document.querySelector(
    `.product__gallery--fullSize #photo${indexPhotoFull + 1}`
  );
  document.querySelector(".active2").classList.remove("active2");
  object.classList.add("active2");
}

function showCart() {
  cartInfo.classList.toggle("visible");
}
function showMenu() {
  toggledMenu.classList.remove("invisible");
  overlay.classList.add("active");
}
function closeMenu() {
  toggledMenu.classList.add("invisible");
  overlay.classList.remove("active");
}

function removeItem(Item) {
  UserCart.cartList.splice(UserCart.getCartItemIndex(Item), 1); //remove from array
  const CartItemDiv = document.querySelector("#" + Item.id);
  CartItemDiv.parentNode.removeChild(CartItemDiv);
  cartQuantity.innerHTML = UserCart.getCartQuantity();
  if (UserCart.getCartQuantity() === 0) {
    cartInfoListText.classList.remove("invisible");
    cartQuantity.classList.remove("visible");
    cartInfoCheckout.classList.add("invisible");
  }
}

function addItem() {
  if (UserCart.cartList.length === 0) {
    cartInfoListText.classList.add("invisible");
    cartInfoCheckout.classList.remove("invisible");
  }
  // const newCartItem = new CartItem(
  //   "abc" + parseInt(Math.random() * 3),
  //   SneakersItem,
  //   quantity
  // );
  const newCartItem = new CartItem(
      "abc1",
      SneakersItem,
      quantity
    );
  if (!UserCart.isProductExist(newCartItem)) {
    const newCartItemListItem = document.createElement("li");
    newCartItemListItem.id = newCartItem.id;
    const newPhotoDiv = document.createElement("div");
    newPhotoDiv.classList.add("list-item__photo");

    const newPhoto = document.createElement("img");
    newPhoto.src = newCartItem.ProductPhoto;

    const newTextDiv = document.createElement("div");
    newTextDiv.classList.add("list-item__text");

    const newProductName = document.createElement("div");
    newProductName.classList.add("text__product-name");
    newProductName.innerHTML = newCartItem.ProductName;

    const newProductPriceInfo = document.createElement("div");
    newProductPriceInfo.classList.add("text__product-price-info");
    newProductPriceInfo.innerHTML =
      "$" + newCartItem.price + " x " + newCartItem.quantity;

    const newProductPriceTotal = document.createElement("div");
    newProductPriceTotal.classList.add("text__product-price-total");
    newProductPriceTotal.innerHTML = "$" + newCartItem.getCartItemTotalPrice();

    newTextDiv.appendChild(newProductName);
    newTextDiv.appendChild(newProductPriceInfo);
    newTextDiv.appendChild(newProductPriceTotal);

    const newDeleteBtnDiv = document.createElement("div");
    newDeleteBtnDiv.classList.add("list-item__deleteBtn");
    const newDeleteBtn = document.createElement("img");
    newDeleteBtn.src = "./images/icon-delete.svg";
    newDeleteBtnDiv.addEventListener(
      "click",
      removeItem.bind(null, newCartItem)
    );

    newPhotoDiv.appendChild(newPhoto);

    newDeleteBtnDiv.appendChild(newDeleteBtn);

    newCartItemListItem.appendChild(newPhotoDiv); //children[0]
    newCartItemListItem.appendChild(newTextDiv); //children[1]
    newCartItemListItem.appendChild(newDeleteBtnDiv); //children[2]

    cartInfoListUL.appendChild(newCartItemListItem);
  } else {
    const actualTextDiv = document.querySelector(
      "#" + newCartItem.id + " .list-item__text"
    );

    const newProductName = actualTextDiv.children[0]; //children[0]

    newProductName.innerHTML = newCartItem.ProductName;

    const newProductPriceInfo = actualTextDiv.children[1]; //children[1]

    newProductPriceInfo.innerHTML =
      "$" + newCartItem.price + " x " + newCartItem.quantity;

    const newProductPriceTotal = actualTextDiv.children[2]; //children[2]

    newProductPriceTotal.innerHTML = "$" + newCartItem.getCartItemTotalPrice();
  }
  UserCart.addProduct(newCartItem);

  if (UserCart.getCartQuantity() > 0) {
    cartQuantity.innerHTML = UserCart.getCartQuantity();
    cartQuantity.classList.add("visible");
  } else {
    cartQuantity.classList.remove("visible");
  }
  quantity = 1;
  updateQuantity();
}

function increaseItemAmount() {
  quantity++;
  updateQuantity();
}
function decreaseItemAmount() {
  if (quantity > 1) {
    quantity--;
    updateQuantity();
  }
}
function updateQuantity() {
  showQuantity.innerHTML = quantity;
}
