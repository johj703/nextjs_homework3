"use client";
import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  author: string;
};

export default function CSRPage() {
  const [state, setState] = useState("");

  useEffect(() => {
    // fetch("http://localhost:4000/posts")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setState(JSON.stringify(data));
    //   });
  });

  return (
    <div>
      CSRPage
      <div>{state}</div>
    </div>
  );
}
