export default async function ISRPage() {
  const res = await fetch("http://localhost:4000/posts", {
    next: {
      revalidate: 5,
    },
  });

  const data = await res.json();

  return (
    <div>
      ISRPage
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
