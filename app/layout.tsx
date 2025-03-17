import Background from "./_components/background";
import { geistMono, geistSans, ndot47 } from "./_lib/fonts";
import { cn } from "./_lib/utils";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(ndot47.variable, geistMono.variable, geistSans.variable)}
    >
      <body className="overflow-x-hidden bg-neutral-900 font-geistSans text-white">
        {children}
        <Background />
      </body>
    </html>
  );
}
