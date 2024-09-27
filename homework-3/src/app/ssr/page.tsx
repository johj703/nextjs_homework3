type Post = {
  id: number;
  title: string;
  author: string;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("http://localhost:4000/posts", { cache: "no-store" });
  if (!res.ok) throw new Error("데이터를 불러오는 중 에러가 발생했습니다.");
  return res.json();
}

// 서버에 요청할 때마다 새롭게 응답을 새로 받는 방식
//
export default async function SSRPage() {
  const posts = await getPosts();
  return (
    <div>
      SSRPage
      <pre>{JSON.stringify(posts)}</pre>
    </div>
  );
}
