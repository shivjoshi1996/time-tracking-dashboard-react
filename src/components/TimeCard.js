export default function TimeCard({ title, current, previous }) {
  return (
    <>
      <img src="/icon-work.svg" alt="work icon" />
      <p>{title}</p>
      <h2>{current}hrs</h2>
      <p>Last Week - {previous}hrs</p>
    </>
  );
}
