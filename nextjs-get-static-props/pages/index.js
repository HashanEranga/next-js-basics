var fs = require('fs/promises')
var path = require('path')

export default function Home(props) {
  const { products } = props;
  return (
    <div>
      {products.map((product) => {
        return (
        <li key={product.id}>{product.prod_name}</li>
        )

      })}
    </div>
  );
}

// not expose to the cliet side so the database keys and the other keys can be contained in the getStaticProps() method
// will be redered first prerendered the each page
export async function getStaticProps() {
  var filePath = path.join(process.cwd(), 'data', 'DUMMY_DATA.json')
  var jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)

  return {
    props: {
      products: data.products
    },
  };
}
