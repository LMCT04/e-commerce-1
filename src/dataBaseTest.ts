type Product = {
  id: number;
  name: string;
  image: string[];
  description: string;
  delivery: boolean;
  price: number;
  off: {
    isActive: boolean;
    newPrice: number | null;
  };
};

export const productsDB: Product[] = [
  {
    id: 1,
    name: "Silla 1",
    image: ["https://cdn.homedepot.com.mx/productos/157708/157708-z.jpg", "https://cdn.leroymerlin.com.br/products/cadeira_de_plastico_sem_braco_bistro_branca_garden_life_91063084_13b5_600x600.jpg"],
    description: "",
    delivery: true,
    price: 1500,
    off: { isActive: true, newPrice: 1100 },
  },
  {
    id: 2,
    name: "Silla 2",
    image: ["", "", ""],
    description: "",
    delivery: true,
    price: 1800,
    off: { isActive: false, newPrice: null },
  },
  {
    id: 3,
    name: "Silla 3",
    image: ["", "", ""],
    description: "",
    delivery: true,
    price: 2300,
    off: { isActive: true, newPrice: 1999 },
  },
  {
    id: 4,
    name: "Product 4",
    image: ["", "", ""],
    description: "",
    delivery: true,
    price: 400,
    off: { isActive: false, newPrice: null },
  },
  {
    id: 5,
    name: "Product 5",
    image: ["", "", ""],
    description: "",
    delivery: true,
    price: 500,
    off: { isActive: true, newPrice: 80 },
  },
  {
    id: 6,
    name: "Product 6",
    image: ["", "", ""],
    description: "",
    delivery: true,
    price: 600,
    off: { isActive: false, newPrice: null },
  },
];