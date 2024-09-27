"use client";
import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  author: string;
};

export default function CSRPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch("http://localhost:4000/posts")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setState(JSON.stringify(data));
    //   });
    fetch("http://localhost:4000/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("데이터를 불러오는 중 에러가 발생했습니다.");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("데이터 가져오는 것을 실패했습니다. :", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      CSRPage
      <div>{state}</div>
    </div>
  );
}
