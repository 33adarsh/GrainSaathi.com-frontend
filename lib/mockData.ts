import { Product, Farmer, Listing, Buyer, Inquiry, Order } from "../types";

// ==========================================
// 1. MOCK PRODUCTS (8 items matching products/page.tsx)
// ==========================================
export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Basmati Rice",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600&auto=format&fit=crop",
    price: 3200,
    quantity: "500 Quintals",
    location: "Karnal, Haryana",
    category: "Rice & Paddy",
    grade: "A",
  },
  {
    id: "2",
    name: "Organic Sharbati Wheat",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=600&auto=format&fit=crop",
    price: 2800,
    quantity: "200 Quintals",
    location: "Sehore, Madhya Pradesh",
    category: "Wheat",
    grade: "A",
  },
  {
    id: "3",
    name: "Golden Hybrid Maize",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=600&auto=format&fit=crop",
    price: 2100,
    quantity: "150 Quintals",
    location: "Guntur, Andhra Pradesh",
    category: "Maize",
    grade: "B",
  },
  {
    id: "4",
    name: "Sona Masoori Paddy",
    image: "https://images.unsplash.com/photo-1534951474654-87823058c487?q=80&w=600&auto=format&fit=crop",
    price: 2450,
    quantity: "800 Quintals",
    location: "Raichur, Karnataka",
    category: "Rice & Paddy",
    grade: "B",
  },
  {
    id: "5",
    name: "Toor Dal (Pigeon Pea)",
    image: "https://images.unsplash.com/photo-1585935409141-f6701fdbbe3e?q=80&w=600&auto=format&fit=crop",
    price: 9500,
    quantity: "50 Quintals",
    location: "Latur, Maharashtra",
    category: "Pulses",
    grade: "A",
  },
  {
    id: "6",
    name: "Soybean Market Grade",
    image: "https://images.unsplash.com/photo-1594911772125-07fdaeeabc3d?q=80&w=600&auto=format&fit=crop",
    price: 4600,
    quantity: "350 Quintals",
    location: "Indore, Madhya Pradesh",
    category: "Oilseeds",
    grade: "B",
  },
  {
    id: "7",
    name: "Bengal Gram (Chana)",
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?q=80&w=600&auto=format&fit=crop",
    price: 5400,
    quantity: "120 Quintals",
    location: "Bikaner, Rajasthan",
    category: "Pulses",
    grade: "A",
  },
  {
    id: "8",
    name: "Mustard Seeds",
    image: "https://images.unsplash.com/photo-1447690709975-318628b14c57?q=80&w=600&auto=format&fit=crop",
    price: 5200,
    quantity: "280 Quintals",
    location: "Bharatpur, Rajasthan",
    category: "Oilseeds",
    grade: "A",
  },
];

// ==========================================
// 2. MOCK FARMERS (3 farmers)
// ==========================================
export const mockFarmers: Farmer[] = [
  {
    id: "F-01",
    name: "Rajesh Kumar",
    location: "Karnal, Haryana",
    rating: 4.8,
    totalListings: 15,
    verified: true,
    phone: "+91 98765 12345",
    joinedYear: 2024,
  },
  {
    id: "F-02",
    name: "Suresh Patel",
    location: "Sehore, Madhya Pradesh",
    rating: 4.6,
    totalListings: 9,
    verified: true,
    phone: "+91 98765 23456",
    joinedYear: 2025,
  },
  {
    id: "F-03",
    name: "Venkatesh Rao",
    location: "Guntur, Andhra Pradesh",
    rating: 4.9,
    totalListings: 12,
    verified: true,
    phone: "+91 98765 34567",
    joinedYear: 2023,
  },
];

// ==========================================
// 3. MOCK LISTINGS (6 items combining products + farmers)
// ==========================================
export const mockListings: Listing[] = [
  {
    id: "L-101",
    product: mockProducts[0], // Basmati Rice
    farmer: mockFarmers[0], // Rajesh Kumar
    status: "Active",
    postedDate: "2026-06-20",
    minOrderQty: 50,
    description: "Premium aromatic Basmati rice, direct from field, dried and sorted.",
  },
  {
    id: "L-102",
    product: mockProducts[1], // Sharbati Wheat
    farmer: mockFarmers[1], // Suresh Patel
    status: "Active",
    postedDate: "2026-06-19",
    minOrderQty: 100,
    description: "High-grade organic Sharbati wheat, direct from farm gates.",
  },
  {
    id: "L-103",
    product: mockProducts[2], // Hybrid Maize
    farmer: mockFarmers[2], // Venkatesh Rao
    status: "Active",
    postedDate: "2026-06-21",
    minOrderQty: 80,
    description: "Golden hybrid maize, optimal moisture level, ready for wholesale delivery.",
  },
  {
    id: "L-104",
    product: mockProducts[4], // Toor Dal
    farmer: mockFarmers[1], // Suresh Patel
    status: "Active",
    postedDate: "2026-06-18",
    minOrderQty: 20,
    description: "Unpolished organic Toor Dal, rich in protein, naturally farmed.",
  },
  {
    id: "L-105",
    product: mockProducts[5], // Soybean
    farmer: mockFarmers[1], // Suresh Patel
    status: "Pending",
    postedDate: "2026-06-22",
    minOrderQty: 50,
    description: "Market grade soybean seeds, high oil content, cleaned and bagged.",
  },
  {
    id: "L-106",
    product: mockProducts[7], // Mustard Seeds
    farmer: mockFarmers[0], // Rajesh Kumar
    status: "Sold",
    postedDate: "2026-06-15",
    minOrderQty: 40,
    description: "High pungency mustard seeds, suitable for oil mills.",
  },
];

// ==========================================
// 4. MOCK BUYERS (2 buyers)
// ==========================================
export const mockBuyers: Buyer[] = [
  {
    id: "B-01",
    name: "Arjun Singh",
    company: "Adani Wilmar Ltd",
    location: "Meerut, Uttar Pradesh",
    phone: "+91 98765 99999",
  },
  {
    id: "B-02",
    name: "Mohammed Ali",
    company: "Hapur Wholesalers",
    location: "Hapur, Uttar Pradesh",
    phone: "+91 98765 88888",
  },
];

// ==========================================
// 5. MOCK INQUIRIES (4 items)
// ==========================================
export const mockInquiries: Inquiry[] = [
  {
    id: "INQ-201",
    listingId: "L-101",
    buyer: mockBuyers[0],
    message: "Interested in Basmati Rice. Can you dispatch 200 quintals by next Monday?",
    quantity: 200,
    status: "Sent",
    date: "2026-06-21",
  },
  {
    id: "INQ-202",
    listingId: "L-102",
    buyer: mockBuyers[1],
    message: "Is the Sharbati Wheat certified organic? What is your final rate for 150 quintals?",
    quantity: 150,
    status: "Replied",
    date: "2026-06-20",
  },
  {
    id: "INQ-203",
    listingId: "L-103",
    buyer: mockBuyers[0],
    message: "Maize batch moisture level check requested. Please share certification sheet.",
    quantity: 100,
    status: "Sent",
    date: "2026-06-22",
  },
  {
    id: "INQ-204",
    listingId: "L-104",
    buyer: mockBuyers[1],
    message: "Order finalized. Closed the request.",
    quantity: 30,
    status: "Closed",
    date: "2026-06-19",
  },
];

// ==========================================
// 6. MOCK ORDERS (3 items)
// ==========================================
export const mockOrders: Order[] = [
  {
    id: "ORD-901",
    listing: mockListings[0], // Basmati Rice
    buyer: mockBuyers[0], // Arjun Singh
    quantity: 150,
    totalPrice: 480000, // 150 * 3200
    status: "Confirmed",
    date: "2026-06-21",
  },
  {
    id: "ORD-902",
    listing: mockListings[1], // Sharbati Wheat
    buyer: mockBuyers[1], // Mohammed Ali
    quantity: 120,
    totalPrice: 336000, // 120 * 2800
    status: "Delivered",
    date: "2026-06-20",
  },
  {
    id: "ORD-903",
    listing: mockListings[3], // Toor Dal
    buyer: mockBuyers[0], // Arjun Singh
    quantity: 30,
    totalPrice: 285000, // 30 * 9500
    status: "Pending",
    date: "2026-06-22",
  },
];
