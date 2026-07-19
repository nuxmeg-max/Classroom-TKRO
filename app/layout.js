import "./globals.css";
import BottomNav from "@/components/BottomNav";

export const metadata = {
  title: "10 TKRO 1 — Workshop Class",
  description: "Website kelas 10 TKRO 1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <div className="app-shell">{children}</div>
        <BottomNav />
      </body>
    </html>
  );
}
