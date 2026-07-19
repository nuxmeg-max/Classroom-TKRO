import Hero from "@/components/Hero";
import StatCard from "@/components/StatCard";
import SectionHeader from "@/components/SectionHeader";
import JobCard from "@/components/JobCard";
import { siswa } from "@/data/siswa";
import { galeri } from "@/data/galeri";
import { piket } from "@/data/piket";
import { jadwal } from "@/data/jadwal";

export default function DashboardPage() {
  const totalSiswa = siswa.filter(s => s.jabatan !== "Wali Kelas").length;
  const lakiLaki = siswa.filter(s => s.jk === "L" && s.jabatan !== "Wali Kelas").length;
  const perempuan = siswa.filter(s => s.jk === "P" && s.jabatan !== "Wali Kelas").length;
  const totalMapel = new Set(Object.values(jadwal).flat().map(j => j.mapel)).size;

  const hariIni = new Date().toLocaleDateString("id-ID", { weekday: "long" });
  const petugasHariIni = piket[hariIni] || [];

  return (
    <main>
      <Hero
        plate="UNIT · TKRO-01"
        title="10 TKRO 1"
        subtitle="Teknik Kendaraan Ringan Otomotif — kelas kita, bengkel kita."
      />

      <SectionHeader eyebrow="Statistik" title="Data Kelas" />
      <div className="stat-grid">
        <StatCard num={totalSiswa} label="Total Murid" />
        <StatCard num={lakiLaki} label="Laki-laki" />
        <StatCard num={perempuan} label="Perempuan" />
        <StatCard num={totalMapel} label="Mata Pelajaran" />
      </div>

      <SectionHeader eyebrow="Hari Ini" title={`Piket ${hariIni}`} />
      <JobCard>
        {petugasHariIni.length > 0 ? (
          <div className="piket-names">
            {petugasHariIni.map(n => <span key={n}>{n}</span>)}
          </div>
        ) : (
          <p style={{ color: "var(--chrome)", fontSize: 13 }}>Tidak ada jadwal piket hari ini.</p>
        )}
      </JobCard>

      <SectionHeader eyebrow="Dokumentasi" title="Galeri Terbaru" />
      <div className="gallery-grid">
        {galeri.slice(0, 4).map((g, i) => (
          <img key={i} src={g.src} alt={g.caption} />
        ))}
      </div>
    </main>
  );
}
