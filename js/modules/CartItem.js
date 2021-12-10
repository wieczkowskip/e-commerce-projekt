export class CartItem{
    constructor(id, Product, quantity){
        this.id = id;
        this.ProductId = Product.id;
        this.ProductPhoto = Product.photosThumbnail[0];
        this.ProductName = Product.name;
        this.price = Product.actualPrice;
        this.quantity = quantity;
    }
    changeQuantity(value){
        this.quantity = value;
    }
    getCartItemTotalPrice(){
        return this.price * this.quantity;
    }
    

}