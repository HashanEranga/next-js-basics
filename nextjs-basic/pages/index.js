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

  const projectList = [
    {
      id: "project1",
      name: "ProjectA",
    },
    {
      id: "project2",
      name: "ProjectB",
    },
    {
      id: "project3",
      name: "ProjectC",
    },
    {
      id: "project4",
      name: "ProjectD",
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
        {projectList.map((project) => {
          return (
            <li key={project.id}>
              <Link
                href={{
                  pathname: "/portfolio/[id]",
                  query: { id: project.name },
                }}
              >
                {project.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
