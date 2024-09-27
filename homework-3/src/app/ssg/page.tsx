type Post = {
  id: number;
  title: string;
  author: string;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("http://localhost:4000/posts");
  if (!res.ok) throw new Error("데이터를 불러오는 중 에러가 발생했습니다.");
  return res.json();
}

// 빌드 타임에 모든 정적페이지를 만들고 캐싱된 페이지를 보여주는 방식
// 공지사항, 약관 등
export default async function SSGPage() {
  const posts = await getPosts();
  return (
    <div>
      SSGPage
      <pre>{JSON.stringify(posts)}</pre>
    </div>
  );
}
