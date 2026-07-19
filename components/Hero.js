export default function Hero({ title, subtitle, plate }) {
  return (
    <div className="hero">
      <span className="plate">{plate}</span>
      <h1 style={{ marginTop: 10 }}>{title}</h1>
      <p>{subtitle}</p>
      <div className="hazard-bar" style={{ marginTop: 16 }} />
    </div>
  );
}
