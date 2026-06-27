import type { Metadata } from 'next';
import ProductsClient from './ProductsClient';

export const metadata: Metadata = {
  title: "Agricultural Products | Grain Saathi",
  description: "Browse high-grade agricultural commodities, rice, wheat, pulses, and oilseeds listed on Grain Saathi.",
};

export default function Products() {
  return <ProductsClient />;
}

