export interface Product {
    id: number;
    name: string;
    price: string;
    category: string;
    image: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Classic White Tee",
        price: "$29.00",
        category: "Clothes",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
    },
    {
        id: 2,
        name: "Silk Blouse",
        price: "$89.50",
        category: "Clothes",
        image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
    },
    {
        id: 3,
        name: "Leather Satchel",
        price: "$149.00",
        category: "Bags",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
    },
    {
        id: 4,
        name: "Running Sneakers",
        price: "$120.00",
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
    },
    {
        id: 5,
        name: "Summer Dress",
        price: "$65.00",
        category: "Clothes",
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
    },
    {
        id: 6,
        name: "Minimalist Watch",
        price: "$199.00",
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
    },
];
