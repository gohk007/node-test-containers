let inventory = {
    products: [
      {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        quantity: 50,
        price: 999.99
      },
      {
        id: 2,
        name: "Smartphone",
        category: "Electronics",
        quantity: 150,
        price: 699.99
      },
      {
        id: 3,
        name: "Desk Chair",
        category: "Furniture",
        quantity: 85,
        price: 149.99
      },
      {
        id: 4,
        name: "Wireless Mouse",
        category: "Accessories",
        quantity: 200,
        price: 29.99
      },
      {
        id: 5,
        name: "Notebook",
        category: "Stationery",
        quantity: 300,
        price: 2.99
      }
    ]
  };
  
  exports.getInventory = () => {
    return inventory;
  };
  
  exports.addProduct = (product) => {
    const newId = inventory.products.length ? Math.max(...inventory.products.map(p => p.id)) + 1 : 1;
    product.id = newId;
    inventory.products.push(product);
    return product;
  };
  