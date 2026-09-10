export interface Listing {
  id: number
  title: string
  location: string
  price: number
  rating: number
  image: string
  category: string
}

export const listingsData: Listing[] = [
  {
    id: 1,
    title: "Beautiful Beach House",
    location: "Alexandria, Egypt",
    price: 120,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
    category: "Beach",
  },

  {
    id: 2,
    title: "Modern City Apartment",
    location: "Cairo, Egypt",
    price: 85,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    category: "City",
  },

  {
    id: 3,
    title: "Cozy Mountain Cabin",
    location: "Saint Catherine, Egypt",
    price: 150,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
    category: "Mountain",
  },

  {
    id: 4,
    title: "Luxury Private Villa",
    location: "North Coast, Egypt",
    price: 220,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    category: "Luxury",
  },

  {
    id: 5,
    title: "Beautiful Sea View Villa",
    location: "Marsa Matrouh, Egypt",
    price: 130,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80",
    category: "Beach",
  },

  {
    id: 6,
    title: "Downtown Studio",
    location: "Cairo, Egypt",
    price: 70,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    category: "City",
  },

  {
    id: 7,
    title: "Peaceful Countryside Home",
    location: "Fayoum, Egypt",
    price: 95,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=80",
    category: "Countryside",
  },

  {
    id: 8,
    title: "Luxury Sea View Apartment",
    location: "El Gouna, Egypt",
    price: 190,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
    category: "Luxury",
  },
]