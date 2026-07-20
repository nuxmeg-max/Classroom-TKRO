import SectionHeader from "@/components/SectionHeader";
import JobCard from "@/components/JobCard";
import { siswa } from "@/data/siswa";

export default function StrukturPage() {
  const waliKelas = siswa.find(s => s.jabatan === "Wali Kelas");
  const ketua = siswa.find(s => s.jabatan === "Ketua Kelas");
  const pengurusLain = siswa.filter(
    s => s.jabatan && s.jabatan !== "Wali Kelas" && s.jabatan !== "Ketua Kelas"
  );
  const anggota = siswa.filter(s => !s.jabatan);

  return (
    <main>
      <SectionHeader eyebrow="Organisasi" title="Struktur Kelas" />

      <div className="org-chart">
        {waliKelas && (
          <>
            <JobCard style={{ width: 200 }}>
              <div className="avatar-ring">{waliKelas.nama.charAt(0)}</div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>{waliKelas.nama}</div>
              <div className="eyebrow" style={{ marginTop: 4 }}>{waliKelas.jabatan}</div>
            </JobCard>
            <div className="org-connector" />
          </>
        )}

        {ketua && (
          <>
            <JobCard style={{ width: 180 }}>
              <div className="avatar-ring">{ketua.nama.charAt(0)}</div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>{ketua.nama}</div>
              <div className="eyebrow" style={{ marginTop: 4 }}>{ketua.jabatan}</div>
            </JobCard>
            <div className="org-connector" />
          </>
        )}

        <div className="pengurus-grid" style={{ width: "100%" }}>
          {pengurusLain.map(p => (
            <JobCard key={p.no}>
              <div className="avatar-ring">{p.nama.charAt(0)}</div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>{p.nama}</div>
              <div className="eyebrow" style={{ marginTop: 4 }}>{p.jabatan}</div>
            </JobCard>
          ))}
        </div>
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
