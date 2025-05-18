const data = [
  '3D TEXTURE',
  'LAPTOP MOCKUPS',
  'MOBILE MOCKUPS',
];

export default function Cards() {
  return (
    <div className="cards">
      {data.map((title, i) => (
        <div className="card" key={i}>
          <div className="card-title">{title}</div>
        </div>
      ))}
    </div>
  );
}