type Post = {
  id: number;
  title: string;
  author: string;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("http://localhost:4000/posts", {
    // 60초 동안은 캐싱된 데이터를 가져오겠다.
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("데이터를 불러오는 중 에러가 발생했습니다.");
  return res.json();
}
// revalidate: 60 => 60초 이후에는 기존 데이터를 가지고 화면을 보여주고
// 새롭게 다시 서버에 요청을 한다.
// 전략적으로 사용하는 편이며, 게시판(빠르게 바뀌는 편이 아니기 때문에) 등에서 사용.
export default async function ISRPage() {
  const posts = await getPosts();
  return (
    <div>
      ISRPage
      <pre>{JSON.stringify(posts)}</pre>
    </div>
  );
}
