import React from "react";
import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();
  console.log(router.query);
  function navigateHashanHandler() {
    router.push({
      pathname: "/clients/[clientProjectId]",
      query: { clientProjectId: "hashan" },
    });
  }

  return (
    <div>
      <h1>Blog Post Page</h1>
      <button onClick={navigateHashanHandler}>Goto Hashan</button>
    </div>
  );
}

export default BlogPostsPage;
