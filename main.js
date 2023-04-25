class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("All fields are required");
            return;
        }

        if (this.products.some((product) => product.code === code)) {
            console.log("The code is already in use");
            return;
        }

        const id = this.products.length + 1;
        const product = { id, title, description, price, thumbnail, code, stock };
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((product) => product.id === id);
        if (product) {
            return product;
        } else {
            console.log("Not Found");
        }
    }
}

const productManager = new ProductManager();

// Agregar algunos productos
productManager.addProduct("Producto 1", "Descripción del producto 1", 10, "img1.jpg", "P001", 5);
productManager.addProduct("Producto 2", "Descripción del producto 2", 20, "img2.jpg", "P002", 10);

// Obtener todos los productos
const products = productManager.getProducts();
console.log(products);

// Obtener un producto por id
const product = productManager.getProductById(2);
console.log(product);

// Intentar obtener un producto inexistente
productManager.getProductById(10);
