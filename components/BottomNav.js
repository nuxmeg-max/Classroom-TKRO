"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Image as ImageIcon, Users, CalendarDays, MessagesSquare } from "lucide-react";

const items = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/galeri", label: "Galeri", icon: ImageIcon },
  { href: "/struktur", label: "Struktur", icon: Users },
  { href: "/jadwal", label: "Jadwal", icon: CalendarDays },
  { href: "/grup", label: "Grup", icon: MessagesSquare },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="bottom-nav">
      {items.map(({ href, label, icon: Icon }) => {
        const active = pathname === href;
        return (
          <Link key={href} href={href} className={`nav-item ${active ? "active" : ""}`}>
            <Icon size={20} strokeWidth={active ? 2.5 : 2} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
