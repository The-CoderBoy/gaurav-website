import { Montserrat } from "next/font/google";
import { Inter } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700", "100", "200", "300", "500", "600", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "700", "100", "200", "300", "500", "600", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

module.exports = { montserrat, inter };
