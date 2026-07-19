import SectionHeader from "@/components/SectionHeader";
import { galeri } from "@/data/galeri";

export default function GaleriPage() {
  return (
    <main>
      <SectionHeader eyebrow="Dokumentasi" title="Galeri Kelas" />
      <div className="gallery-grid">
        {galeri.map((g, i) => (
          <div key={i}>
            <img src={g.src} alt={g.caption} />
            <div className="gallery-caption">{g.caption}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
