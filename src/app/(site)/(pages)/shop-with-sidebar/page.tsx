import React from "react";
import ShopWithSidebar from "@/components/ShopWithSidebar";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "ivancellgalon.com | Distributor Galon Air Minum Surabaya - Resmi",
  description: "Ivan Cell (ivancell galon) menyediakan air galon, air botol, dan minuman berkualitas di Surabaya sejak 2005. Harga grosir untuk rumah, kantor, dan usaha. Tersedia layanan antar, promo, dan pesanan Shopee. Hubungi 0812-3000-0070 atau pesan via Instagram @ivancell_galon.",
  keywords: [
    "ivan cell", "ivancell galon", "galon Surabaya", "air galon Surabaya", "air minum isi ulang", "supplier galon Surabaya",
    "air mineral Surabaya", "galon murah Surabaya", "galon botol Surabaya", "grosir galon Surabaya", "antar galon Surabaya"
  ],
  openGraph: {
    title: "ivancellgalon.com | Distributor Galon Air Minum Surabaya",
    description: "Beli galon air, air mineral, air botol, Cheers, Cleo, Vit, Aqua, dan lebih banyak lagi di Ivan Cell Surabaya. Tersedia Shopee dan layanan antar. Sejak 2005.",
    url: "https://ivancellgalon.com",
    siteName: "ivancellgalon.com",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://ivancellgalon.com/images/seo-banner.jpg", // <-- Replace with your real image URL
        width: 1200,
        height: 630,
        alt: "Ivancell Galon Surabaya Air Minum",
        type: 'image/jpeg',
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ivancell_galon",
    title: "Ivan Cell | Galon Air Surabaya",
    description: "Distributor & supplier galon air minum isi ulang, botol, dan minuman Surabaya. Sejak 2005, antar ke rumah & kantor.",
    images: ["https://ivancellgalon.com/images/seo-banner.jpg"], // edit as needed
  },
  metadataBase: new URL('https://ivancellgalon.com'),
  alternates: {
    canonical: "https://ivancellgalon.com/",
  }
};


const ShopWithSidebarPage = () => {
  return (
    <main>
      <ShopWithSidebar />
    </main>
  );
};

export default ShopWithSidebarPage;
