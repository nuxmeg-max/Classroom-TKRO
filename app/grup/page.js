import SectionHeader from "@/components/SectionHeader";
import JobCard from "@/components/JobCard";
import { grup } from "@/data/grup";
import { MessageCircle, Instagram, Music2 } from "lucide-react";

const iconMap = { whatsapp: MessageCircle, instagram: Instagram, tiktok: Music2 };

export default function GrupPage() {
  return (
    <main>
      <SectionHeader eyebrow="Terhubung" title="Grup & Medsos" />
      {grup.map((g, i) => {
        const Icon = iconMap[g.type] || MessageCircle;
        return (
          <JobCard key={i} style={{ marginBottom: 12 }}>
            <a href={g.url} target="_blank" rel="noopener noreferrer" className="grup-card">
              <div className="grup-icon"><Icon size={22} /></div>
              <div className="grup-info">
                <h3>{g.nama}</h3>
                <p>{g.deskripsi}</p>
              </div>
              <div className="grup-btn">BUKA</div>
            </a>
          </JobCard>
        );
      })}
    </main>
  );
}
