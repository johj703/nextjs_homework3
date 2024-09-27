export default async function SSGPage() {
  const res = await fetch("http://localhost:4000/posts", {
    cache: "force-cache",
  });

  const data = await res.json();

  return (
    <div>
      SSGPage
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
