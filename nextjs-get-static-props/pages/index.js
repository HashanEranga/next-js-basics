export default function Home(props) {
  const { products } = props;
  return (
    <div>
      {products.map((product) => {
        return <li key={product.id}>{product.prodName}</li>;
      })}
    </div>
  );
}

// not expose to the cliet side so the database keys and the other keys can be contained in the getStaticProps() method
// will be redered first prerendered the each page
export async function getStaticProps() {
  return {
    props: {
      products: [
        { id: "1", prodName: "Product 1" },
        { id: "2", prodName: "Product 2" },
        { id: "3", prodName: "Product 3" },
      ],
    },
  };
}
