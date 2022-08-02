import React from "react";
import { useRouter } from "next/router";

function AboutPage() {
  const router = useRouter();
  function toHomePageHandler() {
    router.push("/");
  }
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={toHomePageHandler}>Home</button>
    </div>
  );
}

export default AboutPage;
