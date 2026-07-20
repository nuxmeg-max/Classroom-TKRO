import SectionHeader from "@/components/SectionHeader";
import { grup } from "@/data/grup";
import { MessageCircle, Instagram, Music2 } from "lucide-react";

const iconMap = { whatsapp: MessageCircle, instagram: Instagram, tiktok: Music2 };
const gradientMap = {
  whatsapp: "linear-gradient(135deg,#25D366,#128C7E)",
  instagram: "linear-gradient(135deg,#833AB4,#FD1D1D,#FCB045)",
  tiktok: "linear-gradient(135deg,#00F2EA,#161823,#FF0050)",
};

export default function GrupPage() {
  return (
    <main>
      <SectionHeader eyebrow="Terhubung" title="Grup & Medsos" />
      {grup.map((g, i) => {
        const Icon = iconMap[g.type] || MessageCircle;
        return (
          <a
            key={i}
            href={g.url}
            target="_blank"
            rel="noopener noreferrer"
            className="grup-card-v2"
          >
            <div className="grup-banner" style={{ background: gradientMap[g.type] || "var(--orange)" }}>
              <div className="icon-circle"><Icon size={30} /></div>
            </div>
            <div className="grup-body">
              <div>
                <h3>{g.nama}</h3>
                <p>{g.deskripsi}</p>
              </div>
              <div className="grup-join-btn">GABUNG</div>
            </div>
          </a>
        );
      })}
    </main>
  );
}
