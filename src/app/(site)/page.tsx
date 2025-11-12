import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ivancellgalon.com | Website Resmi ivancell_galon",
  description: "Menyediakan berbagai kebutuhan minuman sejak 2005",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
