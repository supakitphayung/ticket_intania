import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { IBM_Plex_Sans_Thai as IBMPlexSansThai } from "next/font/google";
import localFont from "next/font/local";

export const ibmPlexSansThai = IBMPlexSansThai({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans-thai",
});

export const ndot47 = localFont({
  src: "../../public/ndot-47.ttf",
  variable: "--font-ndot47",
});

export const geistMono = GeistMono;
export const geistSans = GeistSans;
