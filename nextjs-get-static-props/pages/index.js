var fs = require("fs/promises");
var path = require("path");
import Link from "next/link";

export default function Home(props) {
  const { products } = props;
  return (
    <div>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Link href={`/${product.id}`}>{product.prod_name}</Link>
          </li>
        );
      })}
    </div>
  );
}

// not expose to the cliet side so the database keys and the other keys can be contained in the getStaticProps() method
// will be redered first prerendered the each page
export async function getStaticProps() {
  console.log("Re-rendering ... ");
  var filePath = path.join(process.cwd(), "data", "DUMMY_DATA.json");
  var jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (data.products.length === 0) {
    return { notFound: true };
  }

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}
