import { useRouter } from "next/router";
import Link from "next/Link";

export default function HomePage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  const blogPosts = [
    {
      id: "post1",
      name: "intro a",
    },
    {
      id: "post2",
      name: "intro b",
    },
  ];

  return (
    <div>
      <h1>The HomePage</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
        <li>
          <Link href="/clients/hashan">Hashan</Link>
        </li>
        <li>
          <Link href="/clients/hashan/eranga">Eranga</Link>
        </li>
        <li>
          <Link href="/clients/hashan/ishini">Ishini</Link>
        </li>
        {blogPosts.map((blog) => {
          return (
            <li key={blog.id}>
              <Link href={`/clients/${blog.id}`}>{blog.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
