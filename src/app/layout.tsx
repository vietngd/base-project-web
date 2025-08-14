import type { Metadata } from "next";
import "./globals.css";
import MuiThemeProvider from "./theme-provider";

export const metadata: Metadata = {
  title: "My App",
  description: "Base Next.js 15 + Tailwind + MUI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='vi'>
      <body>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </body>
    </html>
  );
}
