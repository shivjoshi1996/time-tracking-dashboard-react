export default function TimeCard({ title, current, previous }) {
  const titleFormatted = title.replace(/\s+/g, '-').toLowerCase();
  console.log(titleFormatted);
  const imageSrc = `/icon-${titleFormatted}.svg`;

  return (
    <>
      <img src={imageSrc} alt={`${title} icon`} />
      <p>{title}</p>
      <h2>{current}hrs</h2>
      <p>Last Week - {previous}hrs</p>
    </>
  );
}
