export default function Tag({ data }:any) {
  if (!data) return <></>;
  return (
    <div className="tag" key={data.name}>
      {data.name}
    </div>
  );
}
