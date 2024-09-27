export default async function SSGPage() {
  const res = await fetch("http://localhost:4000/posts", {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div>
      SSRPage
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
