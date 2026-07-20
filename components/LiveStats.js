"use client";
import { useEffect, useState } from "react";

export default function LiveStats() {
  const [battery, setBattery] = useState(null);
  const [supported, setSupported] = useState(true);
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    if (navigator.getBattery) {
      navigator.getBattery().then((b) => {
        const update = () => setBattery(Math.round(b.level * 100));
        update();
        b.addEventListener("levelchange", update);
      });
    } else {
      setSupported(false);
    }

    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("id-ID", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="stat-card">
        <div className="num">{supported ? (battery !== null ? `${battery}%` : "…") : "N/A"}</div>
        <div className="label">Baterai Pengunjung</div>
      </div>
      <div className="stat-card">
        <div className="num" style={{ fontSize: 24 }}>{time}</div>
        <div className="label">Waktu WIB</div>
      </div>
    </>
  );
}
