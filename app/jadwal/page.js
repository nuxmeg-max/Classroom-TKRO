"use client";
import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import JobCard from "@/components/JobCard";
import { jadwal } from "@/data/jadwal";
import { piket } from "@/data/piket";

export default function JadwalPage() {
  const [tab, setTab] = useState("pelajaran");

  return (
    <main>
      <SectionHeader eyebrow="Kegiatan" title="Jadwal" />
      <div className="tabs">
        <button className={`tab-btn ${tab === "pelajaran" ? "active" : ""}`} onClick={() => setTab("pelajaran")}>
          Pelajaran
        </button>
        <button className={`tab-btn ${tab === "piket" ? "active" : ""}`} onClick={() => setTab("piket")}>
          Piket
        </button>
      </div>

      {tab === "pelajaran" ? (
        Object.entries(jadwal).map(([hari, list]) => (
          <div className="day-block" key={hari}>
            <h3>{hari}</h3>
            <JobCard>
              {list.map((j, i) => (
                <div className="jam-row" key={i}>
                  <div className="waktu">{j.waktu}</div>
                  <div>
                    <div className={`mapel ${j.praktik ? "praktik" : ""}`}>{j.mapel}</div>
                    <div className="guru">{j.guru}</div>
                  </div>
                </div>
              ))}
            </JobCard>
          </div>
        ))
      ) : (
        Object.entries(piket).map(([hari, nama]) => (
          <div className="day-block piket-card" key={hari}>
            <h3>{hari}</h3>
            <JobCard>
              <div className="piket-names">
                {nama.map(n => <span key={n}>{n}</span>)}
              </div>
            </JobCard>
          </div>
        ))
      )}
    </main>
  );
}
