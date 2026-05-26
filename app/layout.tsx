import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Astra Studio | Design Agency",
  description:
    "A modern creative design agency homepage built with Next.js and Tailwind CSS.",
  keywords: [
    "Design Agency",
    "Web Development",
    "UI UX",
    "Branding",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#0B0F19] text-white antialiased selection:bg-purple-500 selection:text-white overflow-x-hidden">
        {/* Soft blurred background glows */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-[-120px] left-[-80px] h-[350px] w-[350px] rounded-full bg-purple-600/20 blur-[140px]" />
          <div className="absolute bottom-[-100px] right-[-100px] h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[140px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/20 via-[#0F172A]/20 to-black/40" />
        </div>

        {children}
      </body>
    </html>
  );
}