import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SEO-Optimize Shopify Product Descriptions Automatically",
  description: "Analyze competitor product pages and rewrite your Shopify descriptions for better search rankings. AI-powered SEO optimization for e-commerce store owners."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="17f962f2-f401-480c-b385-bbb3ebe46f91"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
