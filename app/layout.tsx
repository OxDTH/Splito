import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Header } from "@/components/Header";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Optimize font loading
});

export const metadata: Metadata = {
  title: "Aapale India | Premium Tech Store",
  description: "Shop the latest tech gadgets and accessories at Aapale India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              <main className="min-h-[calc(100vh-200px)] bg-background pb-16 md:pb-0">{children}</main>
              <Toaster
                position="bottom-right"
                closeButton
                theme="system"
                richColors
                duration={2000}
                style={{ fontSize: '14px' }}
                className="sonner-toast-custom"
              />
            </ThemeProvider>
      </body>
    </html>
  );
}