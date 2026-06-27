import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plans | Grain Saathi",
  description: "View pricing packages for Grain Saathi, including basic farmer listings, premium farmer prioritizations, and free buyer accounts.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
