export default function ProfileCard({ setTimeFilter }) {
  return (
    <>
      <img src="/image-jeremy.png" alt="Jeremy" />
      <p>Report for</p>
      <h2>Jeremy Robson</h2>
      <button type="button" onClick={() => setTimeFilter('daily')}>
        Daily
      </button>
      <button type="button" onClick={() => setTimeFilter('weekly')}>
        Weekly
      </button>
      <button type="button" onClick={() => setTimeFilter('monthly')}>
        Monthly
      </button>
    </>
  );
}
