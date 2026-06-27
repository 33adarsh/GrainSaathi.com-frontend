export interface Product {
  id: string;
  name: string;
  image: string;
  price: number; // in ₹/quintal
  quantity: string;
  location: string;
  category: string;
  grade: "A" | "B" | "C";
}

export interface Farmer {
  id: string;
  name: string;
  location: string;
  rating: number;
  totalListings: number;
  verified: boolean;
  phone: string;
  joinedYear: number;
}

export interface Listing {
  id: string;
  product: Product;
  farmer: Farmer;
  status: "Active" | "Sold" | "Pending";
  postedDate: string;
  minOrderQty: number; // in quintals
  description: string;
}

export interface Buyer {
  id: string;
  name: string;
  company: string;
  location: string;
  phone: string;
}

export interface Inquiry {
  id: string;
  listingId: string;
  buyer: Buyer;
  message: string;
  quantity: number; // in quintals
  status: "Sent" | "Replied" | "Closed";
  date: string;
}

export interface Order {
  id: string;
  listing: Listing;
  buyer: Buyer;
  quantity: number; // in quintals
  totalPrice: number; // in ₹
  status: "Pending" | "Confirmed" | "Delivered";
  date: string;
}
