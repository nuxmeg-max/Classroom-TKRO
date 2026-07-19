import SectionHeader from "@/components/SectionHeader";
import JobCard from "@/components/JobCard";
import { siswa } from "@/data/siswa";

export default function StrukturPage() {
  const pengurus = siswa.filter(s => s.jabatan);
  const anggota = siswa.filter(s => !s.jabatan);

  return (
    <main>
      <SectionHeader eyebrow="Organisasi" title="Struktur Kelas" />
      <div className="pengurus-grid">
        {pengurus.map(p => (
          <JobCard key={p.no}>
            <div className="avatar-ring">{p.nama.charAt(0)}</div>
            <div style={{ fontSize: 14, fontWeight: 700 }}>{p.nama}</div>
            <div className="eyebrow" style={{ marginTop: 4 }}>{p.jabatan}</div>
          </JobCard>
        ))}
      </div>

      <SectionHeader eyebrow="Roster" title="Anggota Kelas" />
      <JobCard>
        {anggota.map(a => (
          <div className="roster-row" key={a.no}>
            <span className="no">{a.no}.</span>
            <span style={{ flex: 1 }}>{a.nama}</span>
            <span style={{ color: "var(--chrome)" }}>{a.jk}</span>
          </div>
        ))}
      </JobCard>
    </main>
  );
}
