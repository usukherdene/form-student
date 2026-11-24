import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/app/components/ui/sonner";

export const metadata: Metadata = {
  title: "Astra",
  description: "Create your profile in three simple steps.",
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html lang="en">
      <body className="bg-[#09070e] bg-[radial-gradient(ellipse_at_78%_30%,#241336,transparent_46%),radial-gradient(ellipse_at_8%_96%,#1c112d,transparent_42%)] m-0 font-sans text-[#f6f2ff] antialiased scheme-dark">
        {children}
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
};

export default RootLayout;
