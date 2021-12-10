export class Cart {
  constructor(userId) {
    this.userId = userId;
    this.cartList = [];
  }
  //addProduct(CartItem object)
  isProductExist(CartItem) {
    return this.cartList.filter((item) => item.id === CartItem.id).length > 0;
  }
  addProduct(CartItem) {
    if (this.cartList.filter((item) => item.id === CartItem.id).length > 0) {
      const index = this.cartList.map((item) => item.id).indexOf(CartItem.id);
      console.log(index);
      this.cartList[index].changeQuantity(CartItem.quantity);
    } else {
      this.cartList.push(CartItem);
    }
  }
  removeProduct(CartItem) {
    const index = this.cartList.indexOf(CartItem);
    if (index >= 0) {
      this.cartList.splice(index, 1);
    }
  }
  getCartItemIndex(CartItem) {
    return this.cartList.map((item) => item.id).indexOf(CartItem.id);
  }
  getCartItemPrice(CartItem) {
    const index = this.cartList.map((item) => item.id).indexOf(CartItem.id);
    return this.cartList[index].price * this.cartList[index].quantity;
  }
  getCartPrice() {
    return this.cartList
      .map((item) => item.price * item.quantity)
      .reduce(function (a, b) {
        return a + b;
      });
  }
  getCartQuantity() {
    if (this.cartList.length === 0) {
      return 0;
    } else {
      return this.cartList
        .map((item) => item.quantity)
        .reduce(function (a, b) {
          return a + b;
        });
    }
  }
}
