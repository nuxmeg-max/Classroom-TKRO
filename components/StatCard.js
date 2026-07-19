export default function StatCard({ num, label }) {
  return (
    <div className="stat-card">
      <div className="num">{num}</div>
      <div className="label">{label}</div>
    </div>
  );
}
