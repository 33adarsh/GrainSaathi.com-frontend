import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Grain Saathi",
  description: "Contact the Grain Saathi support team for inquiry logs, mandi listings, and trading parameters.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
