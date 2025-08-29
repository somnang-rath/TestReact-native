// src/utils/api.ts
export interface Product {
  id: number;
  name: string;
  type: string;
  price: number;
  category: string;
  brand: string;
  description: string;
  stock: number;
  image: string;
}

// Add or update cart item
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// In-memory cart
let cart: CartItem[] = [];

// Add or update item in cart
export const addToCart = async (
  id: number,
  name: string,
  price: number,
  quantity: number,
  image: string
): Promise<CartItem[]> => {
  try {
    const existing = cart.find((item) => item.id === id);
    if (existing) {
      existing.quantity += quantity; // Increase quantity
    } else {
      cart.push({ id, name, price, quantity, image });
    }
    console.log("Cart updated:", cart);
    return cart;
  } catch (err) {
    console.error("Add to cart error:", err);
    return [];
  }
};

// Get all cart items
export const getCart = async (): Promise<CartItem[]> => {
  return cart;
};

// Remove item from cart
export const removeFromCart = async (id: number): Promise<CartItem[]> => {
  cart = cart.filter((item) => item.id !== id);
  return cart;
};
export const decreaseQuantity = async (id: number): Promise<CartItem[]> => {
  try {
    const existing = cart.find((item) => item.id === id);
    if (existing) {
      if (existing.quantity > 1) {
        existing.quantity -= 1; // decrease quantity
      } else {
        // quantity = 1, remove from cart
        cart = cart.filter((item) => item.id !== id);
      }
    }
    return cart;
  } catch (err) {
    console.error("Decrease quantity error:", err);
    return [];
  }
};
export const increaseQuantity = async (id: number): Promise<CartItem[]> => {
  try {
    const existing = cart.find((item) => item.id === id);
    if (existing) {
      existing.quantity += 1; // increase quantity
    }
    return cart;
  } catch (err) {
    console.error("Increase quantity error:", err);
    return [];
  }
};

// Clear cart
export const clearCart = async (): Promise<void> => {
  cart = [];
};

export const getProducts = async (): Promise<Product[]> => {
  // In a real app, this would be a fetch to your API
  return [
    {
      id: 1,
      name: "iPhone 14 Pro",
      type: "phone",
      price: 1199,
      category: "Smartphone",
      brand: "Apple",
      description:
        "The latest iPhone with A16 Bionic chip, 48MP main camera, and Dynamic Island.",
      stock: 15,
      image:
        "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg",
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra",
      type: "phone",
      price: 1299,
      category: "Smartphone",
      brand: "Samsung",
      description:
        "Flagship Android phone with 200MP camera, Snapdragon 8 Gen 2 processor, and S Pen support.",
      stock: 20,
      image:
        "https://beastgrip.com/cdn/shop/articles/unnamed_617cc0e8-87d4-4834-861c-960c63ef20ea.jpg?v=1740675056",
    },
    {
      id: 3,
      name: "MacBook Pro 16",
      type: "laptop",
      price: 2499,
      category: "Laptop",
      brand: "Apple",
      description:
        "High-performance laptop with M2 Pro chip, Liquid Retina XDR display, and all-day battery life.",
      stock: 10,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Sony WH-1000XM5",
      type: "Headphones",
      price: 399,
      category: "Headphones",
      brand: "Sony",
      description:
        "Industry-leading noise-canceling headphones with superb sound quality and 30-hour battery.",
      stock: 30,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgs02hTAoQ93zAb7zBVTXvmIhwHZDQ7LFYA&s",
    },
    {
      id: 5,
      name: "Nike Air Max 270",
      type: "shoes",
      price: 150,
      category: "Shoes",
      brand: "Nike",
      description:
        "Stylish and comfortable sneakers designed for everyday wear and performance.",
      stock: 50,
      image:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F01%2Fa-closer-look-at-the-teal-nikes-air-max-270-releasing-air-max-day-001.jpg?q=75&w=800&cbr=1&fit=max",
    },

    // ---------------- NEW 50 DATA ----------------
    {
      id: 6,
      name: "Wooden Cupboard Classic",
      type: "cupboard",
      price: 499,
      category: "Furniture",
      brand: "IKEA",
      description: "Spacious wooden cupboard with 4 doors and modern design.",
      stock: 12,
      image:
        "https://tse1.mm.bing.net/th/id/OIP.iSUSe57EIXbxVb75YxVmjQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 7,
      name: "Luxury Sofa Set",
      type: "sofa",
      price: 899,
      category: "Furniture",
      brand: "Ashley",
      description:
        "Comfortable 3-seat sofa with premium fabric and wooden frame.",
      stock: 8,
      image:
        "https://tse3.mm.bing.net/th/id/OIP.THvtPRx7RMaP4ZGs0LpX5gHaFb?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 8,
      name: "Modern LED Ceiling Light",
      type: "light",
      price: 120,
      category: "Lighting",
      brand: "Philips",
      description: "Energy-saving LED ceiling light with soft white glow.",
      stock: 40,
      image: "https://m.media-amazon.com/images/I/71JQfbfL7BL._AC_.jpg",
    },
    {
      id: 9,
      name: "OnePlus 11 5G",
      type: "phone",
      price: 899,
      category: "Smartphone",
      brand: "OnePlus",
      description:
        "Flagship phone with Snapdragon 8 Gen 2, Fluid AMOLED display, and fast charging.",
      stock: 25,
      image:
        "https://tse2.mm.bing.net/th/id/OIP.yJbnB7Us3nsfLZGG3pklYgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 10,
      name: "Leather Recliner Sofa",
      type: "sofa",
      price: 1100,
      category: "Furniture",
      brand: "La-Z-Boy",
      description: "Premium leather recliner sofa for living room comfort.",
      stock: 6,
      image:
        "https://tse4.mm.bing.net/th/id/OIP.x4wamgsp-vP4X6XJf3xUhQHaEt?rs=1&pid=ImgDetMain&o=7&rm=3",
    },

    // 👉 Continue like this until id: 55
    // (mix Cupboard, Phone, Light, Sofa with different names, price, stock, image, etc.)
  ];
};

export const searchProducts = async (
  query: string,
  Products: Product[]
): Promise<Product[]> => {
  const allProducts = await Products;
  return allProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.brand.toLowerCase().includes(query.toLowerCase())
  );
};
