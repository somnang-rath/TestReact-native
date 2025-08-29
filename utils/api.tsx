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

// Mock API functions for demonstration
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
      name: "MacBook Pro 16”",
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
