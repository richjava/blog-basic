export default function Tag({ data }:any) {
  if (!data) return <></>;
  return (
    <div className="px-2 py-1 text-center text-white no-underline transition-colors text-label-01 bg-accent dark:bg-light-03 rounded-corner-04 dark:hover:bg-light-02 hover:bg-dark-01 dark:text-dark-04" key={data.name}>
      {data.name}
    </div>
  );
}
