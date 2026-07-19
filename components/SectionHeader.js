export default function SectionHeader({ eyebrow, title }) {
  return (
    <div className="section-header">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
    </div>
  );
}
