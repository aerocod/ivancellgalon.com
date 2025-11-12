import React from "react";
import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ivancellgalon.com | Website Resmi ivancell_galon",
  description: "Menyediakan berbagai kebutuhan minuman sejak 2005",
  // other metadata
};

const ShopDetailsPage = () => {
  return (
    <main>
      <ShopDetails />
    </main>
  );
};

export default ShopDetailsPage;
