"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Image as ImageIcon, Users, CalendarDays, MessagesSquare } from "lucide-react";

const items = [
  { href: "/galeri", label: "Galeri", icon: ImageIcon },
  { href: "/struktur", label: "Struktur", icon: Users },
  { href: "/", label: "Dashboard", icon: LayoutDashboard, center: true },
  { href: "/jadwal", label: "Jadwal", icon: CalendarDays },
  { href: "/grup", label: "Grup", icon: MessagesSquare },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="bottom-nav">
      {items.map(({ href, label, icon: Icon, center }) => {
        const active = pathname === href;
        if (center) {
          return (
            <Link key={href} href={href} className="nav-center">
              <div className={`nav-fab ${active ? "active" : ""}`}>
                <Icon size={24} strokeWidth={2.5} />
              </div>
              <span>{label}</span>
            </Link>
          );
        }
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
